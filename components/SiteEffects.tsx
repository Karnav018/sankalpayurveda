"use client";

import { useEffect } from "react";

/**
 * Ports the imperative interactions from the original design:
 *  - mobile slide-in menu (burger / close / scrim / link click)
 *  - scroll-reveal with staggered siblings (IntersectionObserver)
 *  - hero parallax + nav colour change on scroll
 *  - treatment card image hover-zoom
 * Runs once on mount against the live DOM.
 */
export default function SiteEffects() {
  useEffect(() => {
    const root = document;

    // ----- mobile menu -----
    const menu = root.getElementById("mobmenu");
    let cleanupMenu: (() => void) | undefined;
    if (menu) {
      const panel = root.getElementById("mobpanel");
      const scrim = root.getElementById("mobscrim");
      const toggle = (open: boolean) => {
        menu.style.pointerEvents = open ? "auto" : "none";
        if (scrim) scrim.style.opacity = open ? "1" : "0";
        if (panel) panel.style.transform = open ? "translateX(0)" : "translateX(100%)";
        document.body.style.overflow = open ? "hidden" : "";
      };
      const open = () => toggle(true);
      const close = () => toggle(false);
      const burger = root.getElementById("burger");
      const closeBtn = root.getElementById("mobclose");
      burger?.addEventListener("click", open);
      closeBtn?.addEventListener("click", close);
      scrim?.addEventListener("click", close);
      const links = Array.from(menu.querySelectorAll("a"));
      links.forEach((a) => a.addEventListener("click", close));
      cleanupMenu = () => {
        burger?.removeEventListener("click", open);
        closeBtn?.removeEventListener("click", close);
        scrim?.removeEventListener("click", close);
        links.forEach((a) => a.removeEventListener("click", close));
      };
    }

    // ----- scroll reveals -----
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    let io: IntersectionObserver | undefined;
    if (reduce) {
      items.forEach((el) => el.classList.add("is-visible"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const target = e.target as HTMLElement;
              const parent = target.parentElement;
              const sibs = parent
                ? Array.from(parent.querySelectorAll<HTMLElement>(":scope > [data-reveal]"))
                : [target];
              const idx = Math.max(0, sibs.indexOf(target));
              target.style.transitionDelay = `${idx * 0.09}s`;
              target.classList.add("is-visible");
              io!.unobserve(target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );
      items.forEach((el) => io!.observe(el));
    }

    // ----- hero parallax + nav on scroll -----
    const hero = root.getElementById("heroBg");
    const nav = root.getElementById("topnav");
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (hero) hero.style.transform = `translateY(${y * 0.28}px)`;
      if (nav) {
        if (y > 80) {
          nav.style.background = "rgba(244,241,232,.95)";
          nav.style.color = "#23281F";
          nav.style.padding = "10px 6vw";
          nav.style.boxShadow = "0 6px 24px -14px rgba(30,45,35,.4)";
        } else {
          nav.style.background =
            "linear-gradient(180deg, rgba(28,40,31,.65) 0%, rgba(28,40,31,.4) 55%, rgba(28,40,31,0) 100%)";
          nav.style.color = "#F4F1E8";
          nav.style.padding = "14px 6vw";
          nav.style.boxShadow = "none";
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ----- treatment card hover zoom -----
    const cards = Array.from(root.querySelectorAll<HTMLElement>(".tcard"));
    const cardCleanups = cards.map((card) => {
      const bg = card.querySelector<HTMLElement>(".tcard-bg");
      const enter = () => {
        if (bg) bg.style.transform = "scale(1.06)";
      };
      const leave = () => {
        if (bg) bg.style.transform = "scale(1)";
      };
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      };
    });

    return () => {
      cleanupMenu?.();
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      cardCleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}

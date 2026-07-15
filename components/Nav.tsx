import Link from "next/link";
import { navLinks } from "@/lib/data";
import { serif } from "@/lib/fonts";
import Logo from "@/components/Logo";

/**
 * Fixed, transparent-over-hero header. Turns solid on scroll (see SiteEffects).
 * `active` highlights the current page's link in gold.
 */
export default function Nav({ active }: { active?: string }) {
  return (
    <header
      id="topnav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 6vw",
        color: "var(--cream)",
        // Scrim so the cream text stays legible over bright parts of the hero.
        // Fades out downward; SiteEffects swaps it for the solid bar on scroll.
        background:
          "linear-gradient(180deg, rgba(28,40,31,.65) 0%, rgba(28,40,31,.4) 55%, rgba(28,40,31,0) 100%)",
        transition: "background .5s ease, padding .5s ease, color .5s ease",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <Logo size={34} />
        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontFamily: serif, fontSize: 27, letterSpacing: ".02em" }}>Sankalp</span>
          <span style={{ fontSize: 10, letterSpacing: ".42em", opacity: 0.85, marginTop: 4 }}>
            A Y U R V E D A
          </span>
        </span>
      </Link>

      <nav
        className="desknav"
        style={{ display: "flex", gap: 38, fontSize: 14, letterSpacing: ".04em" }}
      >
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={l.href === active ? { color: "var(--gold)" } : undefined}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/booking"
        className="deskbook"
        style={{
          border: "1px solid currentColor",
          padding: "9px 20px",
          borderRadius: 999,
          fontSize: 13,
          letterSpacing: ".06em",
          transition: "background .3s,color .3s",
        }}
      >
        Book Appointment
      </Link>

      <div
        id="burger"
        className="burger"
        aria-label="Open menu"
        style={{
          display: "none",
          flexDirection: "column",
          gap: 6,
          cursor: "pointer",
          padding: 6,
        }}
      >
        <span style={{ width: 26, height: 2, background: "currentColor", borderRadius: 2 }} />
        <span style={{ width: 26, height: 2, background: "currentColor", borderRadius: 2 }} />
        <span style={{ width: 26, height: 2, background: "currentColor", borderRadius: 2 }} />
      </div>
    </header>
  );
}

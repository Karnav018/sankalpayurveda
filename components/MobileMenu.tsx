import Link from "next/link";
import { navLinks, CONTACT } from "@/lib/data";
import { serif, gujarati } from "@/lib/fonts";
import Logo from "@/components/Logo";

export default function MobileMenu() {
  return (
    <div id="mobmenu" style={{ position: "fixed", inset: 0, zIndex: 100, pointerEvents: "none" }}>
      <div
        id="mobscrim"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(20,28,22,.55)",
          opacity: 0,
          transition: "opacity .4s ease",
        }}
      />
      <div
        id="mobpanel"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(82vw,340px)",
          background: "var(--green-dark)",
          color: "var(--cream)",
          transform: "translateX(100%)",
          transition: "transform .45s cubic-bezier(.4,0,.1,1)",
          display: "flex",
          flexDirection: "column",
          padding: 34,
          boxShadow: "-24px 0 70px -24px rgba(0,0,0,.65)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 42,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--cream)" }}>
            <Logo size={30} />
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontFamily: serif, fontSize: 24, color: "var(--cream)" }}>Sankalp</span>
              <span style={{ fontSize: 9, letterSpacing: ".42em", color: "#8A9584", marginTop: 4 }}>
                A Y U R V E D A
              </span>
            </span>
          </div>
          <div id="mobclose" style={{ fontSize: 34, lineHeight: 1, color: "var(--gold)", cursor: "pointer" }}>
            ×
          </div>
        </div>

        <nav style={{ display: "flex", flexDirection: "column" }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: serif,
                fontSize: 25,
                color: "var(--cream)",
                padding: "14px 0",
                borderBottom: "1px solid rgba(201,198,184,.14)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/booking"
          style={{
            marginTop: 30,
            background: "var(--gold)",
            color: "var(--green-dark)",
            textAlign: "center",
            fontWeight: 600,
            fontSize: 15,
            padding: 16,
            borderRadius: 999,
          }}
        >
          Book Appointment
        </Link>

        <div style={{ marginTop: "auto", paddingTop: 34 }}>
          <div style={{ fontSize: 11, letterSpacing: ".2em", color: "#8A9584", marginBottom: 10 }}>
            CALL US
          </div>
          <a
            href={`tel:${CONTACT.phonePrimary.tel}`}
            style={{ fontFamily: serif, fontSize: 22, color: "var(--gold)" }}
          >
            {CONTACT.phonePrimary.display}
          </a>
          <div style={{ fontFamily: gujarati, fontSize: 13, color: "#8A9584", marginTop: 18 }}>
            શુદ્ધ · પ્રાકૃતિક · પ્રમાણિત
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { navLinks } from "@/lib/data";
import { serif } from "@/lib/fonts";

/** Solid, sticky header used on pages without a hero (Booking). */
export default function BookingHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 6vw",
        background: "rgba(244,241,232,.9)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(46,64,52,.1)",
      }}
    >
      <Link href="/" style={{ display: "flex", flexDirection: "column", lineHeight: 1, color: "var(--green)" }}>
        <span style={{ fontFamily: serif, fontSize: 26 }}>Sankalp</span>
        <span style={{ fontSize: 10, letterSpacing: ".42em", color: "var(--sage)", marginTop: 4 }}>
          A Y U R V E D A
        </span>
      </Link>

      <nav
        className="desknav"
        style={{ display: "flex", gap: 36, fontSize: 14, letterSpacing: ".04em", color: "#3A4A3C" }}
      >
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>

      <div
        id="burger"
        className="burger"
        aria-label="Open menu"
        style={{ display: "none", flexDirection: "column", gap: 6, cursor: "pointer", padding: 6, color: "var(--green)" }}
      >
        <span style={{ width: 26, height: 2, background: "currentColor", borderRadius: 2 }} />
        <span style={{ width: 26, height: 2, background: "currentColor", borderRadius: 2 }} />
        <span style={{ width: 26, height: 2, background: "currentColor", borderRadius: 2 }} />
      </div>
    </header>
  );
}

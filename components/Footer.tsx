import Link from "next/link";
import { navLinks, CONTACT } from "@/lib/data";
import { serif, gujarati } from "@/lib/fonts";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--green-dark)",
        color: "#C9C6B8",
        padding: "clamp(60px,9vh,96px) 6vw 40px",
      }}
    >
      <div
        className="footer-grid"
        style={{ paddingBottom: 56, borderBottom: "1px solid rgba(201,198,184,.15)" }}
      >
        <div>
          <div style={{ color: "var(--gold)", marginBottom: 14 }}>
            <Logo size={40} />
          </div>
          <div style={{ fontFamily: serif, fontSize: 30, color: "var(--cream)" }}>Sankalp Ayurved</div>
          <div style={{ fontSize: 10, letterSpacing: ".42em", color: "#8A9584", margin: "6px 0 20px" }}>
            C L I N I C
          </div>
          <p style={{ fontWeight: 300, fontSize: 15, lineHeight: 1.7, maxWidth: "38ch", opacity: 0.8 }}>
            Authentic Ayurvedic treatment in a pure, natural environment. Where tradition meets
            healing.
          </p>
          <div style={{ fontFamily: gujarati, fontSize: 14, color: "#8A9584", marginTop: 18 }}>
            પરંપરા · શુદ્ધતા · સ્વસ્થ જીવન
          </div>
        </div>

        <div>
          <div style={{ fontSize: 12, letterSpacing: ".2em", color: "#8A9584", marginBottom: 20 }}>
            EXPLORE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 15 }}>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
            <Link href="/booking">Book Appointment</Link>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 12, letterSpacing: ".2em", color: "#8A9584", marginBottom: 20 }}>
            VISIT US
          </div>
          <div style={{ fontWeight: 300, fontSize: 15, lineHeight: 1.9 }}>
            Nr. Bus Stop, Upera Village
            <br />
            Ta. Unjha, Dist. Mehsana
            <br />
            <br />
            <a href={`tel:${CONTACT.phoneSecondary.tel}`}>{CONTACT.phoneSecondary.display}</a> ·{" "}
            <a href={`tel:${CONTACT.phonePrimary.tel}`}>{CONTACT.phonePrimary.display}</a>
            <br />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>
      </div>

      <div
        style={{
          paddingTop: 28,
          fontSize: 13,
          color: "#7A8474",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span>© 2026 Sankalp Ayurved Clinic. All rights reserved.</span>
        <span>Dr. Ashish J. Prajapati · B.A.M.S (GB-I 14594)</span>
      </div>
    </footer>
  );
}

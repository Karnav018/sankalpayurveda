import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import MobileMenu from "@/components/MobileMenu";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import { CONTACT } from "@/lib/data";
import { serif, devanagari, gujarati } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Visit & Contact · Sankalp Ayurved Clinic",
  description:
    "Visit Sankalp Ayurved Clinic near the bus stop, Upera Village, Ta. Unjha, Dist. Mehsana. Call 98241 22016 / 81601 30003. Mon–Sat, 9 AM – 7 PM.",
};

export default function ContactPage() {
  return (
    <>
      <Nav active="/contact" />
      <MobileMenu />
      <main>
        <PageHero
          kicker="संपर्कः"
          title="Visit & Contact"
          image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1700&q=80"
          height="52vh"
          minHeight={400}
        />

        {/* Clinic exterior band — shows public/clinic/exterior.jpg when present,
            otherwise a calm brand-green band with the caption (never broken). */}
        <section
          style={{
            position: "relative",
            height: "clamp(300px,42vh,460px)",
            backgroundImage: "url('/clinic/exterior.jpg')",
            backgroundColor: "var(--green)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(28,40,31,.15) 0%, rgba(28,40,31,.7) 100%)",
            }}
          />
          <div data-reveal style={{ position: "relative", padding: "clamp(28px,5vw,56px) 6vw", color: "var(--cream)" }}>
            <div style={{ fontFamily: devanagari, fontSize: "clamp(14px,1.4vw,18px)", color: "var(--gold)", marginBottom: 12 }}>
              श्री उपेरा
            </div>
            <div style={{ fontFamily: serif, fontSize: "clamp(28px,3.4vw,46px)", lineHeight: 1.1 }}>
              Find us near the bus stop, Upera
            </div>
          </div>
        </section>

        {/* Contact cards */}
        <section style={{ padding: "clamp(64px,10vh,120px) 6vw" }}>
          <div className="grid-3">
            <div data-reveal style={cardStyle}>
              <div style={iconStyle}>⚲</div>
              <div style={labelStyle}>ADDRESS</div>
              <div style={{ fontWeight: 300, fontSize: 17, lineHeight: 1.7, color: "#3A4A3C" }}>
                {CONTACT.address.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < CONTACT.address.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>

            <div data-reveal style={cardStyle}>
              <div style={iconStyle}>☏</div>
              <div style={labelStyle}>CALL / WHATSAPP</div>
              <div style={{ fontWeight: 300, fontSize: 17, lineHeight: 1.9, color: "#3A4A3C" }}>
                <a href={`tel:${CONTACT.phoneSecondary.tel}`}>{CONTACT.phoneSecondary.display}</a>
                <br />
                <a href={`tel:${CONTACT.phonePrimary.tel}`}>{CONTACT.phonePrimary.display}</a>
              </div>
            </div>

            <div data-reveal style={cardStyle}>
              <div style={iconStyle}>✉</div>
              <div style={labelStyle}>EMAIL</div>
              <div style={{ fontWeight: 300, fontSize: 17, lineHeight: 1.9, color: "#3A4A3C" }}>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
              <div style={{ ...labelStyle, margin: "22px 0 8px" }}>HOURS</div>
              <div style={{ fontWeight: 300, fontSize: 15, color: "#3A4A3C" }}>{CONTACT.hours}</div>
            </div>
          </div>
        </section>

        {/* Map + doctor */}
        <section className="split-map" style={{ padding: "0 6vw clamp(70px,10vh,130px)" }}>
          <div
            data-reveal
            style={{
              borderRadius: 12,
              overflow: "hidden",
              minHeight: 420,
              border: "1px solid #E4DEC9",
              boxShadow: "0 20px 50px -30px rgba(30,45,35,.4)",
            }}
          >
            <iframe
              title="Sankalp Ayurved Clinic location"
              src="https://maps.google.com/maps?q=Upera%20Unjha%20Mehsana%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ width: "100%", height: "100%", minHeight: 420, border: 0, filter: "grayscale(.2) sepia(.08)" }}
            />
          </div>
          <div
            data-reveal
            style={{
              background: "var(--green)",
              color: "var(--cream)",
              borderRadius: 12,
              padding: "clamp(36px,4vw,52px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontFamily: devanagari, fontSize: 18, color: "var(--gold)", marginBottom: 18 }}>वैद्यः</div>
            <div style={{ fontFamily: serif, fontSize: "clamp(28px,3vw,38px)", lineHeight: 1.1 }}>
              Dr. Ashish J. Prajapati
            </div>
            <div style={{ fontSize: 14, letterSpacing: ".05em", color: "var(--gold)", marginTop: 10 }}>
              B.A.M.S · GB-I 14594 · Ayurveda Physician
            </div>
            <p style={{ fontWeight: 300, fontSize: 16, lineHeight: 1.7, opacity: 0.9, margin: "22px 0 0" }}>
              Walk-ins welcome during clinic hours, though we recommend booking ahead so Dr. Ashish can
              give your consultation the time it deserves.
            </p>
            <Link
              href="/booking"
              style={{
                display: "inline-block",
                marginTop: 32,
                background: "var(--gold)",
                color: "var(--green-dark)",
                fontWeight: 600,
                fontSize: 15,
                padding: "15px 32px",
                borderRadius: 999,
                textAlign: "center",
              }}
            >
              Book an Appointment
            </Link>
            <div style={{ fontFamily: gujarati, fontSize: 14, color: "var(--gold)", marginTop: 24, opacity: 0.85 }}>
              અગાઉથી સમય નક્કી કરવો હિતાવહ છે
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #E4DEC9",
  borderRadius: 10,
  padding: 36,
};

const iconStyle: React.CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: "50%",
  background: "var(--cream-2)",
  color: "var(--green)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 22,
  marginBottom: 22,
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: ".2em",
  color: "var(--gold-brown)",
  marginBottom: 10,
};

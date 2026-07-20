import type { Metadata } from "next";
import BookingHeader from "@/components/BookingHeader";
import MobileMenu from "@/components/MobileMenu";
import BookingForm from "@/components/BookingForm";
import SiteEffects from "@/components/SiteEffects";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/data";
import { serif, devanagari, gujarati } from "@/lib/fonts";
import { breadcrumbJsonLd, OG_IMAGE } from "@/lib/seo";

const description =
  "Request a consultation with Dr. Ashish J. Prajapati at Sankalp Ayurved Clinic, Unjha. Share a few details and we'll confirm by phone. Or call 81601 30003.";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description,
  alternates: { canonical: "/booking" },
  openGraph: {
    type: "website",
    url: "/booking",
    title: "Book an Appointment at Sankalp Ayurved Clinic",
    description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book an Appointment at Sankalp Ayurved Clinic",
    description,
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Book an Appointment", path: "/booking" },
]);

export default function BookingPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <BookingHeader />
      <MobileMenu />
      <main>
        <section className="booking-split">
          {/* LEFT PANEL */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              background: "var(--green)",
              color: "var(--cream)",
              padding: "clamp(48px,7vh,90px) clamp(40px,4vw,72px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.22,
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div style={{ position: "relative" }}>
              <div style={{ fontFamily: devanagari, fontSize: 18, color: "var(--gold)", marginBottom: 22 }}>
                स्वागतम्
              </div>
              <h1
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  fontSize: "clamp(36px,4.4vw,58px)",
                  lineHeight: 1.06,
                  margin: 0,
                }}
              >
                Book your consultation
              </h1>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(16px,1.3vw,18px)",
                  lineHeight: 1.7,
                  opacity: 0.9,
                  maxWidth: "40ch",
                  margin: "22px 0 0",
                }}
              >
                Share a few details and we&apos;ll confirm your appointment with Dr. Ashish Prajapati
                by phone.
              </p>
            </div>

            <div style={{ position: "relative", marginTop: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <span style={circleIcon}>☏</span>
                <div>
                  <div style={{ fontSize: 12, letterSpacing: ".1em", opacity: 0.7 }}>CALL / WHATSAPP</div>
                  <div style={{ fontFamily: serif, fontSize: 20 }}>
                    {CONTACT.phonePrimary.display}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={circleIcon}>⚲</span>
                <div>
                  <div style={{ fontSize: 12, letterSpacing: ".1em", opacity: 0.7 }}>CLINIC</div>
                  <div style={{ fontFamily: serif, fontSize: 20 }}>Nr. Bus Stop, Upera, Ta. Unjha</div>
                </div>
              </div>
              <div style={{ fontFamily: gujarati, fontSize: 14, color: "var(--gold)", marginTop: 28, opacity: 0.85 }}>
                સવારે ૯ થી સાંજે ૭ · સોમ – શનિ
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div style={{ padding: "clamp(48px,7vh,90px) clamp(40px,5vw,90px)", display: "flex", alignItems: "center" }}>
            <BookingForm />
          </div>
        </section>
      </main>
      <SiteEffects />
    </>
  );
}

const circleIcon: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  border: "1px solid rgba(216,199,154,.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--gold)",
  flex: "0 0 auto",
};

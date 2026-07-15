import Link from "next/link";
import { CONTACT } from "@/lib/data";
import { serif, devanagari } from "@/lib/fonts";

export default function CtaBand() {
  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(90px,14vh,160px) 6vw",
        overflow: "hidden",
        textAlign: "center",
        color: "var(--cream)",
      }}
    >
      <div
        className="bg-fixed"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(28,40,31,.82),rgba(28,40,31,.9)), url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div data-reveal style={{ position: "relative" }}>
        <div
          style={{
            fontFamily: devanagari,
            fontSize: "clamp(15px,1.5vw,19px)",
            color: "var(--gold)",
            marginBottom: 22,
          }}
        >
          धर्मार्थकाममोक्षाणाम् आरोग्यं मूलमुत्तमम्
        </div>
        <h2
          style={{
            fontFamily: serif,
            fontWeight: 500,
            fontSize: "clamp(34px,4.6vw,60px)",
            lineHeight: 1.08,
            margin: "0 auto",
            maxWidth: "18ch",
          }}
        >
          Begin your journey to balance
        </h2>
        <p
          style={{
            fontWeight: 300,
            fontSize: "clamp(16px,1.4vw,18px)",
            opacity: 0.9,
            maxWidth: "50ch",
            margin: "22px auto 0",
          }}
        >
          Book a consultation with Dr. Ashish Prajapati and discover the treatment that&apos;s right
          for you.
        </p>
        <div
          style={{
            display: "flex",
            gap: 18,
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 40,
          }}
        >
          <Link
            href="/booking"
            className="hover-lift"
            style={{
              background: "var(--gold)",
              color: "var(--green-dark)",
              fontWeight: 600,
              fontSize: 15,
              padding: "16px 36px",
              borderRadius: 999,
              transition: "transform .3s",
            }}
          >
            Book Appointment
          </Link>
          <a
            href={`tel:${CONTACT.phonePrimary.tel}`}
            style={{
              border: "1px solid rgba(244,241,232,.5)",
              color: "var(--cream)",
              padding: "16px 32px",
              borderRadius: 999,
              fontSize: 15,
            }}
          >
            Call {CONTACT.phonePrimary.display}
          </a>
        </div>
      </div>
    </section>
  );
}

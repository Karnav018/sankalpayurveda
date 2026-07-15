import Link from "next/link";
import { serif, gujarati, devanagari, sans } from "@/lib/fonts";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 720,
        overflow: "hidden",
        background: "#2E4034",
      }}
    >
      <div
        id="heroBg"
        style={{
          position: "absolute",
          inset: "-10% 0",
          backgroundImage:
            "linear-gradient(180deg, rgba(28,40,31,.4) 0%, rgba(28,40,31,.28) 40%, rgba(28,40,31,.9) 100%), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1900&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "slowZoom 14s ease-out both",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "12vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          color: "var(--cream)",
          padding: "0 6vw",
        }}
      >
        <div
          style={{
            fontFamily: devanagari,
            fontSize: "clamp(15px,1.5vw,20px)",
            color: "var(--gold)",
            marginBottom: 28,
            animation: "fadeSlow 1.4s .2s both",
          }}
        >
          सर्वे भवन्तु सुखिनः · सर्वे सन्तु निरामयाः
        </div>
        <h1
          style={{
            fontFamily: serif,
            fontWeight: 500,
            fontSize: "clamp(46px,7vw,92px)",
            lineHeight: 1.03,
            margin: 0,
            maxWidth: "14ch",
            animation: "fadeSlow 1.4s .4s both",
          }}
        >
          Where Tradition Meets Healing
        </h1>
        <p
          style={{
            fontWeight: 300,
            fontSize: "clamp(16px,1.5vw,19px)",
            lineHeight: 1.6,
            maxWidth: "56ch",
            margin: "26px 0 0",
            opacity: 0.92,
            animation: "fadeSlow 1.4s .6s both",
          }}
        >
          Authentic Panchakarma therapies in a pure, natural setting — rooted in 5,000 years of
          Ayurvedic wisdom, at Sankalp Ayurved Clinic, Unjha.
        </p>
        <div
          style={{
            display: "flex",
            gap: 18,
            marginTop: 38,
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            animation: "fadeSlow 1.4s .8s both",
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
              padding: "16px 34px",
              borderRadius: 999,
              letterSpacing: ".02em",
              transition: "transform .3s",
            }}
          >
            Book Your Consultation
          </Link>
          <Link
            href="/treatments"
            style={{
              fontFamily: gujarati,
              fontSize: 15,
              opacity: 0.92,
              borderBottom: "1px solid rgba(244,241,232,.4)",
              paddingBottom: 3,
            }}
          >
            શુદ્ધ · પ્રાકૃતિક · પ્રમાણિત
          </Link>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 26,
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--cream)",
          fontSize: 11,
          letterSpacing: ".3em",
          opacity: 0.7,
          animation: "drift 3s ease-in-out infinite",
          fontFamily: sans,
        }}
      >
        SCROLL
      </div>
    </section>
  );
}

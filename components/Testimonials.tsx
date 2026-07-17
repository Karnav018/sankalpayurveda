import { testimonials } from "@/lib/data";
import { serif, devanagari } from "@/lib/fonts";

export default function Testimonials() {
  return (
    <section style={{ padding: "clamp(90px,13vh,160px) 6vw", background: "var(--cream)" }}>
      <div data-reveal style={{ textAlign: "center", maxWidth: "60ch", margin: "0 auto 30px" }}>
        <div style={{ fontSize: 12, letterSpacing: ".28em", color: "var(--gold-brown)", marginBottom: 20 }}>
          VOICES FROM OUR COMMUNITY
        </div>
        <h2
          style={{
            fontFamily: serif,
            fontWeight: 500,
            fontSize: "clamp(34px,4.4vw,58px)",
            lineHeight: 1.06,
            color: "var(--green)",
            margin: 0,
          }}
        >
          Trusted across Mehsana &amp; beyond
        </h2>
      </div>
      <div data-reveal style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ fontFamily: devanagari, fontSize: "clamp(16px,1.6vw,20px)", color: "var(--sage)" }}>
          आरोग्यं परमं भाग्यम्
        </span>
      </div>

      <div className="grid-testimonials">
        {testimonials.map((t) => (
          <div
            key={t.name}
            data-reveal
            style={{
              background: "#fff",
              border: "1px solid #E4DEC9",
              borderRadius: 12,
              padding: 34,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontFamily: serif, fontSize: 40, color: "var(--gold)", lineHeight: 0.6, height: 22 }}>
              &ldquo;
            </div>
            <p
              style={{
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.75,
                color: "#3A4A3C",
                margin: "0 0 24px",
                flex: 1,
              }}
            >
              {t.quote}
            </p>
            <div style={{ fontFamily: serif, fontSize: 19, color: "var(--green)" }}>{t.name}</div>
            <div style={{ fontSize: 13, color: "var(--gold-brown)", letterSpacing: ".04em", marginTop: 2 }}>
              ★ {t.source}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

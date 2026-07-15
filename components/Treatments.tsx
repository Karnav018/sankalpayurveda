import Link from "next/link";
import { treatments } from "@/lib/data";
import { serif, devanagari } from "@/lib/fonts";

export default function Treatments() {
  return (
    <section
      style={{
        padding: "clamp(80px,12vh,150px) 6vw",
        background: "var(--green)",
        color: "var(--cream)",
      }}
    >
      <div data-reveal style={{ textAlign: "center", maxWidth: "60ch", margin: "0 auto 64px" }}>
        <div style={{ fontSize: 12, letterSpacing: ".28em", color: "var(--gold)", marginBottom: 20 }}>
          OUR THERAPIES
        </div>
        <h2
          style={{
            fontFamily: serif,
            fontWeight: 500,
            fontSize: "clamp(34px,4.4vw,58px)",
            lineHeight: 1.06,
            margin: 0,
          }}
        >
          Classical treatments, thoughtfully delivered
        </h2>
      </div>

      <div className="grid-3">
        {treatments.map((t) => (
          <Link
            key={t.name}
            href="/treatments"
            data-reveal
            className="tcard"
            style={{
              position: "relative",
              height: 400,
              borderRadius: 8,
              overflow: "hidden",
              display: "block",
              boxShadow: "0 24px 50px -28px rgba(0,0,0,.5)",
            }}
          >
            <div
              className="tcard-bg"
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: [
                  "linear-gradient(180deg,rgba(28,40,31,0) 30%,rgba(28,40,31,.9))",
                  ...(t.localImage ? [`url('${t.localImage}')`] : []),
                  `url('${t.image}')`,
                ].join(","),
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#3A5140",
                transition: "transform .8s ease",
              }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 28 }}>
              <div
                style={{
                  fontFamily: devanagari,
                  fontSize: 15,
                  color: "var(--gold)",
                  marginBottom: 6,
                }}
              >
                {t.sanskrit}
              </div>
              <div style={{ fontFamily: serif, fontSize: 28 }}>{t.name}</div>
              <p style={{ fontWeight: 300, fontSize: 14, lineHeight: 1.6, opacity: 0.85, margin: "8px 0 0" }}>
                {t.blurb}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div data-reveal style={{ textAlign: "center", marginTop: 56 }}>
        <Link
          href="/treatments"
          className="btn-outline-gold"
          style={{
            border: "1px solid rgba(216,199,154,.6)",
            color: "var(--gold)",
            padding: "15px 34px",
            borderRadius: 999,
            fontSize: 14,
            letterSpacing: ".05em",
            display: "inline-block",
            transition: "background .3s,color .3s",
          }}
        >
          Explore all treatments →
        </Link>
      </div>
    </section>
  );
}

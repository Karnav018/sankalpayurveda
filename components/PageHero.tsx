import { serif, devanagari } from "@/lib/fonts";

/**
 * Short dark hero used on interior pages (Treatments / About / Contact).
 * Sanskrit kicker + display title + optional subtitle over a dimmed image.
 */
export default function PageHero({
  kicker,
  title,
  subtitle,
  image,
  height = "60vh",
  minHeight = 440,
  overlay = "linear-gradient(rgba(28,40,31,.5),rgba(28,40,31,.82))",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  image: string;
  height?: string;
  minHeight?: number;
  overlay?: string;
}) {
  return (
    <section
      style={{
        position: "relative",
        height,
        minHeight,
        overflow: "hidden",
        background: "var(--green)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `${overlay},url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "slowZoom 14s ease-out both",
        }}
      />
      <div style={{ position: "relative", color: "var(--cream)", padding: "0 6vw" }}>
        <div
          style={{
            fontFamily: devanagari,
            fontSize: "clamp(15px,1.5vw,19px)",
            color: "var(--gold)",
            marginBottom: 20,
            animation: "fadeSlow 1.2s .2s both",
          }}
        >
          {kicker}
        </div>
        <h1
          style={{
            fontFamily: serif,
            fontWeight: 500,
            fontSize: "clamp(40px,6vw,80px)",
            lineHeight: 1.04,
            margin: 0,
            animation: "fadeSlow 1.2s .35s both",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontWeight: 300,
              fontSize: "clamp(16px,1.4vw,18px)",
              maxWidth: "56ch",
              margin: "22px auto 0",
              opacity: 0.9,
              animation: "fadeSlow 1.2s .5s both",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

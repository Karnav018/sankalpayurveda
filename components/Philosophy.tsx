import { serif, devanagari } from "@/lib/fonts";

export default function Philosophy() {
  return (
    <section
      className="split split-philosophy"
      style={{
        padding: "clamp(80px,12vh,150px) 6vw",
        background: "var(--cream)",
      }}
    >
      <div
        data-reveal
        style={{
          position: "relative",
          height: "clamp(360px,46vw,560px)",
          borderRadius: "8px 8px 200px 200px",
          overflow: "hidden",
          boxShadow: "0 30px 70px -34px rgba(30,45,35,.5)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#3A5140",
          }}
        />
      </div>
      <div data-reveal>
        <div style={{ fontSize: 12, letterSpacing: ".28em", color: "var(--gold-brown)", marginBottom: 22 }}>
          THE SANKALP WAY
        </div>
        <h2
          style={{
            fontFamily: serif,
            fontWeight: 500,
            fontSize: "clamp(34px,4.2vw,56px)",
            lineHeight: 1.08,
            color: "var(--green)",
            margin: 0,
          }}
        >
          Healing that honours the body&apos;s own intelligence
        </h2>
        <div
          style={{
            fontFamily: devanagari,
            fontSize: "clamp(16px,1.6vw,20px)",
            color: "#5C6B52",
            margin: "24px 0",
          }}
        >
          आयुर्वेदः अमृतानाम् — the science of life
        </div>
        <p
          style={{
            fontWeight: 300,
            fontSize: "clamp(16px,1.3vw,18px)",
            lineHeight: 1.8,
            color: "#4A5646",
            maxWidth: "52ch",
          }}
        >
          Ayurveda is an ancient holistic system that originated in India over 5,000 years ago. At
          Sankalp, we treat old and stubborn diseases using authentic, proven Ayurvedic medicines and
          classical Panchakarma therapies — restoring balance to body and mind in a calm, natural
          environment.
        </p>
        <div style={{ display: "flex", gap: 48, marginTop: 40 }}>
          <div>
            <div style={{ fontFamily: serif, fontSize: 44, color: "var(--gold-deep)" }}>5000+</div>
            <div style={{ fontSize: 13, letterSpacing: ".05em", color: "var(--sage)" }}>years of wisdom</div>
          </div>
          <div>
            <div style={{ fontFamily: serif, fontSize: 44, color: "var(--gold-deep)" }}>12+</div>
            <div style={{ fontSize: 13, letterSpacing: ".05em", color: "var(--sage)" }}>therapies offered</div>
          </div>
        </div>
      </div>
    </section>
  );
}

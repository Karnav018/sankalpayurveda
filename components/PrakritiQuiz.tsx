"use client";

import { useState } from "react";
import Link from "next/link";
import { quizData, doshaInfo, type Dosha } from "@/lib/data";
import { serif, gujarati, devanagari } from "@/lib/fonts";

export default function PrakritiQuiz() {
  const total = quizData.length;
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Dosha[]>([]);
  const [done, setDone] = useState(false);

  const answer = (d: Dosha) => {
    const next = answers.slice(0, qIndex);
    next[qIndex] = d;
    setAnswers(next);
    if (qIndex + 1 >= total) setDone(true);
    else setQIndex(qIndex + 1);
  };

  const restart = () => {
    setQIndex(0);
    setAnswers([]);
    setDone(false);
  };

  // dominant dosha
  const score: Record<Dosha, number> = { vata: 0, pitta: 0, kapha: 0 };
  answers.forEach((d) => {
    score[d]++;
  });
  let top: Dosha = "vata";
  if (score.pitta > score[top]) top = "pitta";
  if (score.kapha > score[top]) top = "kapha";
  const info = doshaInfo[top];

  const cur = quizData[Math.min(qIndex, total - 1)];

  return (
    <section style={{ padding: "clamp(90px,13vh,160px) 6vw", background: "var(--cream-2)" }}>
      <div data-reveal style={{ textAlign: "center", maxWidth: "62ch", margin: "0 auto 44px" }}>
        <div style={{ fontSize: 12, letterSpacing: ".28em", color: "var(--gold-brown)", marginBottom: 20 }}>
          KNOW YOUR PRAKRITI ·{" "}
          <span style={{ fontFamily: devanagari, letterSpacing: 0 }}>प्रकृति परीक्षा</span>
        </div>
        <h2
          style={{
            fontFamily: serif,
            fontWeight: 500,
            fontSize: "clamp(34px,4.4vw,56px)",
            lineHeight: 1.06,
            color: "var(--green)",
            margin: 0,
          }}
        >
          Discover your body constitution
        </h2>
        <p
          style={{
            fontWeight: 300,
            fontSize: "clamp(15px,1.3vw,18px)",
            lineHeight: 1.7,
            color: "#54513F",
            margin: "18px auto 0",
          }}
        >
          A few simple questions about your build, strength, digestion and sleep — and we&apos;ll
          reveal whether your nature leans{" "}
          <span style={{ fontFamily: gujarati }}>વાયુ</span> (Vata), Pitta or Kapha.
        </p>
      </div>

      <div
        data-reveal
        style={{
          maxWidth: 820,
          margin: "0 auto",
          background: "var(--cream)",
          border: "1px solid #DED7C2",
          borderRadius: 16,
          boxShadow: "0 26px 60px -34px rgba(30,45,35,.4)",
          overflow: "hidden",
        }}
      >
        {!done ? (
          <div style={{ padding: "clamp(30px,4vw,48px)" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <span style={{ fontSize: 12, letterSpacing: ".18em", color: "var(--gold-brown)" }}>
                QUESTION {qIndex + 1} / {total}
              </span>
              <span style={{ fontFamily: gujarati, fontSize: 13, color: "var(--sage)" }}>
                પ્રશ્ન {qIndex + 1} / {total}
              </span>
            </div>
            <div
              style={{
                height: 5,
                background: "#E0D9C4",
                borderRadius: 999,
                overflow: "hidden",
                marginBottom: 34,
              }}
            >
              <div
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg,#8DA290,#2E4034)",
                  borderRadius: 999,
                  transition: "width .5s ease",
                  width: `${Math.round((qIndex / total) * 100)}%`,
                }}
              />
            </div>
            <h3
              style={{
                fontFamily: serif,
                fontWeight: 500,
                fontSize: "clamp(26px,3.2vw,40px)",
                lineHeight: 1.2,
                color: "var(--green)",
                margin: "0 0 8px",
              }}
            >
              {cur.q}
            </h3>
            <div
              style={{
                fontFamily: gujarati,
                fontSize: "clamp(15px,1.5vw,18px)",
                color: "var(--sage)",
                marginBottom: 30,
              }}
            >
              {cur.gu}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {cur.options.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => answer(opt.d)}
                  className="quiz-option"
                  style={{
                    textAlign: "left",
                    font: "inherit",
                    border: "1px solid #D6CEB4",
                    background: "#fff",
                    borderRadius: 12,
                    padding: "20px 24px",
                    cursor: "pointer",
                    transition: "border-color .25s, transform .25s, box-shadow .25s",
                  }}
                >
                  <div style={{ fontSize: 16, lineHeight: 1.5, color: "var(--green)" }}>{opt.label}</div>
                  <div style={{ fontFamily: gujarati, fontSize: 14, color: "#8A9584", marginTop: 4 }}>
                    {opt.gu}
                  </div>
                </button>
              ))}
            </div>
            {qIndex > 0 && (
              <div style={{ marginTop: 26 }}>
                <button
                  type="button"
                  onClick={() => setQIndex(Math.max(0, qIndex - 1))}
                  style={{
                    font: "inherit",
                    background: "none",
                    border: "none",
                    fontSize: 14,
                    color: "var(--sage)",
                    cursor: "pointer",
                    borderBottom: "1px solid #C6BEA6",
                    padding: "0 0 2px",
                  }}
                >
                  ← Back
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div
              style={{
                background: info.accent,
                color: "var(--cream)",
                textAlign: "center",
                padding: "clamp(40px,6vw,64px) 30px",
              }}
            >
              <div style={{ fontSize: 12, letterSpacing: ".28em", opacity: 0.85, marginBottom: 14 }}>
                YOUR DOMINANT DOSHA
              </div>
              <div style={{ fontFamily: serif, fontSize: "clamp(40px,6vw,72px)", lineHeight: 1 }}>
                {info.name}
              </div>
              <div
                style={{
                  fontFamily: devanagari,
                  fontSize: "clamp(18px,2vw,26px)",
                  marginTop: 12,
                  opacity: 0.92,
                }}
              >
                {info.scripts}
              </div>
              <div style={{ fontSize: 14, letterSpacing: ".06em", opacity: 0.8, marginTop: 10 }}>
                {info.element}
              </div>
            </div>
            <div style={{ padding: "clamp(30px,4vw,48px)" }}>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(16px,1.4vw,19px)",
                  lineHeight: 1.8,
                  color: "#3A4A3C",
                  margin: 0,
                }}
              >
                {info.blurb}
              </p>
              <div style={{ marginTop: 30 }}>
                <div style={{ fontSize: 12, letterSpacing: ".2em", color: "var(--gold-brown)", marginBottom: 12 }}>
                  WHEN OUT OF BALANCE
                </div>
                <p style={{ fontWeight: 300, fontSize: 16, lineHeight: 1.75, color: "#4A5646", margin: 0 }}>
                  {info.aggravate}
                </p>
              </div>
              <div style={{ marginTop: 30 }}>
                <div style={{ fontSize: 12, letterSpacing: ".2em", color: "var(--gold-brown)", marginBottom: 14 }}>
                  THERAPIES DR. ASHISH MAY RECOMMEND
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {info.therapies.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "var(--cream-2)",
                        border: "1px solid #D9CFAE",
                        padding: "10px 18px",
                        borderRadius: 999,
                        fontSize: 14,
                        color: "#5C4E2E",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                  alignItems: "center",
                  marginTop: 38,
                }}
              >
                <Link
                  href="/booking"
                  style={{
                    background: "var(--green)",
                    color: "var(--cream)",
                    fontWeight: 600,
                    fontSize: 15,
                    padding: "15px 32px",
                    borderRadius: 999,
                  }}
                >
                  Book a consultation
                </Link>
                <button
                  type="button"
                  onClick={restart}
                  style={{
                    font: "inherit",
                    background: "none",
                    border: "none",
                    fontSize: 14,
                    color: "var(--sage)",
                    cursor: "pointer",
                    borderBottom: "1px solid #C6BEA6",
                    padding: "0 0 2px",
                  }}
                >
                  ↻ Retake the check
                </button>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "#9CA593", margin: "32px 0 0" }}>
                This is a simple guide based on classical Ayurveda, not a medical diagnosis. Most
                people are a blend of two doshas — Dr. Ashish will assess your full constitution in
                person.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

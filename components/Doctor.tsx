import Link from "next/link";
import { doctorTags } from "@/lib/data";
import { serif } from "@/lib/fonts";
import DoctorPortrait from "@/components/DoctorPortrait";

export default function Doctor() {
  return (
    <section
      className="split split-doctor"
      style={{ padding: "clamp(80px,12vh,150px) 6vw", background: "var(--cream-2)" }}
    >
      <div data-reveal style={{ position: "relative" }}>
        <div
          style={{
            position: "relative",
            height: "clamp(380px,44vw,540px)",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 30px 70px -30px rgba(60,50,20,.45)",
            background: "#3A5140",
          }}
        >
          {/* Shows public/clinic/doctor.jpg; falls back to a placeholder if absent. */}
          <DoctorPortrait />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: -24,
            right: -16,
            background: "var(--green)",
            color: "var(--cream)",
            padding: "18px 26px",
            borderRadius: 12,
            boxShadow: "0 18px 40px -16px rgba(60,50,20,.5)",
            animation: "drift 5s ease-in-out infinite",
          }}
        >
          <div style={{ fontFamily: serif, fontSize: 22 }}>Dr. Ashish J. Prajapati</div>
          <div style={{ fontSize: 12, letterSpacing: ".06em", color: "var(--gold)" }}>
            B.A.M.S · Ayurveda Physician
          </div>
        </div>
      </div>

      <div data-reveal>
        <div style={{ fontSize: 12, letterSpacing: ".28em", color: "var(--gold-brown)", marginBottom: 22 }}>
          MEET YOUR PHYSICIAN
        </div>
        <h2
          style={{
            fontFamily: serif,
            fontWeight: 500,
            fontSize: "clamp(32px,4vw,52px)",
            lineHeight: 1.1,
            color: "var(--green)",
            margin: 0,
          }}
        >
          Care rooted in classical training &amp; genuine compassion
        </h2>
        <p
          style={{
            fontWeight: 300,
            fontSize: "clamp(16px,1.3vw,18px)",
            lineHeight: 1.8,
            color: "#54513F",
            maxWidth: "52ch",
            margin: "26px 0 0",
          }}
        >
          Dr. Ashish Prajapati (B.A.M.S., GB-I 14594) blends time-honoured Ayurvedic diagnosis with
          attentive, patient-first care — guiding each person&apos;s treatment according to their
          unique constitution.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
          {doctorTags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "var(--cream)",
                border: "1px solid #D9CFAE",
                padding: "10px 18px",
                borderRadius: 999,
                fontSize: 13,
                color: "#6B5A34",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="/about"
          style={{
            display: "inline-block",
            marginTop: 36,
            color: "var(--green)",
            borderBottom: "1px solid var(--gold-deep)",
            paddingBottom: 3,
            fontSize: 15,
          }}
        >
          More about the clinic →
        </Link>
      </div>
    </section>
  );
}

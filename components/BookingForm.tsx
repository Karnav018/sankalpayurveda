"use client";

import { useState } from "react";
import { bookingTreatmentOptions, CONTACT } from "@/lib/data";
import { serif } from "@/lib/fonts";

const inputStyle: React.CSSProperties = {
  border: "1px solid #D0CBB6",
  background: "#fff",
  borderRadius: 8,
  padding: "14px 16px",
  fontSize: 15,
  transition: "border-color .2s",
  fontFamily: "inherit",
};

const labelText: React.CSSProperties = { fontSize: 13, letterSpacing: ".05em", color: "#54513F" };
const fieldWrap: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 8 };

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.23 8.24Zm4.52-6.16c-.25-.13-1.47-.72-1.7-.81-.22-.08-.39-.12-.55.13-.17.24-.64.8-.78.97-.15.16-.29.18-.54.06-.24-.13-1.04-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.24-.01-.38.11-.5.11-.11.25-.29.37-.43s.16-.25.25-.41c.08-.17.04-.31-.02-.43-.06-.13-.55-1.34-.76-1.84-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.43.06-.66.31-.22.24-.86.85-.86 2.07 0 1.21.89 2.39 1.01 2.56.13.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState(bookingTreatmentOptions[0]);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = () => {
    const lines = [
      "🙏 Namaste, Sankalp Ayurved Clinic!",
      "",
      "I would like to request an appointment.",
      "",
      `*Name:* ${name.trim()}`,
      `*Phone:* ${phone.trim()}`,
      `*Treatment:* ${treatment}`,
    ];
    if (date) {
      const day = new Date(`${date}T00:00:00`);
      lines.push(
        `*Preferred date:* ${day.toLocaleDateString("en-IN", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}`
      );
    }
    if (notes.trim()) lines.push(`*Concern:* ${notes.trim()}`);
    lines.push("", "Please confirm my appointment. Thank you!");
    return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const submit = () => {
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }
    window.open(whatsappUrl(), "_blank", "noopener");
    setSubmitted(true);
  };

  const reset = () => {
    setName("");
    setPhone("");
    setTreatment(bookingTreatmentOptions[0]);
    setDate("");
    setNotes("");
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div style={{ width: "100%", maxWidth: 620, margin: "0 auto" }}>
        <div style={{ textAlign: "center", padding: "40px 0", animation: "fadeSlow .6s both" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "var(--green)",
              color: "var(--gold)",
              fontSize: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            ✓
          </div>
          <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 40, color: "var(--green)", margin: 0 }}>
            Thank you, {name || "friend"}
          </h2>
          <p
            style={{
              fontWeight: 300,
              fontSize: 17,
              lineHeight: 1.7,
              color: "#4A5646",
              maxWidth: "44ch",
              margin: "18px auto 0",
            }}
          >
            WhatsApp has opened with your appointment details — just press <strong>Send</strong> and
            we&apos;ll confirm shortly at {phone || "your number"}. Didn&apos;t open? Use the button
            below.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "var(--green)",
                color: "var(--cream)",
                padding: "13px 30px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <WhatsAppIcon /> Open WhatsApp
            </a>
            <button
              type="button"
              onClick={reset}
              style={{
                background: "none",
                border: "1px solid var(--green)",
                color: "var(--green)",
                padding: "13px 30px",
                borderRadius: 999,
                fontSize: 14,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Book another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", maxWidth: 620 }}>
      <div style={{ fontSize: 12, letterSpacing: ".28em", color: "var(--gold-brown)", marginBottom: 14 }}>
        APPOINTMENT REQUEST
      </div>
      <h2
        style={{
          fontFamily: serif,
          fontWeight: 500,
          fontSize: "clamp(30px,3.4vw,44px)",
          color: "var(--green)",
          margin: "0 0 32px",
        }}
      >
        Tell us about your visit
      </h2>

      <div className="booking-fields">
        <label style={fieldWrap}>
          <span style={labelText}>Full name</span>
          <input
            className="booking-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            style={inputStyle}
          />
        </label>
        <label style={fieldWrap}>
          <span style={labelText}>Phone</span>
          <input
            className="booking-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Mobile number"
            inputMode="tel"
            style={inputStyle}
          />
        </label>
        <label style={fieldWrap}>
          <span style={labelText}>Treatment of interest</span>
          <select
            className="booking-input"
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            style={{ ...inputStyle, appearance: "none" }}
          >
            {bookingTreatmentOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label style={fieldWrap}>
          <span style={labelText}>Preferred date</span>
          <input
            className="booking-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ ...inputStyle, padding: "13px 16px" }}
          />
        </label>
        <label style={{ ...fieldWrap, gridColumn: "span 2" }}>
          <span style={labelText}>
            What are you experiencing? <span style={{ color: "#9CA593" }}>(optional)</span>
          </span>
          <textarea
            className="booking-input"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            placeholder="Briefly describe your concern or symptoms"
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </label>
      </div>

      <button
        type="button"
        onClick={submit}
        className="booking-submit"
        style={{
          marginTop: 28,
          width: "100%",
          background: "var(--green)",
          color: "var(--cream)",
          fontWeight: 600,
          fontSize: 16,
          padding: 17,
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          letterSpacing: ".02em",
          transition: "background .3s",
          fontFamily: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <WhatsAppIcon /> Request on WhatsApp
      </button>
      <p style={{ fontSize: 13, color: "var(--sage)", textAlign: "center", margin: "16px 0 0" }}>
        Opens WhatsApp with your details filled in — just press send. Or call us at{" "}
        <a href={`tel:${CONTACT.phonePrimary.tel}`} style={{ color: "var(--green)", borderBottom: "1px solid var(--gold-deep)" }}>
          {CONTACT.phonePrimary.display}
        </a>
      </p>
    </div>
  );
}

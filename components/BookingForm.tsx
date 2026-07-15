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

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState(bookingTreatmentOptions[0]);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (!name || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }
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
            Your request is noted. We&apos;ll call you at {phone || "your number"} to confirm your
            appointment. For anything urgent, call us directly.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 32,
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
        }}
      >
        Request Appointment
      </button>
      <p style={{ fontSize: 13, color: "var(--sage)", textAlign: "center", margin: "16px 0 0" }}>
        Or call us directly at{" "}
        <a href={`tel:${CONTACT.phonePrimary.tel}`} style={{ color: "var(--green)", borderBottom: "1px solid var(--gold-deep)" }}>
          {CONTACT.phonePrimary.display}
        </a>
      </p>
    </div>
  );
}

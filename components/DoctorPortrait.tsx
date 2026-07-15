"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shows the clinic's doctor photo (public/clinic/doctor.jpg by default).
 * If the file is missing, `onError` swaps in the styled placeholder — so there's
 * never a broken-image icon. Fills its parent container.
 */
export default function DoctorPortrait({
  src = "/clinic/doctor.jpg",
  objectPosition = "center 20%",
}: {
  src?: string;
  objectPosition?: string;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The <img> can 404 during SSR before React attaches onError; catch that here.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          backgroundImage: "linear-gradient(135deg,#3A5140,#2E4034)",
          color: "rgba(244,241,232,.55)",
        }}
      >
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.2" />
          <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: 13, letterSpacing: ".12em" }}>Dr. Ashish&apos;s photo</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt="Dr. Ashish J. Prajapati, Ayurveda physician"
      onError={() => setFailed(true)}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition }}
    />
  );
}

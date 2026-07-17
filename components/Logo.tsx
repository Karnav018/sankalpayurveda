/**
 * Sankalp emblem — the clinic's badge mark recreated from its signage: sun,
 * crossed leaves and a herbal caduceus on a white disc (no wordmark; pair it
 * with text). Full-colour, so it reads over both the dark hero scrim and the
 * light scrolled nav.
 */
export default function Logo({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
      style={{ flex: "0 0 auto" }}
    >
      <circle cx="60" cy="60" r="58" fill="#FFFFFF" />
      <g transform="translate(60 60) scale(1.1) translate(-60 -48)">
      <circle cx="60" cy="46" r="17" fill="#F2A93B" />
      <path d="M58 88 C40 90 18 82 10 60 C34 58 52 70 58 88 Z" fill="#8BC142" />
      <path d="M62 88 C80 90 102 82 110 60 C86 58 68 70 62 88 Z" fill="#8BC142" />
      <path d="M60 88 C38 86 16 66 21 38 C45 46 60 62 60 88 Z" fill="#2F8A3C" />
      <path d="M60 88 C82 86 104 66 99 38 C75 46 60 62 60 88 Z" fill="#2F8A3C" />
      <line x1="60" y1="28" x2="60" y2="86" stroke="#1F7A2E" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="60" cy="27" r="2.6" fill="#1F7A2E" />
      <path
        d="M56 30 C49 33 50 38 60 42.5 C70 47 70 51 60 55 C50 59 50 63 60 67"
        stroke="#2FA043"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M64 30 C71 33 70 38 60 42.5 C50 47 50 51 60 55 C70 59 70 63 60 67"
        stroke="#2FA043"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M60 22 C57 16 58 9 60 5 C62 9 63 16 60 22 Z" fill="#57A73E" />
      <path d="M58 22 C51 20 46 15 45 8 C52 10 57 15 58 22 Z" fill="#57A73E" />
      <path d="M62 22 C69 20 74 15 75 8 C68 10 63 15 62 22 Z" fill="#57A73E" />
      <path d="M56 25 C47 25 38 22 34 15 C43 13 53 18 56 25 Z" fill="#6FB43C" />
      <path d="M64 25 C73 25 82 22 86 15 C77 13 67 18 64 25 Z" fill="#6FB43C" />
      </g>
    </svg>
  );
}

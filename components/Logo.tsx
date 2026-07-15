/**
 * Sankalp leaf-sprout emblem. Uses `currentColor` so it adapts to the nav's
 * light (over hero) and dark (on scroll) states. Pair it with the wordmark.
 */
export default function Logo({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={(size * 32) / 40}
      height={size}
      viewBox="0 0 32 40"
      fill="none"
      aria-hidden
      style={{ flex: "0 0 auto" }}
    >
      <path d="M16 38 V19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15.7 25 C9 24 4 17.5 5.2 8.5 C13 9.8 17 16.5 15.7 25 Z" fill="currentColor" />
      <path
        d="M16.3 21 C23 20 28 13.5 26.8 4.5 C19 5.8 15 12.5 16.3 21 Z"
        fill="currentColor"
        opacity="0.72"
      />
    </svg>
  );
}

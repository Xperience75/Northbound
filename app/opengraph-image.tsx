import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Northbound Studio — Web platforms that move businesses forward.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0b0c0e",
          color: "#f0f0ed",
          padding: "60px 72px 64px",
          borderTop: "4px solid #d87c58",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10.5"
                stroke="#f0f0ed"
                strokeOpacity="0.5"
                strokeWidth="1.2"
              />
              <path d="M12 3 L14 12 L12 21 L10 12 Z" fill="#d87c58" />
              <circle cx="12" cy="12" r="1.2" fill="#f0f0ed" />
            </svg>
            <span
              style={{
                fontSize: 28,
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "#f0f0ed",
              }}
            >
              Northbound
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 16,
              letterSpacing: "0.14em",
              color: "#8b929e",
              border: "1px solid #2e3239",
              borderRadius: 999,
              padding: "8px 18px",
            }}
          >
            FULL-STACK WEB STUDIO
          </div>
        </div>

        {/* Center hero block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Georgia, serif",
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            <span>Web platforms that</span>
            <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
              <span>move businesses</span>
              <span style={{ color: "#d87c58", fontStyle: "italic" }}>
                forward.
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#c1c5cd",
              maxWidth: 820,
              lineHeight: 1.45,
            }}
          >
            Refined, high-performance web applications, corporate platforms, and
            publishing systems.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            borderTop: "1px solid #22252a",
            paddingTop: 24,
            fontSize: 18,
            color: "#8b929e",
          }}
        >
          <span>Lagos, Nigeria · Working Worldwide</span>
          <span style={{ color: "#d87c58" }}>northbound.studio</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

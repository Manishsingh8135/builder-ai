import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Builder AI - MVP Development & AI-Powered Software Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 80px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "24px",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Builder AI
          </div>
          <div
            style={{
              fontSize: 32,
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: 24,
              textAlign: "center",
            }}
          >
            MVP Development & AI-Powered Solutions
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: 16,
            }}
          >
            {["MVP in 4-8 Weeks", "70% Cost Savings", "100% Code Ownership"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          builder-ai.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

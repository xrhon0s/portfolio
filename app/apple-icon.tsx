import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#d4ff3f",
          border: "8px solid #11110f",
          borderRadius: "40px",
          color: "#11110f",
          fontFamily: "Arial, sans-serif",
          fontSize: 72,
          fontWeight: 900,
          letterSpacing: "-6px",
        }}
      >
        D<span style={{ fontSize: 48, margin: "-28px 6px 0 8px" }}>↗</span>S
      </div>
    ),
    size,
  );
}

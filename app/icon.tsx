import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
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
          border: "3px solid #11110f",
          borderRadius: "14px",
          color: "#11110f",
          fontFamily: "Arial, sans-serif",
          fontSize: 25,
          fontWeight: 900,
          letterSpacing: "-2px",
        }}
      >
        D<span style={{ fontSize: 18, margin: "-10px 2px 0 3px" }}>↗</span>S
      </div>
    ),
    size,
  );
}

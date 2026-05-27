import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#C44B4B",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FAF8F5",
          fontSize: 20,
          fontWeight: 900,
          fontFamily: "serif",
          letterSpacing: "-0.5px",
        }}
      >
        W
      </div>
    ),
    { ...size }
  )
}

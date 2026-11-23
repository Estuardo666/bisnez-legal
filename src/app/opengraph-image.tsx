import { ImageResponse } from "next/og";

export const alt = "Meiker: asesoría legal para negocios que crecen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 76px",
          background: "#fffaf4",
          color: "#461312",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 510,
            height: 510,
            right: -120,
            top: -170,
            borderRadius: "50%",
            background: "#d8efff",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 220,
            height: 220,
            right: 130,
            bottom: -115,
            borderRadius: "50%",
            background: "#ff5b35",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 46,
              height: 46,
              border: "6px solid #ff5b35",
              borderRightColor: "transparent",
              borderRadius: "50%",
            }}
          />
          <span style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.07em" }}>
            meiker
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 810 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 22,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ width: 12, height: 12, background: "#ff5b35" }} />
            Legal para negocios que crecen
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.055em" }}>
            Protege lo que construyes.
          </div>
          <div style={{ marginTop: 22, fontSize: 24, color: "#614c49" }}>
            Marcas, empresas y decisiones con respaldo legal.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

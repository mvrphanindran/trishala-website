import { v1 } from "@/lib/v1-tokens";

const layers = [
  { name: "Print Layer", width: "92%", tone: v1.ivory.panel },
  { name: "Barrier Film", width: "78%", tone: "#E2E6EC" },
  { name: "Sealant", width: "64%", tone: v1.ivory.deep },
] as const;

export default function MaterialLayers() {
  return (
    <div
      className="relative aspect-[4/5] w-full max-w-md"
      aria-hidden
    >
      {layers.map((layer, index) => (
        <div
          key={layer.name}
          className="absolute left-1/2 -translate-x-1/2 rounded-sm border transition-transform"
          style={{
            width: layer.width,
            height: "18%",
            top: `${12 + index * 22}%`,
            background: layer.tone,
            borderColor: v1.silver.mid,
            boxShadow: "0 20px 50px rgba(11, 27, 77, 0.08)",
            zIndex: 10 - index,
          }}
        />
      ))}
      <div
        className="absolute bottom-[8%] left-1/2 h-px w-[70%] -translate-x-1/2"
        style={{ background: v1.silver.gradient, opacity: 0.8 }}
      />
    </div>
  );
}

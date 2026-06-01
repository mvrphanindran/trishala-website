export default function StructuresPreview() {
  const structures = [
    "PET / PE",
    "BOPP / PE",
    "PET / MET PET / PE",
    "PET / ALU FOIL / PE",
  ];

  return (
    <section
      style={{
        padding: "180px 24px",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#00B140",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Packaging Structures
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: "72px",
            lineHeight: 1,
            fontWeight: 800,
            marginBottom: "100px",
          }}
        >
          Engineered
          <br />
          Material Structures
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0,1fr))",
            gap: "24px",
          }}
        >
          {structures.map((structure) => (
            <div
              key={structure}
              style={{
                borderRadius: "30px",
                padding: "50px 30px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                textAlign: "center",
                backdropFilter: "blur(20px)",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.5,
                }}
              >
                {structure}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
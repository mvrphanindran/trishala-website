import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: "20px",
        left: "24px",
        right: "24px",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
          height: "78px",
          background: "rgba(255,255,255,0.68)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          borderRadius: "26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
          border: "1px solid rgba(255,255,255,0.32)",
          boxShadow:
            "0 10px 35px rgba(15,23,42,0.10), inset 0 1px 0 rgba(255,255,255,0.18)",
        }}
      >
        {/* LOGO */}

        <Link href="/">
          <img
            src="/images/logo/trishala-logo-v2.png"
            alt="Trishala Laminates"
            style={{
              height: "50px",
              width: "auto",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </Link>

        {/* NAVIGATION */}

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "38px",
            fontSize: "15px",
            fontWeight: 600,
            color: "#0B1B4D",
            letterSpacing: "-0.01em",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Home
          </Link>

          <Link
            href="/products"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Solutions
          </Link>

          <Link
            href="/structures"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Structures
          </Link>

          <Link
            href="/quality"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Quality
          </Link>

          <Link
            href="/about"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            About
          </Link>

          <Link
            href="/contact"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Contact
          </Link>
        </nav>

        {/* BUTTON */}

        <button
          style={{
            background: "#00B140",
            color: "white",
            border: "none",
            borderRadius: "18px",
            padding: "12px 24px",
            fontWeight: 700,
            fontSize: "14px",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0,177,64,0.22)",
          }}
        >
          Get Quote
        </button>
      </div>
    </header>
  );
}
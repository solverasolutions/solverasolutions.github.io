export default function Footer({ logo }) {
  return (
    <footer
      style={{
        padding: "60px 24px 32px",
        background: "var(--navy-deep)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          <div>
            <img
              src={logo}
              alt="Solvera Solutions"
              style={{ height: 36, marginBottom: 16, filter: "brightness(1.8)" }}
            />
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.4)",
                maxWidth: 280,
              }}
            >
              Reliable digital solutions for growing businesses. Web apps, mobile apps, hosting,
              DevOps, and automation — done right.
            </p>
          </div>
          <div>
            <h5
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 13,
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 16,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Company
            </h5>
            {["About", "Services", "Process", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  display: "block",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  padding: "5px 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.35)")}
              >
                {l}
              </a>
            ))}
          </div>
          <div>
            <h5
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 13,
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 16,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Services
            </h5>
            {["Web Apps", "Mobile Apps", "Hosting", "DevOps", "Automation", "Consulting"].map(
              (l) => (
                <a
                  key={l}
                  href="#services"
                  style={{
                    display: "block",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    padding: "5px 0",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.35)")}
                >
                  {l}
                </a>
              )
            )}
          </div>
          <div>
            <h5
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 13,
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 16,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Contact
            </h5>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", lineHeight: 1.8 }}>
              hello@solverasolutions.com
              <br />
              +20 100 000 0000
              <br />
              Cairo, Egypt
            </p>
          </div>
        </div>

        <div
          style={{
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
            &copy; {new Date().getFullYear()} Solvera Solutions. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.25)")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

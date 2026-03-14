import { Icons } from "../ui/Icons";
import AnimatedSection from "../ui/AnimatedSection";

const reasons = [
  {
    icon: <Icons.Shield />,
    title: "Production-Grade Reliability",
    desc: "Every solution we build is designed for uptime, tested for edge cases, and monitored in real-time.",
  },
  {
    icon: <Icons.Zap />,
    title: "Fast, Iterative Delivery",
    desc: "Agile sprints with transparent progress. You see results early and often — not just at the end.",
  },
  {
    icon: <Icons.Wrench />,
    title: "Full-Stack Ownership",
    desc: "From frontend code to server configuration, we handle the complete technical stack under one roof.",
  },
  {
    icon: <Icons.Headphones />,
    title: "Ongoing Support & SLAs",
    desc: "Post-launch support plans with defined response times. Your systems stay healthy long after deployment.",
  },
];

export default function WhyUs() {
  return (
    <section
      style={{ padding: "100px 24px", background: "var(--white)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 80,
            alignItems: "center",
          }}
          className="why-grid"
        >
          <AnimatedSection>
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--blue-500)",
                marginBottom: 16,
                fontFamily: "var(--font-display)",
              }}
            >
              Why Solvera
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "var(--navy)",
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              Engineered for Performance. Built on Trust.
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--gray-600)",
                marginBottom: 32,
              }}
            >
              We are not just developers — we are operations-minded engineers who
              understand what keeps systems running at scale. That difference
              shows up in every project we deliver.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 15,
                fontWeight: 600,
                color: "var(--blue-700)",
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                transition: "gap 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.gap = "12px")}
              onMouseLeave={(e) => (e.target.style.gap = "8px")}
            >
              Talk to our team <Icons.ArrowRight />
            </a>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
            className="why-cards"
          >
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 100}>
                <div
                  style={{
                    padding: 28,
                    borderRadius: 14,
                    border: "1px solid var(--gray-100)",
                    background: "var(--gray-50)",
                    transition: "all 0.3s ease",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--blue-400)";
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(11,29,51,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--gray-100)";
                    e.currentTarget.style.background = "var(--gray-50)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      color: "var(--blue-500)",
                      marginBottom: 16,
                    }}
                  >
                    {r.icon}
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: 8,
                    }}
                  >
                    {r.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.7,
                      color: "var(--gray-600)",
                    }}
                  >
                    {r.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .why-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

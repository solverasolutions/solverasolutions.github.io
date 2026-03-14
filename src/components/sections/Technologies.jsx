import AnimatedSection from "../ui/AnimatedSection";

const techCategories = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Go", "REST APIs", "GraphQL"],
  },
  {
    category: "Infrastructure",
    items: ["AWS", "GCP", "DigitalOcean", "Linux", "Nginx"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Swift", "Kotlin", "Expo", "Dart"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
  },
];

export default function Technologies() {
  return (
    <section
      id="tech"
      style={{ padding: "100px 24px", background: "var(--gray-50)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: 56 }}>
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
            Tech Stack
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "var(--navy)",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            Technologies We Work With
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--gray-600)",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            We choose the right tool for each job — leveraging battle-tested
            technologies and modern frameworks to deliver optimal results.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
          className="tech-grid"
        >
          {techCategories.map((cat, ci) => (
            <AnimatedSection key={cat.category} delay={ci * 60}>
              <div
                style={{
                  background: "white",
                  borderRadius: 14,
                  padding: 28,
                  border: "1px solid var(--gray-200)",
                  height: "100%",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 13,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--blue-500)",
                    marginBottom: 16,
                  }}
                >
                  {cat.category}
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        padding: "6px 14px",
                        borderRadius: 8,
                        background: "var(--gray-50)",
                        color: "var(--navy)",
                        fontFamily: "var(--font-body)",
                        border: "1px solid var(--gray-100)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:768px) { .tech-grid { grid-template-columns: 1fr 1fr !important; } }
        @media(max-width:480px) { .tech-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

import { Icons } from "../ui/Icons";
import AnimatedSection from "../ui/AnimatedSection";

const steps = [
  {
    icon: <Icons.Search />,
    num: "01",
    title: "Discovery",
    desc: "We start by understanding your business goals, technical requirements, and constraints. This is where we define the problem clearly.",
  },
  {
    icon: <Icons.Clipboard />,
    num: "02",
    title: "Planning",
    desc: "Architecture decisions, technology choices, timelines, and milestones — all mapped out before a single line of code is written.",
  },
  {
    icon: <Icons.Code />,
    num: "03",
    title: "Build",
    desc: "Iterative development with regular checkpoints. Clean code, testing, and documentation are baked into every sprint.",
  },
  {
    icon: <Icons.Rocket />,
    num: "04",
    title: "Deploy",
    desc: "Automated deployments to production-ready infrastructure. We handle CI/CD, DNS, SSL, and monitoring from day one.",
  },
  {
    icon: <Icons.Headphones />,
    num: "05",
    title: "Support & Optimize",
    desc: "Post-launch monitoring, performance tuning, and ongoing maintenance. We stay with you to ensure long-term system health.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(180deg, var(--navy-deep) 0%, var(--navy) 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--cyan)",
              marginBottom: 16,
              fontFamily: "var(--font-display)",
            }}
          >
            How We Work
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "white",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            A Proven Delivery Process
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Every engagement follows a structured methodology that balances
            speed with quality and keeps you informed at every stage.
          </p>
        </AnimatedSection>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 80}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr",
                  gap: 24,
                  padding: "32px 0",
                  borderBottom:
                    i < steps.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                  alignItems: "start",
                }}
                className="process-row"
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "rgba(33,150,243,0.1)",
                    border: "1px solid rgba(33,150,243,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--blue-400)",
                  }}
                >
                  {step.icon}
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 8,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "var(--cyan)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {step.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "white",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: "rgba(255,255,255,0.5)",
                      maxWidth: 560,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

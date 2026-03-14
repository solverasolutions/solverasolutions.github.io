import AnimatedSection from "../ui/AnimatedSection";

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "100px 24px", background: "var(--white)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="about-grid"
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
              About Us
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "var(--navy)",
                marginBottom: 24,
                letterSpacing: "-0.02em",
              }}
            >
              Your Technology Partner for Scalable Growth
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--gray-600)",
                marginBottom: 20,
              }}
            >
              Solvera Solutions is a technology agency built by engineers who
              understand what it takes to launch, scale, and maintain production
              systems. We combine deep technical expertise with a business-first
              mindset to help startups and growing companies build infrastructure
              they can trust.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--gray-600)",
                marginBottom: 32,
              }}
            >
              From a single web or mobile application to a full DevOps pipeline,
              we work as an extension of your team — delivering performance,
              reliability, and the kind of technical ownership that moves
              projects forward.
            </p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[
                {
                  title: "Mission",
                  desc: "Deliver reliable, scalable technical solutions that empower businesses to operate confidently and grow without limits.",
                },
                {
                  title: "Vision",
                  desc: "To become the technology partner of choice for businesses that demand performance, uptime, and technical excellence.",
                },
              ].map((item) => (
                <div key={item.title} style={{ flex: "1 1 200px" }}>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 15,
                      color: "var(--navy)",
                      marginBottom: 8,
                    }}
                  >
                    Our {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "var(--gray-600)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                background:
                  "linear-gradient(145deg, var(--navy) 0%, #0D2B4A 100%)",
                padding: 48,
                minHeight: 420,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(33,150,243,0.15) 0%, transparent 70%)",
                }}
              />
              {[
                {
                  num: "01",
                  label: "Plan & Architect",
                  desc: "Requirements, architecture, and technical strategy.",
                },
                {
                  num: "02",
                  label: "Build & Test",
                  desc: "Clean code, rigorous testing, and iterative delivery.",
                },
                {
                  num: "03",
                  label: "Deploy & Scale",
                  desc: "Reliable infrastructure with monitoring and support.",
                },
              ].map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                    padding: "20px 0",
                    borderBottom:
                      i < 2
                        ? "1px solid rgba(255,255,255,0.07)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--cyan)",
                      minWidth: 28,
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 16,
                        fontWeight: 600,
                        color: "white",
                        marginBottom: 4,
                      }}
                    >
                      {step.label}
                    </h4>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important;gap:40px !important;}}`}</style>
    </section>
  );
}

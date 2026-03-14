import { useState } from "react";
import { Icons } from "../ui/Icons";
import AnimatedSection from "../ui/AnimatedSection";

const services = [
  {
    icon: <Icons.Code />,
    title: "Web App Development",
    desc: "Custom-built web applications designed for performance, security, and scalability. From SPAs to full-stack platforms, we engineer solutions that align with your business goals and user expectations.",
    tags: ["React", "Next.js", "Node.js", "APIs"],
  },
  {
    icon: <Icons.Smartphone />,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications built for performance and a seamless user experience. From concept to app store, we deliver polished mobile products that engage users and drive results.",
    tags: ["Flutter", "Swift", "iOS", "Android"],
  },
  {
    icon: <Icons.Server />,
    title: "Hosting & Infrastructure",
    desc: "Managed hosting environments tuned for uptime and speed. We configure, deploy, and maintain your servers so your applications run reliably — from shared setups to dedicated cloud architectures.",
    tags: ["AWS", "Linux", "VPS", "CDN"],
  },
  {
    icon: <Icons.GitBranch />,
    title: "DevOps Solutions",
    desc: "CI/CD pipelines, containerization, and infrastructure-as-code practices that streamline your development lifecycle. Ship faster with automated, repeatable, and auditable deployment workflows.",
    tags: ["Docker", "CI/CD", "Terraform", "K8s"],
  },
  {
    icon: <Icons.Zap />,
    title: "Automation Services",
    desc: "Eliminate repetitive tasks and reduce operational overhead with intelligent automation. From server provisioning to workflow orchestration, we build systems that work while you sleep.",
    tags: ["Ansible", "Scripting", "Cron", "Webhooks"],
  },
  {
    icon: <Icons.Compass />,
    title: "Technical Consulting",
    desc: "Solution architecture and technical strategy for teams that need expert guidance. We assess, plan, and recommend the right tools and approaches to solve complex engineering challenges.",
    tags: ["Architecture", "Migration", "Audit", "Strategy"],
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="services"
      style={{ padding: "100px 24px", background: "var(--gray-50)" }}
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
              color: "var(--blue-500)",
              marginBottom: 16,
              fontFamily: "var(--font-display)",
            }}
          >
            What We Do
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
            End-to-End Technical Services
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--gray-600)",
              maxWidth: 580,
              margin: "0 auto",
            }}
          >
            From concept to production, we cover every layer of your technology
            stack with services designed for reliability and growth.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 20,
          }}
          className="services-grid"
        >
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 80}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: 36,
                  border: `1px solid ${hovered === i ? "var(--blue-400)" : "var(--gray-200)"}`,
                  transition: "all 0.35s ease",
                  transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
                  boxShadow:
                    hovered === i
                      ? "0 12px 40px rgba(11,29,51,0.08)"
                      : "0 1px 3px rgba(11,29,51,0.04)",
                  cursor: "default",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background:
                      hovered === i ? "var(--blue-700)" : "var(--gray-50)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.35s ease",
                    color: hovered === i ? "white" : "var(--blue-700)",
                    marginBottom: 20,
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 19,
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: 12,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.75,
                    color: "var(--gray-600)",
                    marginBottom: 20,
                    flex: 1,
                  }}
                >
                  {s.desc}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        fontFamily: "var(--font-display)",
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: "var(--gray-50)",
                        color: "var(--gray-600)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <style>{`
        .services-grid { grid-template-columns: repeat(3, 1fr); }
        @media(max-width:1024px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media(max-width:640px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

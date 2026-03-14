import { useState } from "react";
import { Icons } from "../ui/Icons";
import AnimatedSection from "../ui/AnimatedSection";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We partner with startups, SMBs, and growing companies that need reliable web applications, infrastructure, or DevOps support. Whether you're launching an MVP or scaling an existing product, we tailor our approach to your stage and needs.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We frequently embed with client engineering teams as a technical extension — handling infrastructure, DevOps, or specific development workstreams while your team focuses on core product.",
  },
  {
    q: "What does your pricing look like?",
    a: "We offer project-based pricing for defined deliverables and monthly retainers for ongoing support and development. Every engagement starts with a scoping conversation to ensure alignment on budget and expectations.",
  },
  {
    q: "How quickly can you start a new project?",
    a: "Most projects kick off within 1–2 weeks after the scoping call. For urgent infrastructure or DevOps needs, we can often begin within days.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. We offer tiered support plans with defined SLAs — from basic monitoring and patching to full managed operations. Our goal is to keep your systems healthy long-term.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      style={{ padding: "100px 24px", background: "var(--gray-50)" }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: 48 }}>
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
            FAQ
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "var(--navy)",
              letterSpacing: "-0.02em",
            }}
          >
            Common Questions
          </h2>
        </AnimatedSection>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 50}>
              <div
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  background: "white",
                  borderRadius: 12,
                  overflow: "hidden",
                  border: `1px solid ${openIndex === i ? "var(--blue-400)" : "var(--gray-200)"}`,
                  cursor: "pointer",
                  transition: "border-color 0.3s",
                }}
              >
                <div
                  style={{
                    padding: "18px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--navy)",
                    }}
                  >
                    {faq.q}
                  </h4>
                  <span
                    style={{
                      transition: "transform 0.3s",
                      transform:
                        openIndex === i ? "rotate(180deg)" : "rotate(0)",
                      color: "var(--gray-400)",
                      flexShrink: 0,
                      marginLeft: 16,
                    }}
                  >
                    <Icons.ChevronDown />
                  </span>
                </div>
                <div
                  style={{
                    maxHeight: openIndex === i ? 200 : 0,
                    opacity: openIndex === i ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.35s ease",
                  }}
                >
                  <p
                    style={{
                      padding: "0 24px 18px",
                      fontSize: 14.5,
                      lineHeight: 1.75,
                      color: "var(--gray-600)",
                    }}
                  >
                    {faq.a}
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

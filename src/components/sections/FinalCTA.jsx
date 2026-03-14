import { Icons } from "../ui/Icons";
import AnimatedSection from "../ui/AnimatedSection";

export default function FinalCTA() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background:
          "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 50%, #0D2B4A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(33,150,243,0.08) 0%, transparent 70%)",
        }}
      />
      <AnimatedSection
        style={{
          maxWidth: 680,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 700,
            color: "white",
            marginBottom: 16,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          Ready to Scale Your Technology?
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.5)",
            marginBottom: 32,
          }}
        >
          Let's talk about your project. Whether it's a new build, a
          migration, or ongoing support — we're here to deliver results.
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "var(--font-display)",
              background:
                "linear-gradient(135deg, var(--blue-700) 0%, var(--blue-500) 100%)",
              color: "white",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(33,150,243,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow =
                "0 8px 30px rgba(33,150,243,0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow =
                "0 4px 20px rgba(33,150,243,0.3)";
            }}
          >
            Book a Consultation <Icons.ArrowRight />
          </a>
          <a
            href="mailto:hello@solverasolutions.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "var(--font-display)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.85)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.4)";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.2)";
              e.target.style.color = "rgba(255,255,255,0.85)";
            }}
          >
            hello@solverasolutions.com
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}

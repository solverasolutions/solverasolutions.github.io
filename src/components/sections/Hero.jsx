import { Icons } from "../ui/Icons";

export default function Hero({ logo }) {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(165deg, var(--navy-deep) 0%, var(--navy) 40%, #0D2B4A 100%)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, opacity: 0.06 }}>
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, var(--blue-500) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "pulse 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, var(--cyan) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "pulse 8s ease-in-out infinite 1s",
          }}
        />
        <svg
          width="100%"
          height="100%"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "white",
              marginBottom: 20,
              animation: "fadeUp 0.8s ease forwards",
              letterSpacing: "-0.02em",
            }}
          >
            Smart Tech Solutions,
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--blue-400) 0%, var(--cyan-light) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Built to Scale.
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 560,
              marginBottom: 40,
              animation: "fadeUp 0.8s ease 0.15s forwards",
              opacity: 0,
            }}
          >
            From custom web and mobile applications to cloud infrastructure,
            DevOps pipelines, and automation — we deliver reliable technical
            solutions that grow with your business.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              animation: "fadeUp 0.8s ease 0.3s forwards",
              opacity: 0,
            }}
          >
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 30px",
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
              Start a Project <Icons.ArrowRight />
            </a>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 30px",
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
              Explore Services
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: 48,
              marginTop: 64,
              paddingTop: 32,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              animation: "fadeUp 0.8s ease 0.45s forwards",
              opacity: 0,
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "99.9%", label: "Uptime Guarantee" },
              { num: "24/7", label: "Technical Support" },
              { num: "50+", label: "Projects Delivered" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 4,
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

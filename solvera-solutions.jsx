import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   SOLVERA SOLUTIONS — Premium Agency Website
   Design: Corporate-tech, minimal, premium
   Stack: React + Tailwind + CSS animations
   ───────────────────────────────────────────── */

// ── Google Fonts injection ──
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

// ── CSS Variables & Global Styles ──
const styleEl = document.createElement("style");
styleEl.textContent = `
  :root {
    --navy: #0B1D33;
    --navy-deep: #061222;
    --blue-700: #1565C0;
    --blue-500: #2196F3;
    --blue-400: #42A5F5;
    --cyan: #00ACC1;
    --cyan-light: #00E5FF;
    --gray-50: #F7F9FC;
    --gray-100: #EEF1F6;
    --gray-200: #DCE1EA;
    --gray-400: #8E99A9;
    --gray-600: #5A6577;
    --gray-800: #2D3748;
    --white: #FFFFFF;
    --font-display: 'Outfit', sans-serif;
    --font-body: 'DM Sans', sans-serif;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; font-size: 16px; }
  body { font-family: var(--font-body); color: var(--navy); background: var(--white); overflow-x: hidden; }

  ::selection { background: var(--blue-500); color: white; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(styleEl);


/* ═══════════════════════════════════
   UTILITY: Intersection Observer Hook
   ═══════════════════════════════════ */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}


/* ═══════════════════════════════════
   ICONS (inline SVG components)
   ═══════════════════════════════════ */
const Icons = {
  Menu: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>,
  X: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  ArrowRight: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  Code: () => <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 6l-6 8 6 8M18 6l6 8-6 8"/></svg>,
  Server: () => <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="22" height="7" rx="1.5"/><rect x="3" y="17" width="22" height="7" rx="1.5"/><circle cx="7" cy="7.5" r="1"/><circle cx="7" cy="20.5" r="1"/></svg>,
  GitBranch: () => <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6z"/><path d="M18 9c0 6-12 6-12 12"/></svg>,
  Zap: () => <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 26 25 14 14 14 13 2"/></svg>,
  Shield: () => <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2L3 7v6c0 5.55 3.84 10.74 11 12 7.16-1.26 11-6.45 11-12V7L14 2z"/></svg>,
  Smartphone: () => <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="14" height="24" rx="3"/><path d="M12 22h4"/></svg>,
  Compass: () => <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="14" cy="14" r="11"/><polygon points="17.24 8.76 12.12 12.12 8.76 17.24 13.88 13.88 17.24 8.76" fill="currentColor" opacity="0.3"/></svg>,
  Search: () => <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="8"/><path d="M18 18l5.5 5.5"/></svg>,
  Clipboard: () => <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="18" height="20" rx="2"/><path d="M10 2h8v4H10z"/><path d="M10 12h8M10 16h5"/></svg>,
  Wrench: () => <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l5.6 5.6a1 1 0 001.4 0l2-2a1 1 0 000-1.4l-5.6-5.6a1 1 0 00-1.4 0l-2 2z"/><path d="M3 21l7.5-7.5M12.5 6.5L7 12"/></svg>,
  Rocket: () => <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3"/><path d="M22 2L13.4 10.6"/><path d="M16.8 4C19 2 22 2 22 2s0 3-2 5.2L13.4 13.8a1.4 1.4 0 01-1 .4H9l-.8.8a2 2 0 01-2.8 0 2 2 0 010-2.8l.8-.8V8.6c0-.4.1-.7.4-1L12.8 2z"/></svg>,
  Headphones: () => <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a11 11 0 0122 0v6"/><path d="M25 18a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 18a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>,
  Check: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l4.5 4.5L16 5"/></svg>,
  Star: () => <svg width="16" height="16" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1"><polygon points="8 1 10.2 5.4 15 6.1 11.5 9.5 12.3 14.3 8 12 3.7 14.3 4.5 9.5 1 6.1 5.8 5.4"/></svg>,
  Mail: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="16" height="12" rx="2"/><path d="M2 4l8 6 8-6"/></svg>,
  Phone: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 13.5v2a1.5 1.5 0 01-1.63 1.5A14.84 14.84 0 013 4.63 1.5 1.5 0 014.5 3h2A1.5 1.5 0 018 4.36c.1.8.3 1.58.57 2.33a1.5 1.5 0 01-.34 1.58L7 9.5a12 12 0 005.5 5.5l1.23-1.23a1.5 1.5 0 011.58-.34c.75.27 1.53.46 2.33.57A1.5 1.5 0 0118 15.5z"/></svg>,
  MapPin: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8c0 5-6 10-6 10S4 13 4 8a6 6 0 1112 0z"/><circle cx="10" cy="8" r="2"/></svg>,
  ChevronDown: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6l4 4 4-4"/></svg>,
  ExternalLink: () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 1h4v4M5 9l9-9M7 1H2a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V8"/></svg>,
};


/* ═══════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════ */
function Navbar({ logo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Technologies", href: "#tech" },
    { label: "Contact", href: "#contact" },
  ];

  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
    background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(11,29,51,0.06)" : "1px solid transparent",
    transition: "all 0.35s ease",
    fontFamily: "var(--font-display)",
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src={logo} alt="Solvera Solutions" style={{ height: 38, objectFit: "contain" }} />
          <span style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
            color: scrolled ? "var(--navy)" : "var(--navy)",
            letterSpacing: "-0.02em", transition: "color 0.3s",
          }}>
            <span style={{ color: scrolled ? "var(--navy)" : "var(--navy)" }}>Solvera</span>{" "}
            <span style={{ color: "var(--blue-500)", fontWeight: 700 }}>Solutions</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="nav-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{
                textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: "0.01em",
                color: scrolled ? "var(--navy)" : "var(--gray-600)",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = "var(--blue-500)"}
              onMouseLeave={e => e.target.style.color = scrolled ? "var(--navy)" : "var(--gray-600)"}
            >{l.label}</a>
          ))}
          <a href="#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "10px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600,
              background: "var(--blue-700)", color: "white", textDecoration: "none",
              transition: "all 0.25s", boxShadow: "0 2px 8px rgba(21,101,192,0.25)",
            }}
            onMouseEnter={e => { e.target.style.background = "var(--blue-500)"; e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 4px 16px rgba(21,101,192,0.35)"; }}
            onMouseLeave={e => { e.target.style.background = "var(--blue-700)"; e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 2px 8px rgba(21,101,192,0.25)"; }}
          >Get in Touch</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "var(--navy)", padding: 4 }}
          className="nav-mobile-btn"
        >
          {mobileOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: "absolute", top: 72, left: 0, right: 0, background: "white", padding: "16px 24px 24px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)", borderTop: "1px solid var(--gray-100)",
        }} className="nav-mobile-menu">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              style={{ display: "block", padding: "12px 0", textDecoration: "none", fontSize: 16, fontWeight: 500, color: "var(--navy)", borderBottom: "1px solid var(--gray-100)" }}
            >{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)}
            style={{ display: "block", marginTop: 16, padding: "12px 0", textAlign: "center", borderRadius: 8, background: "var(--blue-700)", color: "white", textDecoration: "none", fontWeight: 600, fontSize: 15 }}
          >Get in Touch</a>
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}


/* ═══════════════════════════════════
   SECTION: HERO
   ═══════════════════════════════════ */
function Hero({ logo }) {
  return (
    <section id="hero" style={{
      position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      background: "linear-gradient(165deg, var(--navy-deep) 0%, var(--navy) 40%, #0D2B4A 100%)",
      overflow: "hidden",
    }}>
      {/* Background Pattern */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.06 }}>
        <div style={{
          position: "absolute", top: "10%", right: "5%", width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--blue-500) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "pulse 6s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "10%", width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--cyan) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "pulse 8s ease-in-out infinite 1s",
        }} />
        {/* Grid pattern */}
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
        <div style={{ maxWidth: 720 }}>
          {/* Brand Name */}
          <div style={{
            display: "flex", alignItems: "center", gap: 14, marginBottom: 24,
            animation: "fadeIn 0.6s ease forwards",
          }}>
            <img src={logo} alt="Solvera Solutions" style={{ height: 48, objectFit: "contain" }} />
            <div>
              <span style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
                fontWeight: 800, letterSpacing: "-0.01em", color: "white",
              }}>Solvera</span>{" "}
              <span style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
                fontWeight: 800, letterSpacing: "-0.01em",
                background: "linear-gradient(135deg, var(--blue-400) 0%, var(--cyan-light) 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Solutions</span>
            </div>
          </div>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 100, marginBottom: 28,
            background: "rgba(33,150,243,0.12)", border: "1px solid rgba(33,150,243,0.2)",
            animation: "fadeIn 0.8s ease forwards",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cyan-light)" }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: "var(--blue-400)", fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>
              Technology Solutions Partner
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: 20,
            animation: "fadeUp 0.8s ease forwards",
            letterSpacing: "-0.02em",
          }}>
            Smart Tech Solutions,<br />
            <span style={{
              background: "linear-gradient(135deg, var(--blue-400) 0%, var(--cyan-light) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Built to Scale.</span>
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7,
            color: "rgba(255,255,255,0.6)", maxWidth: 560, marginBottom: 40,
            animation: "fadeUp 0.8s ease 0.15s forwards", opacity: 0,
          }}>
            From custom web and mobile applications to cloud infrastructure, DevOps pipelines, and automation — we deliver reliable technical solutions that grow with your business.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", animation: "fadeUp 0.8s ease 0.3s forwards", opacity: 0 }}>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 30px", borderRadius: 10, fontSize: 15, fontWeight: 600,
              fontFamily: "var(--font-display)",
              background: "linear-gradient(135deg, var(--blue-700) 0%, var(--blue-500) 100%)",
              color: "white", textDecoration: "none",
              boxShadow: "0 4px 20px rgba(33,150,243,0.3)",
              transition: "all 0.3s ease",
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(33,150,243,0.4)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 20px rgba(33,150,243,0.3)"; }}
            >
              Start a Project <Icons.ArrowRight />
            </a>
            <a href="#services" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 30px", borderRadius: 10, fontSize: 15, fontWeight: 600,
              fontFamily: "var(--font-display)",
              background: "transparent", border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.85)", textDecoration: "none",
              transition: "all 0.3s ease",
            }}
              onMouseEnter={e => { e.target.style.borderColor = "rgba(255,255,255,0.4)"; e.target.style.color = "white"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.color = "rgba(255,255,255,0.85)"; }}
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", gap: 48, marginTop: 64, paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            animation: "fadeUp 0.8s ease 0.45s forwards", opacity: 0,
            flexWrap: "wrap",
          }}>
            {[
              { num: "99.9%", label: "Uptime Guarantee" },
              { num: "24/7", label: "Technical Support" },
              { num: "50+", label: "Projects Delivered" },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "white", letterSpacing: "-0.02em" }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════
   SECTION: ABOUT
   ═══════════════════════════════════ */
function About() {
  return (
    <section id="about" style={{ padding: "100px 24px", background: "var(--white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-grid">
          {/* Left */}
          <AnimatedSection>
            <span style={{
              display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "var(--blue-500)", marginBottom: 16,
              fontFamily: "var(--font-display)",
            }}>About Us</span>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700, lineHeight: 1.2, color: "var(--navy)", marginBottom: 24,
              letterSpacing: "-0.02em",
            }}>
              Your Technology Partner for Scalable Growth
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--gray-600)", marginBottom: 20 }}>
              Solvera Solutions is a technology agency built by engineers who understand what it takes to launch, scale, and maintain production systems. We combine deep technical expertise with a business-first mindset to help startups and growing companies build infrastructure they can trust.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--gray-600)", marginBottom: 32 }}>
              From a single web or mobile application to a full DevOps pipeline, we work as an extension of your team — delivering performance, reliability, and the kind of technical ownership that moves projects forward.
            </p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[
                { title: "Mission", desc: "Deliver reliable, scalable technical solutions that empower businesses to operate confidently and grow without limits." },
                { title: "Vision", desc: "To become the technology partner of choice for businesses that demand performance, uptime, and technical excellence." },
              ].map(item => (
                <div key={item.title} style={{ flex: "1 1 200px" }}>
                  <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--navy)", marginBottom: 8 }}>
                    Our {item.title}
                  </h4>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--gray-600)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — visual */}
          <AnimatedSection delay={200}>
            <div style={{
              position: "relative", borderRadius: 20, overflow: "hidden",
              background: "linear-gradient(145deg, var(--navy) 0%, #0D2B4A 100%)",
              padding: 48, minHeight: 420,
              display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              <div style={{ position: "absolute", top: 20, right: 20, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,150,243,0.15) 0%, transparent 70%)" }} />
              {[
                { num: "01", label: "Plan & Architect", desc: "Requirements, architecture, and technical strategy." },
                { num: "02", label: "Build & Test", desc: "Clean code, rigorous testing, and iterative delivery." },
                { num: "03", label: "Deploy & Scale", desc: "Reliable infrastructure with monitoring and support." },
              ].map((step, i) => (
                <div key={step.num} style={{
                  display: "flex", gap: 20, alignItems: "flex-start",
                  padding: "20px 0",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                    color: "var(--cyan)", minWidth: 28,
                  }}>{step.num}</span>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, color: "white", marginBottom: 4 }}>{step.label}</h4>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.5)" }}>{step.desc}</p>
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


/* ═══════════════════════════════════
   SECTION: SERVICES
   ═══════════════════════════════════ */
function Services() {
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

  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" style={{ padding: "100px 24px", background: "var(--gray-50)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--blue-500)", marginBottom: 16,
            fontFamily: "var(--font-display)",
          }}>What We Do</span>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 700, lineHeight: 1.2, color: "var(--navy)", marginBottom: 16,
            letterSpacing: "-0.02em",
          }}>
            End-to-End Technical Services
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--gray-600)", maxWidth: 580, margin: "0 auto" }}>
            From concept to production, we cover every layer of your technology stack with services designed for reliability and growth.
          </p>
        </AnimatedSection>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340, 1fr))",
          gap: 20,
        }} className="services-grid">
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
                  boxShadow: hovered === i ? "0 12px 40px rgba(11,29,51,0.08)" : "0 1px 3px rgba(11,29,51,0.04)",
                  cursor: "default",
                  height: "100%",
                  display: "flex", flexDirection: "column",
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: hovered === i ? "var(--blue-700)" : "var(--gray-50)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.35s ease",
                  color: hovered === i ? "white" : "var(--blue-700)",
                  marginBottom: 20,
                }}>
                  {s.icon}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700,
                  color: "var(--navy)", marginBottom: 12, letterSpacing: "-0.01em",
                }}>{s.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "var(--gray-600)", marginBottom: 20, flex: 1 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {s.tags.map(t => (
                    <span key={t} style={{
                      fontSize: 12, fontWeight: 600, fontFamily: "var(--font-display)",
                      padding: "4px 10px", borderRadius: 6,
                      background: "var(--gray-50)", color: "var(--gray-600)",
                      letterSpacing: "0.02em",
                    }}>{t}</span>
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


/* ═══════════════════════════════════
   SECTION: WHY CHOOSE US
   ═══════════════════════════════════ */
function WhyUs() {
  const reasons = [
    { icon: <Icons.Shield />, title: "Production-Grade Reliability", desc: "Every solution we build is designed for uptime, tested for edge cases, and monitored in real-time." },
    { icon: <Icons.Zap />, title: "Fast, Iterative Delivery", desc: "Agile sprints with transparent progress. You see results early and often — not just at the end." },
    { icon: <Icons.Wrench />, title: "Full-Stack Ownership", desc: "From frontend code to server configuration, we handle the complete technical stack under one roof." },
    { icon: <Icons.Headphones />, title: "Ongoing Support & SLAs", desc: "Post-launch support plans with defined response times. Your systems stay healthy long after deployment." },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "var(--white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "center" }} className="why-grid">
          <AnimatedSection>
            <span style={{
              display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "var(--blue-500)", marginBottom: 16,
              fontFamily: "var(--font-display)",
            }}>Why Solvera</span>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700, lineHeight: 1.2, color: "var(--navy)", marginBottom: 20,
              letterSpacing: "-0.02em",
            }}>
              Engineered for Performance. Built on Trust.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--gray-600)", marginBottom: 32 }}>
              We are not just developers — we are operations-minded engineers who understand what keeps systems running at scale. That difference shows up in every project we deliver.
            </p>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 15, fontWeight: 600, color: "var(--blue-700)",
              textDecoration: "none", fontFamily: "var(--font-display)",
              transition: "gap 0.2s",
            }}
              onMouseEnter={e => e.target.style.gap = "12px"}
              onMouseLeave={e => e.target.style.gap = "8px"}
            >
              Talk to our team <Icons.ArrowRight />
            </a>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="why-cards">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 100}>
                <div style={{
                  padding: 28, borderRadius: 14,
                  border: "1px solid var(--gray-100)",
                  background: "var(--gray-50)",
                  transition: "all 0.3s ease",
                  height: "100%",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--blue-400)"; e.currentTarget.style.background = "white"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(11,29,51,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--gray-100)"; e.currentTarget.style.background = "var(--gray-50)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ color: "var(--blue-500)", marginBottom: 16 }}>{r.icon}</div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>{r.title}</h4>
                  <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "var(--gray-600)" }}>{r.desc}</p>
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


/* ═══════════════════════════════════
   SECTION: PROCESS
   ═══════════════════════════════════ */
function Process() {
  const steps = [
    { icon: <Icons.Search />, num: "01", title: "Discovery", desc: "We start by understanding your business goals, technical requirements, and constraints. This is where we define the problem clearly." },
    { icon: <Icons.Clipboard />, num: "02", title: "Planning", desc: "Architecture decisions, technology choices, timelines, and milestones — all mapped out before a single line of code is written." },
    { icon: <Icons.Code />, num: "03", title: "Build", desc: "Iterative development with regular checkpoints. Clean code, testing, and documentation are baked into every sprint." },
    { icon: <Icons.Rocket />, num: "04", title: "Deploy", desc: "Automated deployments to production-ready infrastructure. We handle CI/CD, DNS, SSL, and monitoring from day one." },
    { icon: <Icons.Headphones />, num: "05", title: "Support & Optimize", desc: "Post-launch monitoring, performance tuning, and ongoing maintenance. We stay with you to ensure long-term system health." },
  ];

  return (
    <section id="process" style={{ padding: "100px 24px", background: "linear-gradient(180deg, var(--navy-deep) 0%, var(--navy) 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--cyan)", marginBottom: 16,
            fontFamily: "var(--font-display)",
          }}>How We Work</span>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 700, lineHeight: 1.2, color: "white", marginBottom: 16,
            letterSpacing: "-0.02em",
          }}>
            A Proven Delivery Process
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: 560, margin: "0 auto" }}>
            Every engagement follows a structured methodology that balances speed with quality and keeps you informed at every stage.
          </p>
        </AnimatedSection>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 80}>
              <div style={{
                display: "grid", gridTemplateColumns: "60px 1fr", gap: 24,
                padding: "32px 0",
                borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                alignItems: "start",
              }} className="process-row">
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: "rgba(33,150,243,0.1)", border: "1px solid rgba(33,150,243,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--blue-400)",
                }}>
                  {step.icon}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, color: "var(--cyan)", letterSpacing: "0.05em" }}>{step.num}</span>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "white" }}>{step.title}</h3>
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", maxWidth: 560 }}>{step.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════
   SECTION: TECHNOLOGIES
   ═══════════════════════════════════ */
function Technologies() {
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

  return (
    <section id="tech" style={{ padding: "100px 24px", background: "var(--gray-50)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--blue-500)", marginBottom: 16,
            fontFamily: "var(--font-display)",
          }}>Tech Stack</span>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 700, lineHeight: 1.2, color: "var(--navy)", marginBottom: 16,
            letterSpacing: "-0.02em",
          }}>
            Technologies We Work With
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--gray-600)", maxWidth: 560, margin: "0 auto" }}>
            We choose the right tool for each job — leveraging battle-tested technologies and modern frameworks to deliver optimal results.
          </p>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="tech-grid">
          {techCategories.map((cat, ci) => (
            <AnimatedSection key={cat.category} delay={ci * 60}>
              <div style={{
                background: "white", borderRadius: 14, padding: 28,
                border: "1px solid var(--gray-200)", height: "100%",
              }}>
                <h4 style={{
                  fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  color: "var(--blue-500)", marginBottom: 16,
                }}>{cat.category}</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {cat.items.map(item => (
                    <span key={item} style={{
                      fontSize: 13, fontWeight: 500, padding: "6px 14px",
                      borderRadius: 8, background: "var(--gray-50)",
                      color: "var(--navy)", fontFamily: "var(--font-body)",
                      border: "1px solid var(--gray-100)",
                    }}>{item}</span>
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


/* ═══════════════════════════════════
   SECTION: TESTIMONIALS
   ═══════════════════════════════════ */
function Testimonials() {
  const testimonials = [
    {
      quote: "Solvera Solutions completely transformed our deployment pipeline. What used to take us hours now happens in minutes with zero downtime. Their technical depth is remarkable.",
      name: "Ahmed K.",
      role: "CTO, LogiFlow",
    },
    {
      quote: "We needed a team that could build our platform AND manage the infrastructure. Solvera delivered both with a level of quality and reliability we didn't expect from an agency.",
      name: "Sarah M.",
      role: "Founder, NexaHealth",
    },
    {
      quote: "Their DevOps work cut our cloud costs by 40% while improving performance. Professional, responsive, and technically sharp — exactly the partner we were looking for.",
      name: "Omar R.",
      role: "VP Engineering, Datavault",
    },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "var(--white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--blue-500)", marginBottom: 16,
            fontFamily: "var(--font-display)",
          }}>Testimonials</span>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 700, lineHeight: 1.2, color: "var(--navy)",
            letterSpacing: "-0.02em",
          }}>
            Trusted by Teams That Ship
          </h2>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="test-grid">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div style={{
                background: "var(--gray-50)", borderRadius: 16, padding: 36,
                border: "1px solid var(--gray-100)", height: "100%",
                display: "flex", flexDirection: "column",
                transition: "all 0.3s ease",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--blue-400)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(11,29,51,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--gray-100)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {[1,2,3,4,5].map(s => <Icons.Star key={s} />)}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--gray-600)", flex: 1, marginBottom: 24, fontStyle: "italic" }}>
                  "{t.quote}"
                </p>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--navy)" }}>{t.name}</p>
                  <p style={{ fontSize: 13, color: "var(--gray-400)" }}>{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:768px) { .test-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}


/* ═══════════════════════════════════
   SECTION: FAQ
   ═══════════════════════════════════ */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: "What types of businesses do you work with?", a: "We partner with startups, SMBs, and growing companies that need reliable web applications, infrastructure, or DevOps support. Whether you're launching an MVP or scaling an existing product, we tailor our approach to your stage and needs." },
    { q: "Can you work with our existing team?", a: "Absolutely. We frequently embed with client engineering teams as a technical extension — handling infrastructure, DevOps, or specific development workstreams while your team focuses on core product." },
    { q: "What does your pricing look like?", a: "We offer project-based pricing for defined deliverables and monthly retainers for ongoing support and development. Every engagement starts with a scoping conversation to ensure alignment on budget and expectations." },
    { q: "How quickly can you start a new project?", a: "Most projects kick off within 1–2 weeks after the scoping call. For urgent infrastructure or DevOps needs, we can often begin within days." },
    { q: "Do you offer post-launch support?", a: "Yes. We offer tiered support plans with defined SLAs — from basic monitoring and patching to full managed operations. Our goal is to keep your systems healthy long-term." },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "var(--gray-50)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{
            display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--blue-500)", marginBottom: 16,
            fontFamily: "var(--font-display)",
          }}>FAQ</span>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
            fontWeight: 700, lineHeight: 1.2, color: "var(--navy)",
            letterSpacing: "-0.02em",
          }}>
            Common Questions
          </h2>
        </AnimatedSection>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 50}>
              <div
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  background: "white", borderRadius: 12, overflow: "hidden",
                  border: `1px solid ${openIndex === i ? "var(--blue-400)" : "var(--gray-200)"}`,
                  cursor: "pointer", transition: "border-color 0.3s",
                }}
              >
                <div style={{
                  padding: "18px 24px", display: "flex", justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 600, color: "var(--navy)" }}>{faq.q}</h4>
                  <span style={{
                    transition: "transform 0.3s",
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0)",
                    color: "var(--gray-400)", flexShrink: 0, marginLeft: 16,
                  }}><Icons.ChevronDown /></span>
                </div>
                <div style={{
                  maxHeight: openIndex === i ? 200 : 0,
                  opacity: openIndex === i ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.35s ease",
                }}>
                  <p style={{
                    padding: "0 24px 18px", fontSize: 14.5, lineHeight: 1.75, color: "var(--gray-600)",
                  }}>{faq.a}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════
   SECTION: CONTACT
   ═══════════════════════════════════ */
function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%", padding: "14px 16px", borderRadius: 10, border: "1px solid var(--gray-200)",
    fontSize: 15, fontFamily: "var(--font-body)", color: "var(--navy)",
    background: "var(--gray-50)", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "var(--white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "start" }} className="contact-grid">
          {/* Left */}
          <AnimatedSection>
            <span style={{
              display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "var(--blue-500)", marginBottom: 16,
              fontFamily: "var(--font-display)",
            }}>Get in Touch</span>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700, lineHeight: 1.2, color: "var(--navy)", marginBottom: 20,
              letterSpacing: "-0.02em",
            }}>
              Let's Build Something Reliable Together
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--gray-600)", marginBottom: 40 }}>
              Whether you need a web or mobile application, infrastructure setup, or DevOps consulting — we are ready to scope, plan, and deliver. Reach out and let's discuss your project.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: <Icons.Mail />, label: "hello@solverasolutions.com" },
                { icon: <Icons.Phone />, label: "+20 100 000 0000" },
                { icon: <Icons.MapPin />, label: "Cairo, Egypt — Available Worldwide" },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10, background: "var(--gray-50)",
                    border: "1px solid var(--gray-100)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--blue-500)", flexShrink: 0,
                  }}>{c.icon}</div>
                  <span style={{ fontSize: 15, color: "var(--gray-600)" }}>{c.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={200}>
            <div style={{
              background: "var(--gray-50)", borderRadius: 20, padding: 40,
              border: "1px solid var(--gray-100)",
            }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%", background: "rgba(33,150,243,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px", color: "var(--blue-500)",
                  }}>
                    <Icons.Check />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>Message Received</h3>
                  <p style={{ fontSize: 15, color: "var(--gray-600)" }}>We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--navy)", marginBottom: 24 }}>
                    Send Us a Message
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <input
                      type="text" placeholder="Full Name" style={inputStyle}
                      value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})}
                      onFocus={e => { e.target.style.borderColor = "var(--blue-400)"; e.target.style.boxShadow = "0 0 0 3px rgba(33,150,243,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor = "var(--gray-200)"; e.target.style.boxShadow = "none"; }}
                    />
                    <input
                      type="email" placeholder="Email Address" style={inputStyle}
                      value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})}
                      onFocus={e => { e.target.style.borderColor = "var(--blue-400)"; e.target.style.boxShadow = "0 0 0 3px rgba(33,150,243,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor = "var(--gray-200)"; e.target.style.boxShadow = "none"; }}
                    />
                    <select
                      style={{ ...inputStyle, appearance: "none", cursor: "pointer", color: formState.service ? "var(--navy)" : "var(--gray-400)" }}
                      value={formState.service} onChange={e => setFormState({...formState, service: e.target.value})}
                      onFocus={e => { e.target.style.borderColor = "var(--blue-400)"; e.target.style.boxShadow = "0 0 0 3px rgba(33,150,243,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor = "var(--gray-200)"; e.target.style.boxShadow = "none"; }}
                    >
                      <option value="" disabled>Select a Service</option>
                      <option>Web App Development</option>
                      <option>Mobile App Development</option>
                      <option>Hosting & Infrastructure</option>
                      <option>DevOps Solutions</option>
                      <option>Automation Services</option>
                      <option>Technical Consulting</option>
                      <option>Other</option>
                    </select>
                    <textarea
                      placeholder="Tell us about your project…" rows={4}
                      style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
                      value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}
                      onFocus={e => { e.target.style.borderColor = "var(--blue-400)"; e.target.style.boxShadow = "0 0 0 3px rgba(33,150,243,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor = "var(--gray-200)"; e.target.style.boxShadow = "none"; }}
                    />
                    <button
                      onClick={handleSubmit}
                      style={{
                        width: "100%", padding: "14px 24px", borderRadius: 10, border: "none",
                        fontSize: 15, fontWeight: 700, fontFamily: "var(--font-display)",
                        background: "linear-gradient(135deg, var(--blue-700) 0%, var(--blue-500) 100%)",
                        color: "white", cursor: "pointer",
                        boxShadow: "0 4px 16px rgba(21,101,192,0.25)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 6px 24px rgba(21,101,192,0.35)"; }}
                      onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 16px rgba(21,101,192,0.25)"; }}
                    >
                      Send Message
                    </button>
                  </div>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr !important;gap:40px !important;}}`}</style>
    </section>
  );
}


/* ═══════════════════════════════════
   SECTION: FINAL CTA
   ═══════════════════════════════════ */
function FinalCTA() {
  return (
    <section style={{
      padding: "80px 24px",
      background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 50%, #0D2B4A 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(33,150,243,0.08) 0%, transparent 70%)",
      }} />
      <AnimatedSection style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
          fontWeight: 700, color: "white", marginBottom: 16, letterSpacing: "-0.02em", lineHeight: 1.2,
        }}>
          Ready to Scale Your Technology?
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>
          Let's talk about your project. Whether it's a new build, a migration, or ongoing support — we're here to deliver results.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600,
            fontFamily: "var(--font-display)",
            background: "linear-gradient(135deg, var(--blue-700) 0%, var(--blue-500) 100%)",
            color: "white", textDecoration: "none",
            boxShadow: "0 4px 20px rgba(33,150,243,0.3)",
            transition: "all 0.3s ease",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(33,150,243,0.4)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 20px rgba(33,150,243,0.3)"; }}
          >
            Book a Consultation <Icons.ArrowRight />
          </a>
          <a href="mailto:hello@solverasolutions.com" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600,
            fontFamily: "var(--font-display)",
            background: "transparent", border: "1px solid rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.85)", textDecoration: "none",
            transition: "all 0.3s ease",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "rgba(255,255,255,0.4)"; e.target.style.color = "white"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.color = "rgba(255,255,255,0.85)"; }}
          >
            hello@solverasolutions.com
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}


/* ═══════════════════════════════════
   FOOTER
   ═══════════════════════════════════ */
function Footer({ logo }) {
  return (
    <footer style={{ padding: "60px 24px 32px", background: "var(--navy-deep)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <img src={logo} alt="Solvera Solutions" style={{ height: 36, marginBottom: 16, filter: "brightness(1.8)" }} />
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.4)", maxWidth: 280 }}>
              Reliable digital solutions for growing businesses. Web apps, mobile apps, hosting, DevOps, and automation — done right.
            </p>
          </div>
          {/* Links */}
          <div>
            <h5 style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 16, letterSpacing: "0.06em", textTransform: "uppercase" }}>Company</h5>
            {["About", "Services", "Process", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.35)", textDecoration: "none", padding: "5px 0", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.7)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.35)"}
              >{l}</a>
            ))}
          </div>
          <div>
            <h5 style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 16, letterSpacing: "0.06em", textTransform: "uppercase" }}>Services</h5>
            {["Web Apps", "Mobile Apps", "Hosting", "DevOps", "Automation", "Consulting"].map(l => (
              <a key={l} href="#services" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.35)", textDecoration: "none", padding: "5px 0", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.7)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.35)"}
              >{l}</a>
            ))}
          </div>
          <div>
            <h5 style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 16, letterSpacing: "0.06em", textTransform: "uppercase" }}>Contact</h5>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", lineHeight: 1.8 }}>
              hello@solverasolutions.com<br />
              +20 100 000 0000<br />
              Cairo, Egypt
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
            &copy; {new Date().getFullYear()} Solvera Solutions. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service"].map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.5)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.25)"}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media(max-width:480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}


/* ═══════════════════════════════════
   MAIN APP COMPONENT
   ═══════════════════════════════════ */
export default function SolveraSolutions() {
  const logoUrl = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCARCB9ADASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAIBAwQFBgcI/8QAShABAAIBAwIEAgYIBAMGBQMFAAECAwQFEQYhEjFBUWFxBxMUIoGRIzJCUqGxwdEVM2LhJHKSFkNTY7LwCCU0gqI1ZHPxJkSDwv/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQIDBgEH/8QANhEBAAICAQMBBQYGAgIDAQAAAAECAxEEBRIxIRMiQVFhBhQycYHRI0KRobHhM/BDwSQ08VL/2gAMAwEAAhEDEQA/APjIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z";

  return (
    <div>
      <Navbar logo={logoUrl} />
      <Hero logo={logoUrl} />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Technologies />
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer logo={logoUrl} />
    </div>
  );
}

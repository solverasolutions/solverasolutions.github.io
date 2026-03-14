import { useEffect, useRef, useState } from "react";
import logoUrl from "./logo.png";

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
const SCROLL_THRESHOLD = 24;
const NAV_HEIGHT = 72;
const NAV_HEIGHT_SCROLLED = 64;

function Navbar({ logo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Technologies", href: "#tech" },
    { label: "Contact", href: "#contact" },
  ];

  const duration = reduceMotion ? "0.01s" : "0.3s";
  const easing = "cubic-bezier(0.4, 0, 0.2, 1)";

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: scrolled ? NAV_HEIGHT_SCROLLED : NAV_HEIGHT,
    background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(12px) saturate(180%)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(12px) saturate(180%)" : "none",
    borderBottom: scrolled ? "1px solid rgba(11,29,51,0.08)" : "1px solid transparent",
    boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.04)" : "none",
    transform: "translateZ(0)",
    willChange: scrolled ? "auto" : "auto",
    transition: reduceMotion
      ? "none"
      : `height ${duration} ${easing}, background ${duration} ${easing}, backdrop-filter ${duration} ${easing}, border-color ${duration} ${easing}, box-shadow ${duration} ${easing}`,
    fontFamily: "var(--font-display)",
  };

  const innerHeight = scrolled ? NAV_HEIGHT_SCROLLED : NAV_HEIGHT;
  const logoHeight = scrolled ? 40 : 48;
  const textTransition = reduceMotion ? "none" : `color ${duration} ${easing}`;

  return (
    <nav style={navStyle}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: innerHeight,
        transition: reduceMotion ? "none" : `height ${duration} ${easing}`,
      }}>
        {/* Logo */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img
            src={logo}
            alt="Solvera Solutions"
            style={{
              height: logoHeight,
              width: "auto",
              objectFit: "contain",
              transition: reduceMotion ? "none" : `height ${duration} ${easing}`,
            }}
          />
          <span style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: scrolled ? 17 : 18,
            letterSpacing: "-0.02em",
            transition: textTransition,
          }}>
            <span style={{ color: scrolled ? "var(--navy)" : "var(--white)" }}>Solvera</span>{" "}
            <span style={{ color: "var(--blue-500)", fontWeight: 700 }}>Solutions</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="nav-desktop">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.01em",
                color: scrolled ? "var(--navy)" : "rgba(255,255,255,0.9)",
                transition: textTransition,
              }}
              onMouseEnter={e => { e.target.style.color = "var(--blue-500)"; }}
              onMouseLeave={e => { e.target.style.color = scrolled ? "var(--navy)" : "rgba(255,255,255,0.9)"; }}
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
          position: "absolute",
          top: innerHeight,
          left: 0,
          right: 0,
          background: "white",
          padding: "16px 24px 24px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          borderTop: "1px solid var(--gray-100)",
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
          {/* <div style={{
            display: "flex", alignItems: "center", gap: 14, marginBottom: 24,
            animation: "fadeIn 0.6s ease forwards",
          }}>
            {/* <img src={logo} alt="Solvera Solutions" style={{ height: 48, objectFit: "contain" }} /> */}
            {/* <div>
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
            </div> }
          </div> */}

          {/* Badge */}
          {/* <div style={{
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
 */}
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

import { useState, useEffect, useRef } from "react";
import { Icons } from "../ui/Icons";

const SCROLL_THRESHOLD = 24;
const NAV_HEIGHT = 72;
const NAV_HEIGHT_SCROLLED = 64;

export default function Navbar({ logo }) {
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
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: innerHeight,
          transition: reduceMotion ? "none" : `height ${duration} ${easing}`,
        }}
      >
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
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: scrolled ? 17 : 18,
              letterSpacing: "-0.02em",
              transition: textTransition,
            }}
          >
            <span style={{ color: scrolled ? "var(--navy)" : "var(--white)" }}>Solvera</span>{" "}
            <span style={{ color: "var(--blue-500)", fontWeight: 700 }}>Solutions</span>
          </span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="nav-desktop">
          {links.map((l) => (
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
              onMouseEnter={(e) => {
                e.target.style.color = "var(--blue-500)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = scrolled ? "var(--navy)" : "rgba(255,255,255,0.9)";
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "10px 22px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              background: "var(--blue-700)",
              color: "white",
              textDecoration: "none",
              transition: "all 0.25s",
              boxShadow: "0 2px 8px rgba(21,101,192,0.25)",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--blue-500)";
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 4px 16px rgba(21,101,192,0.35)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "var(--blue-700)";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 8px rgba(21,101,192,0.25)";
            }}
          >
            Get in Touch
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--navy)",
            padding: 4,
          }}
          className="nav-mobile-btn"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: innerHeight,
            left: 0,
            right: 0,
            background: "white",
            padding: "16px 24px 24px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            borderTop: "1px solid var(--gray-100)",
          }}
          className="nav-mobile-menu"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                color: "var(--navy)",
                borderBottom: "1px solid var(--gray-100)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              marginTop: 16,
              padding: "12px 0",
              textAlign: "center",
              borderRadius: 8,
              background: "var(--blue-700)",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Get in Touch
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

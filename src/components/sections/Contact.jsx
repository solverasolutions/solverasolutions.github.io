import { useState } from "react";
import { Icons } from "../ui/Icons";
import AnimatedSection from "../ui/AnimatedSection";

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 10,
  border: "1px solid var(--gray-200)",
  fontSize: 15,
  fontFamily: "var(--font-body)",
  color: "var(--navy)",
  background: "var(--gray-50)",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{ padding: "100px 24px", background: "var(--white)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="contact-grid"
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
              Get in Touch
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "var(--navy)",
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              Let's Build Something Reliable Together
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--gray-600)",
                marginBottom: 40,
              }}
            >
              Whether you need a web or mobile application, infrastructure
              setup, or DevOps consulting — we are ready to scope, plan, and
              deliver. Reach out and let's discuss your project.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: <Icons.Mail />, label: "hello@solverasolutions.com" },
                { icon: <Icons.Phone />, label: "+20 100 000 0000" },
                {
                  icon: <Icons.MapPin />,
                  label: "Cairo, Egypt — Available Worldwide",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: "var(--gray-50)",
                      border: "1px solid var(--gray-100)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--blue-500)",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <span style={{ fontSize: 15, color: "var(--gray-600)" }}>
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div
              style={{
                background: "var(--gray-50)",
                borderRadius: 20,
                padding: 40,
                border: "1px solid var(--gray-100)",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(33,150,243,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      color: "var(--blue-500)",
                    }}
                  >
                    <Icons.Check />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: 8,
                    }}
                  >
                    Message Received
                  </h3>
                  <p style={{ fontSize: 15, color: "var(--gray-600)" }}>
                    We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: 24,
                    }}
                  >
                    Send Us a Message
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      style={inputStyle}
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--blue-400)";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(33,150,243,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--gray-200)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      style={inputStyle}
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--blue-400)";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(33,150,243,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--gray-200)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    <select
                      style={{
                        ...inputStyle,
                        appearance: "none",
                        cursor: "pointer",
                        color: formState.service
                          ? "var(--navy)"
                          : "var(--gray-400)",
                      }}
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          service: e.target.value,
                        })
                      }
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--blue-400)";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(33,150,243,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--gray-200)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      <option value="" disabled>
                        Select a Service
                      </option>
                      <option>Web App Development</option>
                      <option>Mobile App Development</option>
                      <option>Hosting & Infrastructure</option>
                      <option>DevOps Solutions</option>
                      <option>Automation Services</option>
                      <option>Technical Consulting</option>
                      <option>Other</option>
                    </select>
                    <textarea
                      placeholder="Tell us about your project…"
                      rows={4}
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: 100,
                      }}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          message: e.target.value,
                        })
                      }
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--blue-400)";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(33,150,243,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--gray-200)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        padding: "14px 24px",
                        borderRadius: 10,
                        border: "none",
                        fontSize: 15,
                        fontWeight: 700,
                        fontFamily: "var(--font-display)",
                        background:
                          "linear-gradient(135deg, var(--blue-700) 0%, var(--blue-500) 100%)",
                        color: "white",
                        cursor: "pointer",
                        boxShadow: "0 4px 16px rgba(21,101,192,0.25)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-1px)";
                        e.target.style.boxShadow =
                          "0 6px 24px rgba(21,101,192,0.35)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow =
                          "0 4px 16px rgba(21,101,192,0.25)";
                      }}
                    >
                      Send Message
                    </button>
                  </form>
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

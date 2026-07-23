import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Contact({ showToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Fake News Detection Project Query",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill out all required fields.", "error");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormData({ name: "", email: "", subject: "Fake News Detection Project Query", message: "" });
      showToast("Thank you! Your message has been sent successfully.", "success");
    }, 800);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px", maxWidth: "800px", margin: "0 auto", width: "100%" }}>
      {/* Header */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent-cyan)", marginBottom: "8px" }}>
          <Mail size={20} />
          <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase" }}>
            Get In Touch
          </span>
        </div>
        <h1 style={{ fontSize: "2.2rem" }}>Contact Us</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
          Send a direct message or project inquiry
        </p>
      </div>

      {/* Contact Form Card */}
      <form onSubmit={handleSubmit} className="glass-card" style={{ padding: "36px", borderRadius: "20px" }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "20px" }}>Send a Direct Message</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "10px",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                outline: "none"
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="johndoe@example.com"
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "10px",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                outline: "none"
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "10px",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                outline: "none"
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>
              Message *
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              placeholder="Type your message or project inquiry here..."
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "10px",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                outline: "none"
              }}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ padding: "12px 24px", justifyContent: "center" }}>
            <Send size={18} />
            <span>{submitting ? "Sending..." : "Send Message"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

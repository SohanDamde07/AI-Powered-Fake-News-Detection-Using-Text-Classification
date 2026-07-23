import React from "react";
import { ShieldCheck, Heart, Globe, Share2, Mail, ExternalLink } from "lucide-react";
import { IICT_PROJECT_METADATA } from "../utils/pdfContent";

export default function Footer({ setActivePage }) {
  return (
    <footer
      style={{
        marginTop: "60px",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-color)",
        padding: "40px 30px 30px 30px",
        color: "var(--text-secondary)"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "30px",
          marginBottom: "30px"
        }}
      >
        {/* Col 1: Brand & Institution */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <ShieldCheck size={24} style={{ color: "var(--accent-cyan)" }} />
            <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)" }}>
              TruthLens AI
            </span>
          </div>
          <p style={{ fontSize: "0.85rem", lineHeight: "1.6", color: "var(--text-muted)" }}>
            {IICT_PROJECT_METADATA.title}
          </p>
          <div style={{ marginTop: "12px", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
            {IICT_PROJECT_METADATA.institution}
            <br />
            {IICT_PROJECT_METADATA.affiliation}
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 style={{ fontSize: "0.95rem", marginBottom: "14px", color: "var(--text-primary)" }}>
            Quick Navigation
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
            <li>
              <button onClick={() => setActivePage("home")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>
                • Home Overview
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage("detection")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>
                • News Classifier Tool
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage("analytics")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>
                • Analytics & Benchmark Charts
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage("workflow")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>
                • Workflow & Python Code
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage("about")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>
                • Technical Specifications
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: ML Algorithms */}
        <div>
          <h4 style={{ fontSize: "0.95rem", marginBottom: "14px", color: "var(--text-primary)" }}>
            Models Implemented
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", color: "var(--text-muted)" }}>
            <li>• Logistic Regression (Parametric)</li>
            <li>• K-Nearest Neighbors (Non-Parametric)</li>
            <li>• Random Forest (Ensemble)</li>
            <li>• Neural Network (MLPClassifier Deep Learning)</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "20px",
          borderTop: "1px solid var(--border-color)",
          display: "flex",
          justify: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "14px",
          fontSize: "0.82rem",
          color: "var(--text-muted)"
        }}
      >
        <div>
          © 2026 {IICT_PROJECT_METADATA.institution}. All Rights Reserved.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          Developed with <Heart size={14} style={{ color: "#ef4444" }} /> for AI & ML Text Analytics
        </div>
      </div>
    </footer>
  );
}

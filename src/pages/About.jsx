import React from "react";
import {
  BookOpen,
  FileText,
  Cpu,
  Layers,
  Award
} from "lucide-react";
import {
  PROBLEM_STATEMENT,
  ALGORITHM_DETAILS
} from "../utils/pdfContent";

export default function About() {

  const technologies = [
    { name: "Python", category: "Core Language", version: "3.10+" },
    { name: "Pandas", category: "Data Wrangling", version: "2.1.0" },
    { name: "NumPy", category: "Array Processing", version: "1.25.0" },
    { name: "Scikit-Learn", category: "ML Algorithms & TF-IDF", version: "1.3.0" },
    { name: "NLTK / re", category: "Text Tokenization & Regex", version: "Standard" },
    { name: "Matplotlib & Seaborn", category: "Visualization", version: "3.7.0" }
  ];



  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {/* Page Header */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent-cyan)", marginBottom: "8px" }}>
          <BookOpen size={20} />
          <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase" }}>
            Project Overview
          </span>
        </div>
        <h1 style={{ fontSize: "2.2rem" }}>About The Project & Technical Specifications</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
          Detailed technical documentation and machine learning pipeline specifications
        </p>
      </div>

      {/* Problem Statement & Context */}
      <section className="glass-card" style={{ padding: "30px", borderRadius: "20px" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
          <FileText style={{ color: "var(--accent-cyan)" }} size={22} />
          Problem Statement
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "20px" }}>
          {PROBLEM_STATEMENT.summary}
        </p>

        <h3 style={{ fontSize: "1.05rem", marginBottom: "12px", color: "var(--text-primary)" }}>
          Primary Data Sources Specified:
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
          {PROBLEM_STATEMENT.dataSources.map((ds, i) => (
            <div
              key={i}
              style={{
                padding: "14px",
                borderRadius: "12px",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-color)"
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--accent-cyan)" }}>
                {ds.name}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "4px" }}>
                Source: {ds.source} ({ds.file || ds.dataset || ds.usage})
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Used Grid */}
      <section>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
          <Cpu style={{ color: "var(--accent-purple)" }} size={22} />
          Technologies & Machine Learning Libraries Used
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          {technologies.map((tech, idx) => (
            <div key={idx} className="glass-card" style={{ padding: "18px" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                {tech.name}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--accent-purple)", fontWeight: 600 }}>
                {tech.category}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                Version: {tech.version}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Algorithms Deep Dive */}
      <section>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
          <Layers style={{ color: "var(--accent-emerald)" }} size={22} />
          Implemented Machine Learning Algorithms
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {ALGORITHM_DETAILS.map((alg) => (
            <div key={alg.short} className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "12px",
                    background: "rgba(56, 189, 248, 0.15)",
                    color: "var(--accent-cyan)"
                  }}
                >
                  {alg.type}
                </span>
                <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--accent-emerald)" }}>
                  {alg.accuracy}% Accuracy
                </span>
              </div>

              <h3 style={{ fontSize: "1.15rem" }}>{alg.name}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                {alg.description}
              </p>

              <div
                style={{
                  fontSize: "0.78rem",
                  fontFamily: "Fira Code, monospace",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  background: "var(--bg-primary)",
                  color: "var(--accent-purple)",
                  overflowX: "auto"
                }}
              >
                {alg.config}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

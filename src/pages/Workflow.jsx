import React, { useState } from "react";
import { GitBranch, Code2, ArrowDown } from "lucide-react";
import CodeViewer from "../components/CodeViewer";
import { WORKFLOW_STAGES, PYTHON_CODE_SKELETON } from "../utils/pdfContent";

export default function Workflow() {
  const [activeTab, setActiveTab] = useState("timeline");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {/* Header */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent-cyan)", marginBottom: "8px" }}>
          <GitBranch size={20} />
          <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase" }}>
            ML Pipeline & Development Roadmap
          </span>
        </div>
        <h1 style={{ fontSize: "2.2rem" }}>Workflow & Code Implementation</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
          Complete 9-stage processing pipeline and Python Machine Learning code skeleton
        </p>
      </div>

      {/* Navigation Tabs */}
      <div style={{ display: "flex", gap: "12px", borderBottom: "1px solid var(--border-color)", paddingBottom: "12px" }}>
        <button
          onClick={() => setActiveTab("timeline")}
          className="btn-secondary"
          style={{
            background: activeTab === "timeline" ? "var(--accent-cyan)" : "var(--bg-tertiary)",
            color: activeTab === "timeline" ? "#ffffff" : "var(--text-secondary)",
            borderColor: activeTab === "timeline" ? "var(--accent-cyan)" : "var(--border-color)",
            padding: "10px 20px"
          }}
        >
          <GitBranch size={16} />
          <span>9-Step ML Pipeline</span>
        </button>

        <button
          onClick={() => setActiveTab("code")}
          className="btn-secondary"
          style={{
            background: activeTab === "code" ? "var(--accent-cyan)" : "var(--bg-tertiary)",
            color: activeTab === "code" ? "#ffffff" : "var(--text-secondary)",
            borderColor: activeTab === "code" ? "var(--accent-cyan)" : "var(--border-color)",
            padding: "10px 20px"
          }}
        >
          <Code2 size={16} />
          <span>Python Code Skeleton</span>
        </button>
      </div>

      {/* Tab 1: 9-Step ML Pipeline */}
      {activeTab === "timeline" && (
        <section className="glass-card" style={{ padding: "36px", borderRadius: "24px" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "24px", textAlign: "center" }}>
            End-to-End Fake News Detection Pipeline
          </h2>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", maxWidth: "680px", margin: "0 auto" }}>
            {WORKFLOW_STAGES.map((stage, idx) => (
              <React.Fragment key={stage.step}>
                <div
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    borderRadius: "16px",
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-indigo))",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.9rem",
                        flexShrink: 0
                      }}
                    >
                      {stage.step}
                    </div>
                    <div>
                      <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                        {stage.title}
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                        {stage.desc}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: "12px",
                      background: "rgba(56, 189, 248, 0.15)",
                      color: "var(--accent-cyan)",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {stage.week}
                  </span>
                </div>

                {idx < WORKFLOW_STAGES.length - 1 && (
                  <ArrowDown size={20} style={{ color: "var(--accent-cyan)", opacity: 0.7 }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
      )}

      {/* Tab 2: Python Code Skeleton */}
      {activeTab === "code" && (
        <section>
          <CodeViewer code={PYTHON_CODE_SKELETON} title="Python Code Skeleton (Machine Learning Pipeline)" />
        </section>
      )}
    </div>
  );
}

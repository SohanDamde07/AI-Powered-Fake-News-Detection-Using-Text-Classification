import React, { useState } from "react";
import { Copy, Check, Code2 } from "lucide-react";

export default function CodeViewer({ code, title = "Python ML Implementation Skeleton" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split("\n");

  return (
    <div className="glass-card" style={{ overflow: "hidden", marginTop: "20px" }}>
      {/* Header Bar */}
      <div
        style={{
          display: "flex",
          justify: "space-between",
          alignItems: "center",
          padding: "12px 20px",
          background: "var(--bg-tertiary)",
          borderBottom: "1px solid var(--border-color)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Code2 size={18} style={{ color: "var(--accent-cyan)" }} />
          <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>
            {title}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="btn-secondary"
          style={{ padding: "6px 14px", fontSize: "0.82rem" }}
        >
          {copied ? (
            <>
              <Check size={14} style={{ color: "var(--accent-emerald)" }} /> Copied!
            </>
          ) : (
            <>
              <Copy size={14} /> Copy Code
            </>
          )}
        </button>
      </div>

      {/* Code Container */}
      <div
        style={{
          padding: "18px",
          background: "var(--bg-primary)",
          overflowX: "auto",
          maxHeight: "520px"
        }}
      >
        <pre style={{ margin: 0, fontSize: "0.85rem", lineHeight: "1.6" }}>
          {lines.map((line, i) => (
            <div key={i} style={{ display: "flex", gap: "16px" }}>
              <span
                style={{
                  width: "30px",
                  textAlign: "right",
                  color: "var(--text-muted)",
                  userSelect: "none",
                  flexShrink: 0
                }}
              >
                {i + 1}
              </span>
              <span
                style={{
                  color: line.trim().startsWith("#")
                    ? "var(--accent-emerald)"
                    : line.includes("import ") || line.includes("from ") || line.includes("def ") || line.includes("return ") || line.includes("for ") || line.includes("in ")
                    ? "var(--accent-purple)"
                    : line.includes("'") || line.includes('"')
                    ? "var(--accent-amber)"
                    : "var(--text-primary)"
                }}
              >
                {line}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

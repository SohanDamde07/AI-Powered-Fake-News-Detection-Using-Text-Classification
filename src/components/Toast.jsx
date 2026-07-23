import React from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const { type = "info", message } = toast;

  const icons = {
    success: <CheckCircle2 style={{ color: "#10b981", flexShrink: 0 }} size={20} />,
    error: <AlertCircle style={{ color: "#ef4444", flexShrink: 0 }} size={20} />,
    info: <Info style={{ color: "#38bdf8", flexShrink: 0 }} size={20} />
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 20px",
        borderRadius: "12px",
        background: "var(--bg-glass-panel, rgba(15, 23, 42, 0.9))",
        backdropFilter: "blur(16px)",
        border: "1px solid var(--border-color)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
        color: "var(--text-primary)",
        maxWidth: "400px",
        animation: "float 0.3s ease-out"
      }}
    >
      {icons[type] || icons.info}
      <span style={{ fontSize: "0.9rem", fontWeight: 500, flex: 1 }}>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          color: "var(--text-muted)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: "2px"
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
}

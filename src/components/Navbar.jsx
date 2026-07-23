import React from "react";
import { ShieldCheck, Moon, Sun, Menu, Sparkles } from "lucide-react";

export default function Navbar({ theme, toggleTheme, activePage, setActivePage, isMobileOpen, setIsMobileOpen }) {
  return (
    <header
      style={{
        height: "var(--topbar-height)",
        position: "sticky",
        top: 0,
        zIndex: 900,
        background: "var(--bg-glass)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border-color)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
      }}
    >
      {/* Brand & Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer"
          }}
          className="mobile-menu-btn"
        >
          <Menu size={24} />
        </button>

        <div
          onClick={() => setActivePage("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer"
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 15px var(--accent-cyan-glow)"
            }}
          >
            <ShieldCheck size={24} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: "1.15rem", fontWeight: "800", lineHeight: "1.1" }}>
              Truth<span className="gradient-text">Lens AI</span>
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: "600" }}>
              Fake News Classifier • ML Platform
            </div>
          </div>
        </div>
      </div>

      {/* Center AI Badge */}
      <div
        className="glass-card"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 14px",
          borderRadius: "20px",
          fontSize: "0.82rem",
          fontWeight: "600",
          color: "var(--accent-cyan)",
          background: "var(--bg-glass-card)"
        }}
      >
        <Sparkles size={15} className="animate-spin-slow" />
        <span>ML Pipeline v2026.1</span>
      </div>

      {/* Right Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <button
          onClick={() => setActivePage("detection")}
          className="btn-primary"
          style={{ padding: "8px 18px", fontSize: "0.85rem", borderRadius: "10px" }}
        >
          <span>Detect News</span>
        </button>

        {/* Dark/Light Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            background: "var(--bg-tertiary)",
            border: "1px solid var(--border-color)",
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {theme === "dark" ? (
            <Sun size={20} style={{ color: "#f59e0b" }} />
          ) : (
            <Moon size={20} style={{ color: "#8b5cf6" }} />
          )}
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

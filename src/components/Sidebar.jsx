import React from "react";
import {
  Home,
  BookOpen,
  SearchCode,
  BarChart3,
  GitBranch,
  ChevronRight,
  Sparkles,
  Award
} from "lucide-react";

export default function Sidebar({ activePage, setActivePage, isMobileOpen, setIsMobileOpen }) {
  const navItems = [
    { id: "home", label: "Home Overview", icon: Home },
    { id: "about", label: "About & Technical Specs", icon: BookOpen },
    { id: "detection", label: "News Classifier", icon: SearchCode },
    { id: "analytics", label: "Analytics Dashboard", icon: BarChart3 },
    { id: "workflow", label: "Workflow & Code", icon: GitBranch }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            zIndex: 950
          }}
        />
      )}

      <aside
        style={{
          width: "var(--sidebar-width)",
          position: "fixed",
          top: "var(--topbar-height)",
          bottom: 0,
          left: 0,
          zIndex: 960,
          background: "var(--bg-glass)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRight: "1px solid var(--border-color)",
          padding: "24px 16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isMobileOpen ? "translateX(0)" : undefined
        }}
        className={`sidebar-aside ${isMobileOpen ? "mobile-open" : ""}`}
      >
        {/* Navigation List */}
        <div>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              paddingLeft: "12px",
              marginBottom: "14px"
            }}
          >
            Navigation Hub
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsMobileOpen(false);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: isActive ? "1px solid var(--border-glow)" : "1px solid transparent",
                    background: isActive
                      ? "linear-gradient(90deg, var(--bg-glass-hover), rgba(56, 189, 248, 0.1))"
                      : "transparent",
                    color: isActive ? "var(--accent-cyan)" : "var(--text-secondary)",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Icon
                      size={18}
                      style={{
                        color: isActive ? "var(--accent-cyan)" : "var(--text-muted)"
                      }}
                    />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <ChevronRight size={16} style={{ color: "var(--accent-cyan)" }} />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Info Card */}
        <div
          className="glass-card"
          style={{
            padding: "16px",
            borderRadius: "14px",
            background: "linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(139, 92, 246, 0.1))"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <Award size={18} style={{ color: "var(--accent-cyan)" }} />
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-primary)" }}>
              Fake News Detection v2026
            </span>
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
            Built from scratch with React & Machine Learning.
          </p>
        </div>
      </aside>

      <style>{`
        @media (max-width: 768px) {
          .sidebar-aside {
            transform: translateX(-100%);
          }
          .sidebar-aside.mobile-open {
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </>
  );
}

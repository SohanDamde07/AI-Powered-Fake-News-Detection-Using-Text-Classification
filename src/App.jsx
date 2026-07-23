import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

import Home from "./pages/Home";
import About from "./pages/About";
import Detection from "./pages/Detection";
import Analytics from "./pages/Analytics";
import Workflow from "./pages/Workflow";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [activePage, setActivePage] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [preloadedArticle, setPreloadedArticle] = useState("");

  // Sync theme with HTML data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    showToast(`Switched to ${nextTheme === "dark" ? "Dark Cyber" : "Light Studio"} theme`, "info");
  };

  const showToast = (message, type = "info") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top Header Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activePage={activePage}
        setActivePage={setActivePage}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Main Body with Sidebar + Content */}
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />

        {/* Content View Area */}
        <main
          style={{
            flex: 1,
            marginLeft: "var(--sidebar-width)",
            padding: "36px 32px",
            maxWidth: "1280px",
            width: "100%",
            transition: "margin-left 0.3s ease"
          }}
          className="main-content-container"
        >
          {activePage === "home" && (
            <Home setActivePage={setActivePage} setPreloadedArticle={setPreloadedArticle} />
          )}

          {activePage === "about" && (
            <About showToast={showToast} />
          )}

          {activePage === "detection" && (
            <Detection
              preloadedArticle={preloadedArticle}
              setPreloadedArticle={setPreloadedArticle}
              showToast={showToast}
            />
          )}

          {activePage === "analytics" && (
            <Analytics theme={theme} />
          )}

          {activePage === "workflow" && (
            <Workflow />
          )}
        </main>
      </div>

      {/* Footer */}
      <div style={{ marginLeft: "var(--sidebar-width)" }} className="footer-margin-wrapper">
        <Footer setActivePage={setActivePage} />
      </div>

      {/* Floating Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      <style>{`
        @media (max-width: 768px) {
          .main-content-container {
            margin-left: 0 !important;
            padding: 20px 16px !important;
          }
          .footer-margin-wrapper {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

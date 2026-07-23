import React from "react";
import {
  ShieldCheck,
  Brain,
  Cpu,
  Sparkles,
  Zap,
  Target,
  BarChart,
  CheckCircle,
  ArrowRight,
  Database,
  Layers,
  Award
} from "lucide-react";
import { SAMPLE_ARTICLES } from "../utils/sampleData";

export default function Home({ setActivePage, setPreloadedArticle }) {
  const stats = [
    { label: "Top Model Accuracy", value: "98.1%", desc: "Neural Network MLP", color: "var(--accent-cyan)", icon: Target },
    { label: "Precision Score", value: "97.9%", desc: "Low False Positive Rate", color: "var(--accent-purple)", icon: Zap },
    { label: "Recall Rate", value: "98.2%", desc: "High Sensitivity", color: "var(--accent-emerald)", icon: CheckCircle },
    { label: "F1 Score Metric", value: "98.0%", desc: "Harmonic Mean", color: "var(--accent-amber)", icon: BarChart }
  ];

  const features = [
    {
      title: "AI Misinformation Automation",
      desc: "Automatically detects deceptive patterns, sensationalized clickbait, and unverified news claims across digital media.",
      icon: Brain,
      color: "#38bdf8"
    },
    {
      title: "ML Pattern Recognition",
      desc: "Learns statistical term distributions and word frequencies to classify articles into Real and Fake categories.",
      icon: Cpu,
      color: "#8b5cf6"
    },
    {
      title: "NLP & TF-IDF Extraction",
      desc: "Cleans text via regex punctuation removal, stopwords filtering, and TfidfVectorizer max_features=5000 extraction.",
      icon: Layers,
      color: "#10b981"
    },
    {
      title: "4-Algorithm Pipeline",
      desc: "Evaluates Logistic Regression (Parametric), KNN (Non-Parametric), Random Forest (Ensemble), and Neural Network (MLP).",
      icon: Database,
      color: "#f59e0b"
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          padding: "60px 20px 40px 20px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* Pill Badge */}
        <div
          className="glass-card animate-float"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 18px",
            borderRadius: "30px",
            fontSize: "0.85rem",
            fontWeight: "700",
            marginBottom: "24px",
            border: "1px solid var(--border-glow)",
            color: "var(--accent-cyan)"
          }}
        >
          <Award size={16} />
          <span>Fake News Detection System • AI & ML Platform</span>
        </div>

        {/* Hero Title */}
        <h1
          style={{
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: "800",
            lineHeight: "1.15",
            maxWidth: "900px",
            marginBottom: "20px"
          }}
        >
          AI-Powered <span className="gradient-text">Fake News Detection</span> Using Text Classification
        </h1>

        {/* Project Description */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--text-secondary)",
            maxWidth: "750px",
            marginBottom: "32px",
            lineHeight: "1.6"
          }}
        >
          An end-to-end Machine Learning & Natural Language Processing pipeline built from scratch to detect misinformation with 98.1% accuracy using Logistic Regression, KNN, Random Forest, and MLP Neural Networks.
        </p>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => setActivePage("detection")}
            className="btn-primary"
            style={{ padding: "14px 32px", fontSize: "1rem" }}
          >
            <span>Detect News Now</span>
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => setActivePage("workflow")}
            className="btn-secondary"
            style={{ padding: "14px 28px", fontSize: "1rem" }}
          >
            <span>Explore 30-Day Workflow</span>
          </button>
        </div>

        {/* AI Graphic Visualizer / Particle Node Box */}
        <div
          className="glass-card"
          style={{
            marginTop: "50px",
            width: "100%",
            maxWidth: "850px",
            padding: "24px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, rgba(15,23,42,0.8), rgba(30,41,59,0.9))",
            border: "1px solid var(--border-glow)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.4)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" }} />
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "Fira Code, monospace" }}>
              TfidfVectorizer(max_features=5000) • MLPClassifier(hidden_layer_sizes=(100,))
            </div>
          </div>

          <div
            style={{
              padding: "24px",
              borderRadius: "16px",
              background: "var(--bg-primary)",
              textAlign: "left",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px"
            }}
          >
            <div style={{ borderLeft: "3px solid var(--accent-cyan)", paddingLeft: "14px" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>INPUT TEXT</div>
              <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)" }}>Raw News Corpus</div>
              <div style={{ fontSize: "0.78rem", color: "var(--accent-cyan)" }}>Regex Preprocessed</div>
            </div>
            <div style={{ borderLeft: "3px solid var(--accent-purple)", paddingLeft: "14px" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>NLP VECTORIZER</div>
              <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)" }}>Bag-of-Words & TF-IDF</div>
              <div style={{ fontSize: "0.78rem", color: "var(--accent-purple)" }}>5,000 Dimensions</div>
            </div>
            <div style={{ borderLeft: "3px solid var(--accent-emerald)", paddingLeft: "14px" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>CLASSIFICATION</div>
              <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)" }}>Real vs Fake News</div>
              <div style={{ fontSize: "0.78rem", color: "var(--accent-emerald)" }}>Confidence Score %</div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Cards */}
      <section>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "1.8rem" }}>Evaluation Benchmark Metrics</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Model test evaluation executed on 4,160 unseen news articles (80:20 train-test split)
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
          }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "10px"
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: `rgba(255,255,255,0.05)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: stat.color
                  }}
                >
                  <Icon size={22} />
                </div>
                <div style={{ fontSize: "2.2rem", fontWeight: "800", color: stat.color }}>
                  {stat.value}
                </div>
                <div>
                  <div style={{ fontWeight: "700", fontSize: "0.95rem" }}>{stat.label}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{stat.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Cards Section */}
      <section style={{ marginTop: "20px" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h2 style={{ fontSize: "1.8rem" }}>Core AI & Machine Learning Architecture</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Key components implemented for text classification and misinformation detection
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px"
          }}
        >
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: `rgba(255,255,255,0.05)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: feat.color,
                    border: `1px solid ${feat.color}33`
                  }}
                >
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: "1.15rem" }}>{feat.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Test Samples Launcher */}
      <section
        className="glass-card"
        style={{
          padding: "36px",
          borderRadius: "24px",
          background: "linear-gradient(135deg, rgba(56, 189, 248, 0.08), rgba(139, 92, 246, 0.08))"
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.6rem" }}>One-Click Article Classifier Test</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Select a sample news article to instantly load into the detector engine
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px"
          }}
        >
          {SAMPLE_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => {
                setPreloadedArticle(article.text);
                setActivePage("detection");
              }}
              className="glass-card"
              style={{
                padding: "20px",
                cursor: "pointer",
                border: "1px solid var(--border-color)",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "12px",
                    background: article.expectedPrediction === "Fake News" ? "rgba(239, 68, 68, 0.2)" : "rgba(16, 185, 129, 0.2)",
                    color: article.expectedPrediction === "Fake News" ? "#ef4444" : "#10b981"
                  }}
                >
                  {article.category}
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  {article.expectedPrediction}
                </span>
              </div>
              <h4 style={{ fontSize: "0.95rem", lineHeight: "1.4", marginBottom: "8px" }}>
                {article.title}
              </h4>
              <div style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", display: "flex", alignItems: "center", gap: "4px" }}>
                <span>Test this sample</span>
                <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { BarChart3, PieChart, Activity, Layers, Award } from "lucide-react";
import DatasetPieChart from "../components/Charts/DatasetPieChart";
import ModelBarChart from "../components/Charts/ModelBarChart";
import ConfusionMatrix from "../components/Charts/ConfusionMatrix";
import FeatureImportanceChart from "../components/Charts/FeatureImportanceChart";
import RocCurveChart from "../components/Charts/RocCurveChart";
import { DATASET_STATS } from "../utils/sampleData";

export default function Analytics({ theme }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {/* Header */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent-cyan)", marginBottom: "8px" }}>
          <BarChart3 size={20} />
          <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase" }}>
            Model Evaluation & Analytics
          </span>
        </div>
        <h1 style={{ fontSize: "2.2rem" }}>Analytics Dashboard</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
          Exploratory Data Analysis, Confusion Matrices, Feature Weights & ROC Curves
        </p>
      </div>

      {/* Dataset Overview Stat Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "18px" }}>
        <div className="glass-card" style={{ padding: "20px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
            Total Corpus Articles
          </div>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent-cyan)", marginTop: "4px" }}>
            {DATASET_STATS.totalArticles.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
            Kaggle train.csv + UCI Repo
          </div>
        </div>

        <div className="glass-card" style={{ padding: "20px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
            Fake News Articles
          </div>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ef4444", marginTop: "4px" }}>
            {DATASET_STATS.fakeCount.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
            50.06% of Dataset
          </div>
        </div>

        <div className="glass-card" style={{ padding: "20px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
            Real News Articles
          </div>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#10b981", marginTop: "4px" }}>
            {DATASET_STATS.realCount.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
            49.94% of Dataset
          </div>
        </div>

        <div className="glass-card" style={{ padding: "20px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
            TF-IDF Vocabulary Size
          </div>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent-purple)", marginTop: "4px" }}>
            {DATASET_STATS.vocabFeatures.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
            max_features=5000
          </div>
        </div>
      </div>

      {/* Grid 1: Pie Chart & Model Bar Comparison */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "24px" }}>
        <div className="glass-card" style={{ padding: "24px" }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <PieChart size={18} style={{ color: "var(--accent-cyan)" }} />
            Dataset Balance (Fake vs Real)
          </h3>
          <DatasetPieChart theme={theme} />
        </div>

        <div className="glass-card" style={{ padding: "24px" }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <BarChart3 size={18} style={{ color: "var(--accent-purple)" }} />
            4-Model Evaluation Metrics Comparison
          </h3>
          <ModelBarChart theme={theme} />
        </div>
      </div>

      {/* Grid 2: Confusion Matrix & ROC Curves */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "24px" }}>
        <div className="glass-card" style={{ padding: "24px" }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Layers size={18} style={{ color: "var(--accent-emerald)" }} />
            Interactive Confusion Matrix
          </h3>
          <ConfusionMatrix />
        </div>

        <div className="glass-card" style={{ padding: "24px" }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Activity size={18} style={{ color: "var(--accent-amber)" }} />
            Receiver Operating Characteristic (ROC) Curve
          </h3>
          <RocCurveChart theme={theme} />
        </div>
      </div>

      {/* Feature Importance Bar Graph */}
      <div className="glass-card" style={{ padding: "28px" }}>
        <h3 style={{ fontSize: "1.1rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <Award size={18} style={{ color: "var(--accent-cyan)" }} />
          TF-IDF Top Feature Importance & Word Weights
        </h3>
        <FeatureImportanceChart theme={theme} />
      </div>

      {/* Parametric vs Non-Parametric Discussion */}
      <div className="glass-card" style={{ padding: "28px", borderRadius: "20px" }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "12px", color: "var(--accent-cyan)" }}>
          Parametric vs. Non-Parametric Performance Analysis
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "16px" }}>
          <div style={{ padding: "18px", borderRadius: "14px", background: "var(--bg-primary)", border: "1px solid var(--border-color)" }}>
            <h4 style={{ fontSize: "1rem", color: "var(--accent-cyan)", marginBottom: "8px" }}>
              Parametric Model: Logistic Regression
            </h4>
            <p style={{ fontSize: "0.85rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
              Assumes a linear boundary in the 5,000-dimensional TF-IDF space. Achieved 97.4% accuracy with extremely fast convergence time (&lt;2 seconds training). Highly effective for sparse text vector spaces.
            </p>
          </div>

          <div style={{ padding: "18px", borderRadius: "14px", background: "var(--bg-primary)", border: "1px solid var(--border-color)" }}>
            <h4 style={{ fontSize: "1rem", color: "var(--accent-amber)", marginBottom: "8px" }}>
              Non-Parametric Model: K-Nearest Neighbors (k=5)
            </h4>
            <p style={{ fontSize: "0.85rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
              Makes zero structural assumptions on data distribution. However, KNN suffered from the "curse of dimensionality" in 5000D TF-IDF space, resulting in lower test accuracy (91.2%) and slower distance query evaluation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

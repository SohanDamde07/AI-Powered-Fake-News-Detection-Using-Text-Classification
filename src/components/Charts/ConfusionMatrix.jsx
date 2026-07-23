import React, { useState } from "react";
import { CONFUSION_MATRICES } from "../../utils/sampleData";

export default function ConfusionMatrix() {
  const [selectedModel, setSelectedModel] = useState("NeuralNet");

  const matrix = CONFUSION_MATRICES[selectedModel] || CONFUSION_MATRICES.NeuralNet;
  const total = matrix.trueReal + matrix.falseFake + matrix.falseReal + matrix.trueFake;

  const modelLabels = {
    LogReg: "Logistic Regression",
    KNN: "K-Nearest Neighbors",
    RandomForest: "Random Forest",
    NeuralNet: "Neural Network (MLP)"
  };

  return (
    <div style={{ padding: "10px" }}>
      {/* Model Selector Pill buttons */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "20px",
          flexWrap: "wrap"
        }}
      >
        {Object.keys(modelLabels).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedModel(key)}
            className="btn-secondary"
            style={{
              padding: "6px 14px",
              fontSize: "0.82rem",
              borderRadius: "20px",
              background: selectedModel === key ? "var(--accent-cyan)" : "var(--bg-tertiary)",
              color: selectedModel === key ? "#ffffff" : "var(--text-secondary)",
              borderColor: selectedModel === key ? "var(--accent-cyan)" : "var(--border-color)"
            }}
          >
            {modelLabels[key]}
          </button>
        ))}
      </div>

      {/* 2x2 Confusion Matrix Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "100px 1fr 1fr",
          gap: "10px",
          textAlign: "center",
          maxWidth: "480px",
          margin: "0 auto"
        }}
      >
        <div />
        <div style={{ fontWeight: "700", fontSize: "0.85rem", color: "var(--accent-emerald)" }}>
          Predicted Real
        </div>
        <div style={{ fontWeight: "700", fontSize: "0.85rem", color: "var(--accent-crimson)" }}>
          Predicted Fake
        </div>

        <div
          style={{
            fontWeight: "700",
            fontSize: "0.85rem",
            color: "var(--accent-emerald)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Actual Real
        </div>
        {/* True Real (TN) */}
        <div
          style={{
            padding: "20px 10px",
            background: "rgba(16, 185, 129, 0.15)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            borderRadius: "12px"
          }}
        >
          <div style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--accent-emerald)" }}>
            {matrix.trueReal.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
            True Negative (TN)
          </div>
        </div>

        {/* False Fake (FP) */}
        <div
          style={{
            padding: "20px 10px",
            background: "rgba(239, 68, 68, 0.08)",
            border: "1px solid rgba(239, 68, 68, 0.2)",
            borderRadius: "12px"
          }}
        >
          <div style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--accent-crimson)" }}>
            {matrix.falseFake.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
            False Positive (FP)
          </div>
        </div>

        <div
          style={{
            fontWeight: "700",
            fontSize: "0.85rem",
            color: "var(--accent-crimson)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Actual Fake
        </div>
        {/* False Real (FN) */}
        <div
          style={{
            padding: "20px 10px",
            background: "rgba(239, 68, 68, 0.08)",
            border: "1px solid rgba(239, 68, 68, 0.2)",
            borderRadius: "12px"
          }}
        >
          <div style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--accent-crimson)" }}>
            {matrix.falseReal.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
            False Negative (FN)
          </div>
        </div>

        {/* True Fake (TP) */}
        <div
          style={{
            padding: "20px 10px",
            background: "rgba(16, 185, 129, 0.15)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            borderRadius: "12px"
          }}
        >
          <div style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--accent-emerald)" }}>
            {matrix.trueFake.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
            True Positive (TP)
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "16px",
          textAlign: "center",
          fontSize: "0.82rem",
          color: "var(--text-muted)"
        }}
      >
        Evaluated on {total.toLocaleString()} test articles (80:20 split, random_state=42).
      </div>
    </div>
  );
}

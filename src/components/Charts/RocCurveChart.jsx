import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ROC_CURVE_DATA } from "../../utils/sampleData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function RocCurveChart({ theme = "dark" }) {
  const isDark = theme === "dark";

  const data = {
    labels: ROC_CURVE_DATA.fpr,
    datasets: [
      {
        label: "Neural Network (AUC = 0.995)",
        data: ROC_CURVE_DATA.tpr.NeuralNet,
        borderColor: "#8b5cf6",
        backgroundColor: "rgba(139, 92, 246, 0.1)",
        tension: 0.3,
        pointRadius: 3
      },
      {
        label: "Logistic Regression (AUC = 0.991)",
        data: ROC_CURVE_DATA.tpr.LogReg,
        borderColor: "#38bdf8",
        backgroundColor: "rgba(56, 189, 248, 0.1)",
        tension: 0.3,
        pointRadius: 3
      },
      {
        label: "Random Forest (AUC = 0.988)",
        data: ROC_CURVE_DATA.tpr.RandomForest,
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.3,
        pointRadius: 3
      },
      {
        label: "KNN (k=5) (AUC = 0.952)",
        data: ROC_CURVE_DATA.tpr.KNN,
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        tension: 0.3,
        pointRadius: 3
      },
      {
        label: "Random Classifier (Baseline)",
        data: ROC_CURVE_DATA.fpr,
        borderColor: isDark ? "#64748b" : "#94a3b8",
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: isDark ? "#f8fafc" : "#0f172a",
          font: { family: "Outfit", size: 11, weight: "600" }
        }
      }
    },
    scales: {
      x: {
        title: { display: true, text: "False Positive Rate (FPR)", color: isDark ? "#94a3b8" : "#475569" },
        grid: { color: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)" },
        ticks: { color: isDark ? "#94a3b8" : "#475569" }
      },
      y: {
        title: { display: true, text: "True Positive Rate (TPR / Sensitivity)", color: isDark ? "#94a3b8" : "#475569" },
        grid: { color: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)" },
        ticks: { color: isDark ? "#94a3b8" : "#475569" }
      }
    }
  };

  return (
    <div style={{ height: "340px", padding: "10px" }}>
      <Line data={data} options={options} />
    </div>
  );
}

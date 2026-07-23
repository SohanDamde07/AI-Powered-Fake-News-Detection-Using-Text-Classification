import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DATASET_STATS } from "../../utils/sampleData";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DatasetPieChart({ theme = "dark" }) {
  const isDark = theme === "dark";

  const data = {
    labels: ["Fake News Articles", "Real News Articles"],
    datasets: [
      {
        data: [DATASET_STATS.fakeCount, DATASET_STATS.realCount],
        backgroundColor: [
          "rgba(239, 68, 68, 0.85)", // Crimson Red for Fake
          "rgba(16, 185, 129, 0.85)"  // Emerald Green for Real
        ],
        borderColor: [
          "rgba(239, 68, 68, 1)",
          "rgba(16, 185, 129, 1)"
        ],
        borderWidth: 2,
        hoverOffset: 8
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
          font: { family: "Outfit", size: 13, weight: "600" },
          padding: 20
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const count = context.raw;
            const percentage = ((count / DATASET_STATS.totalArticles) * 100).toFixed(1);
            return `${context.label}: ${count.toLocaleString()} articles (${percentage}%)`;
          }
        }
      }
    },
    cutout: "68%"
  };

  return (
    <div style={{ height: "300px", position: "relative", padding: "10px" }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          pointerEvents: "none"
        }}
      >
        <span style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--accent-cyan)" }}>
          {DATASET_STATS.totalArticles.toLocaleString()}
        </span>
        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
          Total Articles
        </div>
      </div>
    </div>
  );
}

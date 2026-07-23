import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { FEATURE_IMPORTANCE_WORDS } from "../../utils/sampleData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function FeatureImportanceChart({ theme = "dark" }) {
  const isDark = theme === "dark";

  const data = {
    labels: FEATURE_IMPORTANCE_WORDS.map(item => item.word),
    datasets: [
      {
        label: "TF-IDF Weight Impact (Positive: Fake News, Negative: Real News)",
        data: FEATURE_IMPORTANCE_WORDS.map(item => item.weight),
        backgroundColor: FEATURE_IMPORTANCE_WORDS.map(item =>
          item.weight > 0 ? "rgba(239, 68, 68, 0.85)" : "rgba(16, 185, 129, 0.85)"
        ),
        borderRadius: 6
      }
    ]
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            const val = context.raw;
            return `Impact: ${val > 0 ? "+" + val : val} (${val > 0 ? "Fake Signal" : "Real Signal"})`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: { color: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)" },
        ticks: { color: isDark ? "#94a3b8" : "#475569" }
      },
      y: {
        grid: { display: false },
        ticks: { color: isDark ? "#f8fafc" : "#0f172a", font: { family: "Outfit", size: 12, weight: "600" } }
      }
    }
  };

  return (
    <div style={{ height: "360px", padding: "10px" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

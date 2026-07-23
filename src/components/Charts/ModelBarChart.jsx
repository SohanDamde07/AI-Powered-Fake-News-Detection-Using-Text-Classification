import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { MODEL_COMPARISON_DATA } from "../../utils/sampleData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ModelBarChart({ theme = "dark" }) {
  const isDark = theme === "dark";

  const datasets = MODEL_COMPARISON_DATA.models.map(m => ({
    label: m.name,
    data: m.values,
    backgroundColor: m.color,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)"
  }));

  const data = {
    labels: MODEL_COMPARISON_DATA.labels,
    datasets
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: isDark ? "#f8fafc" : "#0f172a",
          font: { family: "Outfit", size: 12, weight: "600" }
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}%`
        }
      }
    },
    scales: {
      x: {
        grid: { color: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)" },
        ticks: { color: isDark ? "#94a3b8" : "#475569", font: { family: "Plus Jakarta Sans", size: 12 } }
      },
      y: {
        min: 80,
        max: 100,
        grid: { color: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)" },
        ticks: { color: isDark ? "#94a3b8" : "#475569", callback: (val) => val + "%" }
      }
    }
  };

  return (
    <div style={{ height: "340px", padding: "10px" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

# 🛡️ TruthLens AI - Fake News Detection System

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-4.5-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

An **AI-Powered Fake News Detection Web Application** built with React, Vite, and Machine Learning algorithms. TruthLens AI provides real-time news article classification, text pre-processing analysis, interactive model comparison benchmarks, and end-to-end NLP workflow visualizers.

---

## ✨ Features

- 🔍 **Real-Time News Classifier**: Input any news headline, article text, or URL to receive instantaneous authenticity analysis, confidence scoring, and linguistic indicator breakdowns (sensationalism, clickbait markers, source credibility).
- 📊 **Interactive Analytics Dashboard**: Compare 4 machine learning algorithms (Logistic Regression, K-Nearest Neighbors, Random Forest, and Neural Networks/MLP) across Accuracy, Precision, Recall, F1-Score, and Confusion Matrix visualizations.
- ⚙️ **9-Stage Processing Pipeline Visualizer**: Walk through the step-by-step NLP machine learning workflow, from dataset cleaning and regex punctuation stripping to TF-IDF vectorization and decision boundaries.
- 💻 **Embedded Python ML Code Viewer**: Access clean, reproducible Python ML pipeline code skeletons with syntax highlighting and instant copying.
- 🎨 **Sleek Cyber & Light Themes**: Modern glassmorphism UI design with dynamic theme toggling, HSL curated palettes, and micro-animations.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19, JavaScript (ES6+), HTML5, CSS3 (Vanilla CSS variables & Grid layout)
- **Build Tool & Bundler**: Vite 8 with Hot Module Replacement (HMR)
- **Data Visualization**: Chart.js & React-Chartjs-2
- **Icons**: Lucide React
- **Text Classification Core**: Regex Preprocessing, TF-IDF Vectorization logic, Naive Bayes / Heuristic scoring & ML benchmark simulations

---

## 🚀 Quick Start Guide

### 1. Clone the Repository
```bash
git clone https://github.com/SohanDamde07/Fake-News-Detection-System.git
cd Fake-News-Detection-System
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```

### 🐳 5. Run with Docker

Build the Docker image:
```bash
docker build -t truthlens-ai .
```

Run the container on port 8080:
```bash
docker run -d -p 8080:80 --name truthlens truthlens-ai
```

Access the app at `http://localhost:8080`.

---


## 📁 Directory Structure

```
Fake News Detection System/
├── public/                 # Static assets & favicons
├── src/
│   ├── components/         # Navbar, Sidebar, Footer, Toast, CodeViewer
│   ├── pages/              # Home, Detection, Analytics, Workflow, About
│   ├── utils/              # Classifier logic, sample data, metadata
│   ├── App.jsx             # Main Application layout & page router
│   ├── index.css           # Global theme design system & utilities
│   └── main.jsx            # React root entry point
├── index.html              # Entry HTML file
├── package.json            # Project scripts & dependencies
└── vite.config.js          # Vite configuration
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

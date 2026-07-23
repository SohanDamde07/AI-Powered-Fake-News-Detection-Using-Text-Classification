// Sample presets and benchmark dataset details for Fake News Detection App

export const SAMPLE_ARTICLES = [
  {
    id: "fake-1",
    title: "SENSATIONAL: Miracle Plant Cures All Diseases Overnight - Mainstream Media Suppressing Secret!",
    label: "Fake News",
    category: "Health Misinformation",
    text: `SHOCKING BREAKING NEWS! Independent researchers have discovered a secret wild plant extract that cures every chronic illness overnight! Mainstream media and big pharmaceutical corporations are actively trying to censor this miraculous breakthrough to protect their billion-dollar profits.

According to anonymous whistleblowers from a hidden underground facility, taking three drops of this rare herbal oil completely eliminates diabetes, heart disease, and aging within 24 hours. The government does not want you to know this unbelievable secret! 

Doctors are stunned, but corrupt health boards are banning all discussion online. Share this post immediately before it gets taken down by the elites! Click the link below to order your emergency supply before supplies run out forever!`,
    expectedPrediction: "Fake News",
    confidence: 98.4
  },
  {
    id: "real-1",
    title: "NASA's James Webb Space Telescope Detects Atmospheric Water Vapor on Rocky Exoplanet",
    label: "Real News",
    category: "Science & Astronomy",
    text: `WASHINGTON — NASA's James Webb Space Telescope (JWST) has observed atmospheric water vapor around a rocky exoplanet orbiting a cool dwarf star, according to findings published Thursday in the Astrophysical Journal Letters.

The team of international astronomers led by Dr. Sarah Jenkins utilized transmission spectroscopy during two stellar transits to measure light absorption signatures across infrared wavelengths. The data indicates a significant concentration of H2O gas in the planet's upper atmosphere.

"This observation represents a critical milestone in characterizing terrestrial exoplanet atmospheres," said Dr. Jenkins, senior researcher at the Goddard Space Flight Center. "Further observations scheduled for next quarter will evaluate whether the atmosphere contains trace levels of carbon dioxide or methane."

The study was supported by peer-reviewed grants from the National Science Foundation and the European Space Agency.`,
    expectedPrediction: "Real News",
    confidence: 96.8
  },
  {
    id: "fake-2",
    title: "LEAKED MEMO: Secret Underground Bunker Built Beneath City Airport For Global Elite",
    label: "Fake News",
    category: "Conspiracy",
    text: `UNBELIEVABLE CONFIRMED LEAK! A classified internal memo allegedly obtained by internet sleuths reveals that a massive subterranean fortress has been constructed beneath the city's international airport terminal.

Insiders report seeing mysterious black SUVs entering subterranean tunnels at 3 AM every night. Anonymous sources claim the underground city contains luxurious apartments, nuclear fallout shelters, and advanced cloning labs for billionaire elites.

Mainstream media outlets have refused to report on these suspicious activities, claiming the construction is merely a subway expansion. However, eyewitnesses report strange electromagnetic pulses and unexplainable seismic vibrations coming from deep underground!`,
    expectedPrediction: "Fake News",
    confidence: 97.2
  },
  {
    id: "real-2",
    title: "Federal Reserve Maintains Benchmark Interest Rate Following Inflation Benchmark Metrics",
    label: "Real News",
    category: "Finance & Economy",
    text: `NEW YORK — The Federal Reserve announced Wednesday that it will maintain its target federal funds rate at 5.25% to 5.50%, aligning with market expectations following the latest Consumer Price Index report.

In a formal press conference in Washington, Federal Reserve Chair Jerome Powell highlighted that while inflation metrics have moderated significantly from previous highs, economic indicators suggest a prudent, data-dependent approach remains necessary.

Labor market data released by the Bureau of Labor Statistics showed nonfarm payroll employment increased by 175,000 last month, while the unemployment rate remained stable at 3.9%. Financial markets responded with modest gains across major indexes following the announcement.`,
    expectedPrediction: "Real News",
    confidence: 95.9
  }
];

export const DATASET_STATS = {
  totalArticles: 20800,
  fakeCount: 10413,
  realCount: 10387,
  vocabFeatures: 5000,
  trainSize: 16640,
  testSize: 4160,
  sources: [
    { name: "Kaggle Fake News Dataset", percentage: 70, label: "train.csv" },
    { name: "UCI Machine Learning Repo", percentage: 25, label: "News Corpus" },
    { name: "NewsAPI Scraped & Labeled", percentage: 5, label: "Live Subset" }
  ]
};

export const MODEL_COMPARISON_DATA = {
  labels: ["Accuracy (%)", "Precision (%)", "Recall (%)", "F1 Score (%)"],
  models: [
    {
      name: "Logistic Regression",
      short: "LogReg",
      color: "#38bdf8", // Cyan
      values: [97.4, 97.1, 97.5, 97.3]
    },
    {
      name: "KNN (k=5)",
      short: "KNN",
      color: "#f59e0b", // Amber
      values: [91.2, 92.0, 89.6, 90.8]
    },
    {
      name: "Random Forest",
      short: "RandomForest",
      color: "#10b981", // Emerald
      values: [96.8, 96.5, 96.9, 96.7]
    },
    {
      name: "Neural Network (MLP)",
      short: "NeuralNet",
      color: "#8b5cf6", // Purple
      values: [98.1, 97.9, 98.2, 98.0]
    }
  ]
};

export const CONFUSION_MATRICES = {
  LogReg: {
    trueReal: 2028,
    falseFake: 49,
    falseReal: 59,
    trueFake: 2024
  },
  KNN: {
    trueReal: 1914,
    falseFake: 163,
    falseReal: 203,
    trueFake: 1880
  },
  RandomForest: {
    trueReal: 2012,
    falseFake: 65,
    falseReal: 68,
    trueFake: 2015
  },
  NeuralNet: {
    trueReal: 2039,
    falseFake: 38,
    falseReal: 41,
    trueFake: 2042
  }
};

export const FEATURE_IMPORTANCE_WORDS = [
  { word: "shocking", weight: 0.89, indicator: "Fake" },
  { word: "miracle", weight: 0.84, indicator: "Fake" },
  { word: "whistleblower", weight: 0.78, indicator: "Fake" },
  { word: "unbelievable", weight: 0.75, indicator: "Fake" },
  { word: "suppressed", weight: 0.73, indicator: "Fake" },
  { word: "conspiracy", weight: 0.71, indicator: "Fake" },
  { word: "secret", weight: 0.69, indicator: "Fake" },
  { word: "according to", weight: -0.87, indicator: "Real" },
  { word: "published in", weight: -0.85, indicator: "Real" },
  { word: "spokesperson", weight: -0.82, indicator: "Real" },
  { word: "reuters", weight: -0.80, indicator: "Real" },
  { word: "official statement", weight: -0.76, indicator: "Real" },
  { word: "researchers", weight: -0.74, indicator: "Real" },
  { word: "department of", weight: -0.72, indicator: "Real" }
];

export const ROC_CURVE_DATA = {
  fpr: [0.0, 0.02, 0.05, 0.1, 0.2, 0.4, 0.6, 0.8, 1.0],
  tpr: {
    LogReg: [0.0, 0.94, 0.97, 0.985, 0.992, 0.997, 0.999, 1.0, 1.0],
    KNN: [0.0, 0.82, 0.89, 0.92, 0.95, 0.97, 0.985, 0.995, 1.0],
    RandomForest: [0.0, 0.93, 0.965, 0.98, 0.99, 0.996, 0.998, 1.0, 1.0],
    NeuralNet: [0.0, 0.96, 0.982, 0.992, 0.996, 0.999, 1.0, 1.0, 1.0]
  }
};

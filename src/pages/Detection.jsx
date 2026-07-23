import React, { useState, useEffect } from "react";
import {
  SearchCode,
  Sparkles,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Layers,
  Brain,
  HelpCircle,
  RefreshCw,
  FileText
} from "lucide-react";
import { classifyNewsArticle } from "../utils/fakeNewsClassifier";
import { SAMPLE_ARTICLES } from "../utils/sampleData";
import { ALGORITHM_DETAILS } from "../utils/pdfContent";

export default function Detection({ preloadedArticle, setPreloadedArticle, showToast }) {
  const [inputText, setInputText] = useState("");
  const [selectedModel, setSelectedModel] = useState("NeuralNet");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [result, setResult] = useState(null);

  // Handle preloaded text from Home or Preset buttons
  useEffect(() => {
    if (preloadedArticle) {
      setInputText(preloadedArticle);
      setPreloadedArticle(""); // Clear preloaded state after consuming
    }
  }, [preloadedArticle, setPreloadedArticle]);

  const charCount = inputText.length;
  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;

  const handleClear = () => {
    setInputText("");
    setResult(null);
    showToast("Text input cleared", "info");
  };

  const handlePresetSelect = (article) => {
    setInputText(article.text);
    setResult(null);
    showToast(`Loaded "${article.category}" sample article`, "info");
  };

  const handleDetect = () => {
    if (!inputText || inputText.trim().length < 10) {
      showToast("Please enter or paste a valid news article text (at least 10 characters).", "error");
      return;
    }

    setLoading(true);
    setResult(null);

    // Multi-stage loading animation steps
    setLoadingStep("Pre-processing text & removing stopwords...");

    setTimeout(() => {
      setLoadingStep("Computing Bag-of-Words & TfidfVectorizer(max_features=5000)...");
    }, 400);

    setTimeout(() => {
      setLoadingStep(`Running ${selectedModel} model classification...`);
    }, 800);

    setTimeout(() => {
      const classification = classifyNewsArticle(inputText, selectedModel);
      setResult(classification);
      setLoading(false);
      showToast(`Analysis complete: Classified as ${classification.prediction}`, classification.isFake ? "error" : "success");
    }, 1200);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
      {/* Page Title */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent-cyan)", marginBottom: "8px" }}>
          <SearchCode size={20} />
          <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase" }}>
            AI Classification Engine
          </span>
        </div>
        <h1 style={{ fontSize: "2.2rem" }}>News Misinformation Detector</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
          Paste a news article below to evaluate authenticity using trained TF-IDF vectorizers and ML classifiers.
        </p>
      </div>

      {/* Preset Article Quick Pickers */}
      <div>
        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "10px" }}>
          Quick Test Presets:
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {SAMPLE_ARTICLES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handlePresetSelect(sample)}
              className="btn-secondary"
              style={{
                padding: "8px 14px",
                fontSize: "0.82rem",
                borderRadius: "20px",
                borderColor: sample.expectedPrediction === "Fake News" ? "rgba(239, 68, 68, 0.4)" : "rgba(16, 185, 129, 0.4)"
              }}
            >
              <FileText size={14} style={{ color: sample.expectedPrediction === "Fake News" ? "#ef4444" : "#10b981" }} />
              <span>{sample.title.slice(0, 36)}...</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Detector Card */}
      <div className="glass-card" style={{ padding: "30px", borderRadius: "24px" }}>
        {/* Top Controls Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "14px" }}>
          {/* Model Selector Pills */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)" }}>Select Model:</span>
            {ALGORITHM_DETAILS.map((alg) => (
              <button
                key={alg.id}
                onClick={() => setSelectedModel(alg.id)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  border: selectedModel === alg.id ? "1px solid var(--accent-cyan)" : "1px solid var(--border-color)",
                  background: selectedModel === alg.id ? "var(--accent-cyan)" : "var(--bg-tertiary)",
                  color: selectedModel === alg.id ? "#ffffff" : "var(--text-secondary)",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {alg.name}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "10px" }}>
            {inputText && (
              <button onClick={handleClear} className="btn-secondary" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
                <Trash2 size={16} />
                <span>Clear</span>
              </button>
            )}
          </div>
        </div>

        {/* Text Input Area */}
        <div style={{ position: "relative" }}>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste complete news article text, title, or full paragraph here for AI classification..."
            rows={9}
            style={{
              width: "100%",
              padding: "20px",
              borderRadius: "16px",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              fontSize: "0.95rem",
              lineHeight: "1.6",
              fontFamily: "inherit",
              resize: "vertical",
              outline: "none"
            }}
          />

          {/* Counters Footer Bar */}
          <div
            style={{
              display: "flex",
              justify: "space-between",
              alignItems: "center",
              marginTop: "8px",
              fontSize: "0.8rem",
              color: "var(--text-muted)"
            }}
          >
            <div>
              <span>Model Config: </span>
              <span style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>
                {ALGORITHM_DETAILS.find(a => a.id === selectedModel)?.config}
              </span>
            </div>
            <div>
              <span style={{ fontWeight: 600, color: charCount > 0 ? "var(--text-primary)" : "inherit" }}>
                {charCount.toLocaleString()}
              </span> characters •{" "}
              <span style={{ fontWeight: 600, color: wordCount > 0 ? "var(--text-primary)" : "inherit" }}>
                {wordCount.toLocaleString()}
              </span> words
            </div>
          </div>
        </div>

        {/* Detect Button */}
        <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={handleDetect}
            disabled={loading}
            className="btn-primary"
            style={{
              padding: "14px 36px",
              fontSize: "1rem",
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer"
            }}
          >
            {loading ? (
              <>
                <RefreshCw size={20} className="animate-spin-slow" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Sparkles size={20} />
                <span>Detect News</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Loading Animation Box */}
      {loading && (
        <div
          className="glass-card"
          style={{
            padding: "36px",
            borderRadius: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px"
          }}
        >
          <div
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "50%",
              border: "3px solid var(--border-color)",
              borderTopColor: "var(--accent-cyan)",
              animation: "spinSlow 1s linear infinite"
            }}
          />
          <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent-cyan)" }}>
            {loadingStep}
          </div>
          <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
            Evaluating 5,000 TF-IDF features across decision boundaries...
          </div>
        </div>
      )}

      {/* Prediction Results Display */}
      {result && !loading && (
        <div
          className="glass-card"
          style={{
            padding: "36px",
            borderRadius: "24px",
            border: result.isFake ? "1px solid rgba(239, 68, 68, 0.4)" : "1px solid rgba(16, 185, 129, 0.4)",
            background: result.isFake
              ? "linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(15, 23, 42, 0.8))"
              : "linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(15, 23, 42, 0.8))"
          }}
        >
          {/* Main Badge & Gauge */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              alignItems: "center",
              marginBottom: "30px"
            }}
          >
            {/* Left Result Badge */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "8px 20px",
                  borderRadius: "30px",
                  background: result.isFake ? "rgba(239, 68, 68, 0.2)" : "rgba(16, 185, 129, 0.2)",
                  color: result.isFake ? "#ef4444" : "#10b981",
                  fontSize: "0.88rem",
                  fontWeight: 800,
                  marginBottom: "12px"
                }}
              >
                {result.isFake ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
                <span>PREDICTION RESULT</span>
              </div>

              <h2
                style={{
                  fontSize: "2.6rem",
                  fontWeight: "800",
                  color: result.isFake ? "#ef4444" : "#10b981"
                }}
              >
                {result.prediction.toUpperCase()}
              </h2>
              <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                Classified by {result.selectedModel} Classifier
              </div>
            </div>

            {/* Right Confidence Score Meter */}
            <div
              style={{
                padding: "20px",
                borderRadius: "16px",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-color)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>Confidence Score</span>
                <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--accent-cyan)" }}>
                  {result.confidenceScore}%
                </span>
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  height: "12px",
                  borderRadius: "6px",
                  background: "var(--bg-tertiary)",
                  overflow: "hidden",
                  marginBottom: "14px"
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${result.confidenceScore}%`,
                    background: result.isFake
                      ? "linear-gradient(90deg, #f59e0b, #ef4444)"
                      : "linear-gradient(90deg, #38bdf8, #10b981)",
                    borderRadius: "6px",
                    transition: "width 1s ease"
                  }}
                />
              </div>

              {/* Probability Breakdown */}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "#10b981", fontWeight: 600 }}>Real News Prob: {result.probabilities.real}%</span>
                <span style={{ color: "#ef4444", fontWeight: 600 }}>Fake News Prob: {result.probabilities.fake}%</span>
              </div>
            </div>
          </div>

          {/* Explanation Text Block */}
          <div
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-color)",
              marginBottom: "24px"
            }}
          >
            <h4 style={{ fontSize: "0.95rem", marginBottom: "8px", color: "var(--accent-cyan)" }}>
              Model Reasoning & Feature Explanation:
            </h4>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
              {result.explanationText}
            </p>
          </div>

          {/* Matched Keywords & Linguistic Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {/* Keyword Triggers */}
            <div style={{ padding: "16px", borderRadius: "12px", background: "var(--bg-primary)" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "10px" }}>
                Top TF-IDF Term Signals Found:
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {result.matchedKeywords.length > 0 ? (
                  result.matchedKeywords.map((k, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "0.78rem",
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontWeight: 600,
                        background: k.weight > 0 ? "rgba(239, 68, 68, 0.15)" : "rgba(16, 185, 129, 0.15)",
                        color: k.weight > 0 ? "#ef4444" : "#10b981"
                      }}
                    >
                      {k.phrase} ({k.weight > 0 ? "+" + k.weight : k.weight})
                    </span>
                  ))
                ) : (
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    Standard contextual phrasing detected
                  </span>
                )}
              </div>
            </div>

            {/* Linguistic Indicators */}
            <div style={{ padding: "16px", borderRadius: "12px", background: "var(--bg-primary)" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "10px" }}>
                Linguistic Punctuation & Case Metrics:
              </div>
              <div style={{ display: "flex", gap: "16px", fontSize: "0.82rem" }}>
                <div>
                  <div style={{ color: "var(--text-muted)" }}>Exclamations</div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>{result.metrics.exclamationCount} ({result.metrics.exclamationRatio}%)</div>
                </div>
                <div>
                  <div style={{ color: "var(--text-muted)" }}>ALL CAPS Words</div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>{result.metrics.uppercaseWords} ({result.metrics.capRatio}%)</div>
                </div>
                <div>
                  <div style={{ color: "var(--text-muted)" }}>Token Count</div>
                  <div style={{ fontWeight: 700, color: "var(--accent-cyan)" }}>{result.metrics.tokenCount}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

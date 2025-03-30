import React from "react";

interface CreditScoreProps {
  score: number;
}

const getScoreCategory = (score: number) => {
  if (score < 580) return { label: "Poor", color: "#EF4444" }; // Red
  if (score < 670) return { label: "Fair", color: "#F97316" }; // Orange
  if (score < 740) return { label: "Good", color: "#10B981" }; // Green
  if (score < 800) return { label: "Very Good", color: "#059669" }; // Dark Green
  return { label: "Excellent", color: "#047857" }; // Deep Green
};

const CreditScoreIndicator: React.FC<CreditScoreProps> = ({ score }) => {
  const { label, color } = getScoreCategory(score);

  // Define Score Range (350 to 800)
  const minScore = 350;
  const maxScore = 800;
  const normalizedScore = Math.min(Math.max(score, minScore), maxScore);

  // Convert score to percentage (for stroke calculation)
  const percentage =
    ((normalizedScore - minScore) / (maxScore - minScore)) * 100;

  // SVG Circle Parameters
  const radius = 35; // Circle radius
  const strokeWidth = 4; // Border thickness
  const circumference = 2 * Math.PI * radius; // Full circle circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center ">
      <svg width="85" height="85" viewBox="0 0 120 120">
        {/* Background Circle (Gray) */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#E5E7EB" // Light Gray
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Colored Arc (Dynamic) */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)" // Rotate to start from top
        />
   
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dy="7"
          className="text-md font-semibold fill-white"
        >
          {score}
        </text>
      </svg>
    </div>
  );
};

export default CreditScoreIndicator;

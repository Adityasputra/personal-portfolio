"use client";

import { Button } from "@/components/ui/button";

interface SummaryControlsProps {
  summaryLength: "short" | "medium" | "detailed";
  setSummaryLength: (length: "short" | "medium" | "detailed") => void;
  summaryStyle: "paragraph" | "bullet" | "key-points";
  setSummaryStyle: (style: "paragraph" | "bullet" | "key-points") => void;
  isLoading?: boolean;
}

export function SummaryControls({
  summaryLength,
  setSummaryLength,
  summaryStyle,
  setSummaryStyle,
  isLoading = false,
}: SummaryControlsProps) {
  const lengths: ("short" | "medium" | "detailed")[] = [
    "short",
    "medium",
    "detailed",
  ];
  const styles: ("paragraph" | "bullet" | "key-points")[] = [
    "paragraph",
    "bullet",
    "key-points",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Summary Length */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Summary Length</label>
        <div className="flex flex-wrap gap-2">
          {lengths.map((length) => (
            <Button
              key={length}
              variant={summaryLength === length ? "default" : "outline"}
              size="sm"
              onClick={() => setSummaryLength(length)}
              disabled={isLoading}
            >
              {length.charAt(0).toUpperCase() + length.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Summary Style */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Summary Style</label>
        <div className="flex flex-wrap gap-2">
          {styles.map((style) => (
            <Button
              key={style}
              variant={summaryStyle === style ? "default" : "outline"}
              size="sm"
              onClick={() => setSummaryStyle(style)}
              disabled={isLoading}
            >
              {style === "bullet"
                ? "Bullets"
                : style === "key-points"
                ? "Key Points"
                : "Paragraph"}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

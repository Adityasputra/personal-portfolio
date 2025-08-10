"use client";

import { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  FileText,
  Sparkles,
  RefreshCw,
  Clock,
  Zap,
  AlertCircle,
} from "lucide-react";
import { getStats, getSummary } from "./utils";
import { SummaryTabs } from "./SummaryTabs";
import { SummaryControls } from "./SummaryControls";

type SummaryLength = "short" | "medium" | "detailed";
type SummaryStyle = "bullet" | "paragraph" | "key-points";

interface SummaryHistory {
  id: string;
  originalText: string;
  summary: string;
  timestamp: Date;
  style: SummaryStyle;
  length: SummaryLength;
}

export function Summarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summaryLength, setSummaryLength] = useState<SummaryLength>("medium");
  const [summaryStyle, setSummaryStyle] = useState<SummaryStyle>("paragraph");
  const [history, setHistory] = useState<SummaryHistory[]>([]);
  const [error, setError] = useState<string | null>(null);

  const stats = useMemo(() => getStats(text), [text]);

  const handleTextChange = useCallback(
    (value: string) => {
      setText(value);
      setError(null);

      if (summary && value.length < text.length * 0.5) {
        setSummary("");
      }
    },
    [text.length, summary]
  );

  const handleSummarize = useCallback(async () => {
    if (!text.trim()) {
      setError("Please enter some text to summarize.");
      return;
    }

    if (stats.words < 50) {
      setError(
        "Text is too short to summarize. Please enter at least 50 words."
      );
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const result = getSummary(text, summaryLength, summaryStyle);
      setSummary(result);

      const newEntry: SummaryHistory = {
        id: Date.now().toString(),
        originalText: text,
        summary: result,
        timestamp: new Date(),
        style: summaryStyle,
        length: summaryLength,
      };

      setHistory((prev) => [newEntry, ...prev.slice(0, 9)]); // Keep last 10
    } catch (err) {
      console.error("Error generating summary:", err);
      setError("Failed to generate summary. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [text, stats.words, summaryLength, summaryStyle]);

  const handleCopy = useCallback(async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, []);

  const handleDownload = useCallback((content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  const handleReset = useCallback(() => {
    setText("");
    setSummary("");
    setError(null);
    setHistory([]);
  }, []);

  const loadFromHistory = useCallback((item: SummaryHistory) => {
    setText(item.originalText);
    setSummary(item.summary);
    setSummaryLength(item.length);
    setSummaryStyle(item.style);
  }, []);

  const getReadingTime = useCallback((wordCount: number) => {
    const wordsPerMinute = 200;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes === 1 ? "1 min" : `${minutes} mins`;
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-2 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            AI Text Summarizer
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <SummaryControls
            summaryLength={summaryLength}
            summaryStyle={summaryStyle}
            setSummaryLength={setSummaryLength}
            setSummaryStyle={setSummaryStyle}
          />

          <div className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <label className="text-sm font-medium flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Original Text
              </label>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                <span>{stats.characters} characters</span>
                <span>{stats.words} words</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {getReadingTime(stats.words)} read
                </span>
              </div>
            </div>

            <Textarea
              placeholder="Paste your text here to generate a summary..."
              value={text}
              onChange={(e) => handleTextChange(e.target.value)}
              className="min-h-[200px] resize-none"
              disabled={isLoading}
            />

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Text quality for summarization</span>
                <span>
                  {Math.min(100, Math.round((stats.words / 200) * 100))}%
                </span>
              </div>
              <Progress
                value={Math.min(100, (stats.words / 200) * 100)}
                className="h-1"
              />
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="flex gap-3 flex-wrap">
            <Button
              onClick={handleSummarize}
              disabled={!text.trim() || isLoading}
              className="min-w-[120px]"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Summarize
                </>
              )}
            </Button>

            <Button variant="outline" onClick={handleReset}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          <SummaryTabs
            summary={summary}
            summaryStyle={summaryStyle}
            summaryLength={summaryLength}
            stats={stats}
            text={text}
            handleCopy={handleCopy}
            handleDownload={handleDownload}
            getStats={getStats}
          />

          {history.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Summaries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-[300px] overflow-y-auto">
                  {history.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted cursor-pointer transition-colors gap-2"
                      onClick={() => loadFromHistory(item)}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {item.style}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {item.length}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {item.originalText.slice(0, 80)}...
                        </p>
                      </div>
                      <div className="text-xs text-muted-foreground sm:ml-4">
                        {item.timestamp.toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

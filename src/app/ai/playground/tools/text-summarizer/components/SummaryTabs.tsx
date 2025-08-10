"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Download, BarChart3, FileText, TrendingUp } from "lucide-react";
import { Stats } from "./Stats";
import { TextStats } from "./utils";

interface SummaryTabsProps {
  summary: string;
  summaryStyle: string;
  summaryLength: string;
  stats: TextStats;
  text: string;
  handleCopy: (text: string) => void;
  handleDownload: (text: string, filename: string) => void;
  getStats: (text: string) => TextStats;
}

export function SummaryTabs({
  summary,
  summaryStyle,
  summaryLength,
  stats,
  text,
  handleCopy,
  handleDownload,
  getStats,
}: SummaryTabsProps) {
  if (!summary) return null;

  return (
    <div className="w-full space-y-4">
      <Tabs defaultValue="summary" className="w-full">
        {/* Responsive Tab List */}
        <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted/50">
          <TabsTrigger
            value="summary"
            className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2 px-2 sm:px-4 text-xs sm:text-sm"
          >
            <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Summary</span>
            <span className="xs:hidden">Sum</span>
          </TabsTrigger>
          <TabsTrigger
            value="stats"
            className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2 px-2 sm:px-4 text-xs sm:text-sm"
          >
            <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Statistics</span>
            <span className="xs:hidden">Stats</span>
          </TabsTrigger>
          <TabsTrigger
            value="comparison"
            className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2 px-2 sm:px-4 text-xs sm:text-sm"
          >
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Comparison</span>
            <span className="xs:hidden">Comp</span>
          </TabsTrigger>
        </TabsList>

        {/* SUMMARY TAB - Enhanced Responsive */}
        <TabsContent value="summary" className="space-y-4 mt-4">
          <Card className="w-full">
            <CardHeader className="pb-3 px-3 sm:px-6">
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle className="text-base sm:text-lg">
                  Generated Summary
                </CardTitle>

                {/* Responsive Action Buttons */}
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(summary)}
                    className="flex-1 sm:flex-none text-xs sm:text-sm"
                  >
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-0" />
                    <span className="sm:hidden">Copy</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(summary, "summary.txt")}
                    className="flex-1 sm:flex-none text-xs sm:text-sm"
                  >
                    <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-0" />
                    <span className="sm:hidden">Download</span>
                  </Button>
                </div>
              </div>

              {/* Responsive Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  {summaryStyle}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {summaryLength}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {getStats(summary).words} words
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="px-3 sm:px-6">
              <div className="prose prose-sm sm:prose max-w-none">
                <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
                  {summaryStyle === "bullet" ? (
                    <ul className="space-y-1 text-sm sm:text-base">
                      {summary
                        .split("\n")
                        .filter((line) => line.trim())
                        .map((line, i) => (
                          <li key={i} className="leading-relaxed">
                            {line.replace(/^[•\-\*]\s*/, "")}
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <p className="whitespace-pre-wrap text-sm sm:text-base leading-relaxed">
                      {summary}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* STATISTICS TAB - Enhanced Responsive */}
        <TabsContent value="stats" className="mt-4">
          <Card className="w-full">
            <CardHeader className="px-3 sm:px-6">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                Text Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-6">
              <Stats originalStats={stats} summaryStats={getStats(summary)} />
            </CardContent>
          </Card>
        </TabsContent>

        {/* COMPARISON TAB - Enhanced Responsive */}
        <TabsContent value="comparison" className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Original Text Card */}
            <Card className="w-full">
              <CardHeader className="px-3 sm:px-6 pb-3">
                <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Original Text
                  <Badge variant="outline" className="text-xs ml-auto">
                    {stats.words} words
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-6">
                <div className="relative">
                  <div className="text-xs sm:text-sm bg-muted/50 p-3 rounded-lg max-h-[250px] sm:max-h-[300px] overflow-y-auto border border-border/50">
                    <div className="leading-relaxed">
                      {text.slice(0, 500)}
                      {text.length > 500 && (
                        <span className="text-muted-foreground italic">
                          ... ({text.length - 500} more characters)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Character Count Indicator */}
                  <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-xs text-muted-foreground">
                    {text.length} chars
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summary Card */}
            <Card className="w-full">
              <CardHeader className="px-3 sm:px-6 pb-3">
                <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Summary
                  <Badge variant="outline" className="text-xs ml-auto">
                    {getStats(summary).words} words
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-6">
                <div className="relative">
                  <div className="text-xs sm:text-sm bg-muted/50 p-3 rounded-lg max-h-[250px] sm:max-h-[300px] overflow-y-auto border border-border/50">
                    <div className="leading-relaxed">
                      {summaryStyle === "bullet" ? (
                        <ul className="space-y-1">
                          {summary
                            .split("\n")
                            .filter((line) => line.trim())
                            .map((line, i) => (
                              <li key={i}>{line.replace(/^[•\-\*]\s*/, "")}</li>
                            ))}
                        </ul>
                      ) : (
                        <p className="whitespace-pre-wrap">{summary}</p>
                      )}
                    </div>
                  </div>

                  {/* Compression Ratio */}
                  <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-xs text-muted-foreground">
                    {Math.round(
                      ((stats.words - getStats(summary).words) / stats.words) *
                        100
                    )}
                    % shorter
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Summary */}
          <Card className="mt-4 bg-muted/20">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-blue-600">
                    {Math.round(
                      ((stats.words - getStats(summary).words) / stats.words) *
                        100
                    )}
                    %
                  </div>
                  <div className="text-xs text-muted-foreground">Reduction</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-green-600">
                    {Math.ceil(stats.words / 200) -
                      Math.ceil(getStats(summary).words / 200)}
                  </div>
                  <div className="text-xs text-muted-foreground">Min Saved</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-purple-600">
                    {getStats(summary).words}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Final Words
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-orange-600">
                    {Math.round((getStats(summary).words / stats.words) * 100)}%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Of Original
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  Clock,
  Target,
  TrendingDown,
  BarChart3,
  BookOpen,
  Hash,
  Zap,
} from "lucide-react";

interface TextStats {
  characters: number;
  words: number;
  sentences: number;
  paragraphs: number;
  uniqueWords: number;
  averageWordsPerSentence: number;
  readingTime: number;
  complexity: "Simple" | "Medium" | "Complex";
}

interface StatsProps {
  originalStats: TextStats;
  summaryStats?: TextStats;
}

export function Stats({ originalStats, summaryStats }: StatsProps) {
  const compressionRatio = summaryStats
    ? Math.round(
        ((originalStats.words - summaryStats.words) / originalStats.words) * 100
      )
    : 0;

  const timeSaved = summaryStats
    ? originalStats.readingTime - summaryStats.readingTime
    : 0;

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Simple":
        return "text-green-600 bg-green-100 dark:bg-green-900/30";
      case "Medium":
        return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30";
      case "Complex":
        return "text-red-600 bg-red-100 dark:bg-red-900/30";
      default:
        return "text-gray-600 bg-gray-100 dark:bg-gray-900/30";
    }
  };

  return (
    <div className="space-y-6">
      {summaryStats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-blue-600">
                    {compressionRatio}%
                  </p>
                  <p className="text-sm text-muted-foreground">Compression</p>
                </div>
                <TrendingDown className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-green-600">
                    {timeSaved}
                  </p>
                  <p className="text-sm text-muted-foreground">Minutes Saved</p>
                </div>
                <Clock className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-purple-600">
                    {Math.round(
                      (summaryStats.uniqueWords / originalStats.uniqueWords) *
                        100
                    )}
                    %
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Vocabulary Retained
                  </p>
                </div>
                <Target className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="w-5 h-5" />
              Original Text
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Hash className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Characters</p>
                  <p className="font-semibold">
                    {originalStats.characters.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <FileText className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Words</p>
                  <p className="font-semibold">
                    {originalStats.words.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <BarChart3 className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Sentences</p>
                  <p className="font-semibold">{originalStats.sentences}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <BookOpen className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Paragraphs</p>
                  <p className="font-semibold">{originalStats.paragraphs}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Unique Words
                </span>
                <span className="font-medium">{originalStats.uniqueWords}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Avg Words/Sentence
                </span>
                <span className="font-medium">
                  {originalStats.averageWordsPerSentence.toFixed(1)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Reading Time
                </span>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <span className="font-medium">
                    {originalStats.readingTime} min
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Complexity
                </span>
                <Badge className={getComplexityColor(originalStats.complexity)}>
                  {originalStats.complexity}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {summaryStats && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="w-5 h-5" />
                Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Hash className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Characters</p>
                    <p className="font-semibold">
                      {summaryStats.characters.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FileText className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Words</p>
                    <p className="font-semibold">
                      {summaryStats.words.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Sentences</p>
                    <p className="font-semibold">{summaryStats.sentences}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <BookOpen className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Paragraphs</p>
                    <p className="font-semibold">{summaryStats.paragraphs}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Unique Words
                  </span>
                  <span className="font-medium">
                    {summaryStats.uniqueWords}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Avg Words/Sentence
                  </span>
                  <span className="font-medium">
                    {summaryStats.averageWordsPerSentence.toFixed(1)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Reading Time
                  </span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span className="font-medium">
                      {summaryStats.readingTime} min
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Complexity
                  </span>
                  <Badge
                    className={getComplexityColor(summaryStats.complexity)}
                  >
                    {summaryStats.complexity}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {summaryStats && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Length Comparison</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Original ({originalStats.words} words)</span>
                <span>100%</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Summary ({summaryStats.words} words)</span>
                <span>
                  {Math.round((summaryStats.words / originalStats.words) * 100)}
                  %
                </span>
              </div>
              <Progress
                value={(summaryStats.words / originalStats.words) * 100}
                className="h-2"
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  RotateCcw,
  Play,
  Pause,
  Timer,
  Target,
  TrendingUp,
} from "lucide-react";

const texts = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing is a fundamental skill in the digital age.",
  "React makes it painless to create interactive UIs.",
  "Knowledge is power, but wisdom is knowing how to use it.",
  "Every great developer you know started by typing code badly.",
  "Programming is not about what you know; it's about what you can figure out.",
  "Code is like humor. When you have to explain it, it's bad.",
  "First, solve the problem. Then, write the code.",
  "The best error message is the one that never shows up.",
  "Simplicity is the ultimate sophistication in programming.",
];

interface TypingStats {
  wpm: number;
  accuracy: number;
  errors: number;
  timeElapsed: number;
}

export function TypingSpeedTracker() {
  const [currentText, setCurrentText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [, setErrors] = useState(0);
  const [previousStats, setPreviousStats] = useState<TypingStats[]>([]);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "medium"
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const generateRandomText = useCallback(() => {
    let selectedTexts = texts;

    switch (difficulty) {
      case "easy":
        selectedTexts = texts.slice(0, 3);
        break;
      case "hard":
        selectedTexts = texts.slice(-3);
        break;
      default:
        selectedTexts = texts.slice(2, 7);
    }

    const random =
      selectedTexts[Math.floor(Math.random() * selectedTexts.length)];
    setCurrentText(random);
  }, [difficulty]);

  useEffect(() => {
    generateRandomText();
  }, [generateRandomText]);

  useEffect(() => {
    if (startTime && !isFinished && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(Date.now() - startTime);
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startTime, isFinished, isPaused]);

  useEffect(() => {
    if (userInput.length === 1 && !startTime) {
      setStartTime(Date.now());
    }

    if (userInput === currentText && userInput.length > 0) {
      setIsFinished(true);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  }, [userInput, startTime, currentText]);

  const stats = useMemo(() => {
    const timeInMinutes = currentTime / 1000 / 60;
    const wordsTyped = userInput
      .trim()
      .split(" ")
      .filter((word) => word.length > 0).length;

    // Calculate WPM
    const wpm = timeInMinutes > 0 ? Math.round(wordsTyped / timeInMinutes) : 0;

    // Calculate accuracy
    let correctChars = 0;
    let totalErrors = 0;

    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === currentText[i]) {
        correctChars++;
      } else {
        totalErrors++;
      }
    }

    const accuracy =
      userInput.length > 0
        ? Math.round((correctChars / userInput.length) * 100)
        : 100;
    const progress = Math.round((userInput.length / currentText.length) * 100);

    return {
      wpm,
      accuracy,
      errors: totalErrors,
      timeElapsed: currentTime,
      progress,
    };
  }, [userInput, currentText, currentTime]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      // Prevent typing beyond text length
      if (value.length > currentText.length) return;

      setUserInput(value);

      // Track errors
      if (value.length > 0) {
        const lastChar = value[value.length - 1];
        const expectedChar = currentText[value.length - 1];

        if (lastChar !== expectedChar) {
          setErrors((prev) => prev + 1);
        }
      }
    },
    [currentText]
  );

  const handleReset = useCallback(() => {
    setUserInput("");
    setStartTime(null);
    setCurrentTime(0);
    setIsFinished(false);
    setIsPaused(false);
    setErrors(0);
    generateRandomText();
    inputRef.current?.focus();

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [generateRandomText]);

  const handlePauseResume = useCallback(() => {
    if (!startTime) return;

    if (isPaused) {
      setStartTime(Date.now() - currentTime);
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  }, [isPaused, startTime, currentTime]);

  useEffect(() => {
    if (isFinished && stats.wpm > 0) {
      setPreviousStats((prev) => [
        ...prev.slice(-4), // Keep last 5 attempts
        {
          wpm: stats.wpm,
          accuracy: stats.accuracy,
          errors: stats.errors,
          timeElapsed: stats.timeElapsed,
        },
      ]);
    }
  }, [isFinished, stats]);

  const renderText = () => {
    return currentText.split("").map((char, index) => {
      let className = "text-muted-foreground";

      if (index < userInput.length) {
        className =
          userInput[index] === char
            ? "text-green-600 bg-green-100 dark:bg-green-900/30"
            : "text-red-600 bg-red-100 dark:bg-red-900/30";
      } else if (index === userInput.length) {
        className = "bg-primary/20 text-foreground animate-pulse";
      }

      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${(seconds % 60).toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto ">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Timer className="w-5 h-5" />
            Typing Speed Tracker
          </CardTitle>

          <div className="flex gap-2">
            {(["easy", "medium", "hard"] as const).map((level) => (
              <Button
                key={level}
                variant={difficulty === level ? "default" : "outline"}
                size="sm"
                onClick={() => setDifficulty(level)}
                disabled={startTime !== null && !isFinished}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Button>
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{stats.wpm}</div>
              <div className="text-sm text-muted-foreground">WPM</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {stats.accuracy}%
              </div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {stats.errors}
              </div>
              <div className="text-sm text-muted-foreground">Errors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {formatTime(currentTime)}
              </div>
              <div className="text-sm text-muted-foreground">Time</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{stats.progress}%</span>
            </div>
            <Progress value={stats.progress} className="h-2" />
          </div>

          <div className="bg-muted p-6 rounded-lg font-mono text-lg leading-relaxed">
            {renderText()}
          </div>

          <div className="space-y-2">
            <input
              ref={inputRef}
              disabled={isFinished || isPaused}
              className="w-full border p-4 rounded-lg text-lg font-mono focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
              value={userInput}
              onChange={handleInputChange}
              placeholder={
                isPaused
                  ? "Paused - Click Resume to continue"
                  : "Start typing here..."
              }
              autoFocus
            />
          </div>

          <div className="flex gap-3 flex-wrap">
            <Button onClick={handleReset} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>

            {startTime && !isFinished && (
              <Button onClick={handlePauseResume} variant="outline">
                {isPaused ? (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Resume
                  </>
                ) : (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Pause
                  </>
                )}
              </Button>
            )}

            <Button
              onClick={generateRandomText}
              variant="outline"
              disabled={startTime !== null && !isFinished}
            >
              <Target className="w-4 h-4 mr-2" />
              New Text
            </Button>
          </div>

          {isFinished && (
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Test Complete!
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Badge variant="secondary">WPM: {stats.wpm}</Badge>
                  <Badge variant="secondary">Accuracy: {stats.accuracy}%</Badge>
                  <Badge variant="secondary">Errors: {stats.errors}</Badge>
                  <Badge variant="secondary">
                    Time: {formatTime(currentTime)}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          )}

          {previousStats.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Previous Attempts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {previousStats
                    .slice(-5)
                    .reverse()
                    .map((stat, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 bg-muted/50 rounded"
                      >
                        <span className="text-sm">
                          Attempt {previousStats.length - index}
                        </span>
                        <div className="flex gap-3 text-sm">
                          <span>{stat.wpm} WPM</span>
                          <span>{stat.accuracy}% accuracy</span>
                          <span>{formatTime(stat.timeElapsed)}</span>
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

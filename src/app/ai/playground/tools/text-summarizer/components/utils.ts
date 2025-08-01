export interface TextStats {
  characters: number;
  words: number;
  sentences: number;
  paragraphs: number;
  uniqueWords: number;
  averageWordsPerSentence: number;
  readingTime: number;
  complexity: "Simple" | "Medium" | "Complex";
}

export function getStats(text: string): TextStats {
  if (!text.trim()) {
    return {
      characters: 0,
      words: 0,
      sentences: 0,
      paragraphs: 0,
      uniqueWords: 0,
      averageWordsPerSentence: 0,
      readingTime: 0,
      complexity: "Simple"
    };
  }

  const characters = text.length;
  const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
  
  // Calculate unique words
  const wordSet = new Set(
    text.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter(word => word.length > 0)
  );
  const uniqueWords = wordSet.size;

  // Calculate average words per sentence
  const averageWordsPerSentence = sentences > 0 ? words / sentences : 0;

  // Calculate reading time (average 200 words per minute)
  const readingTime = Math.ceil(words / 200);

  // Determine complexity based on average sentence length
  let complexity: "Simple" | "Medium" | "Complex";
  if (averageWordsPerSentence < 15) {
    complexity = "Simple";
  } else if (averageWordsPerSentence < 25) {
    complexity = "Medium";
  } else {
    complexity = "Complex";
  }

  return {
    characters,
    words,
    sentences,
    paragraphs,
    uniqueWords,
    averageWordsPerSentence,
    readingTime,
    complexity
  };
}

// Add and export getSummary function
export function getSummary(
  text: string,
  length: "short" | "medium" | "detailed",
  style: "bullet" | "paragraph" | "key-points"
): string {
  // Dummy implementation for demonstration
  if (style === "bullet") {
    return text
      .split(".")
      .filter((s) => s.trim())
      .map((s) => `• ${s.trim()}`)
      .join("\n");
  }
  if (style === "key-points") {
    return text
      .split(".")
      .filter((s) => s.trim())
      .map((s) => `- ${s.trim()}`)
      .join("\n");
  }
  // Default: paragraph
  return text.slice(0, length === "short" ? 100 : length === "medium" ? 250 : 500);
}
"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const TextSummarizer = () => {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const words = input.split(" ");
      const result =
        words.length <= 20 ? input : words.slice(0, 20).join(" ") + " ...";
      setSummary(result);
      setLoading(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <Textarea
        placeholder="Paste or write a paragraph here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={6}
        className="resize-none"
      />
      <div className="flex justify-end">
        <Button onClick={handleSummarize} disabled={loading}>
          {loading ? "Summarizing..." : "Summarize"}
        </Button>
      </div>
      {summary && (
        <Card>
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Summary:</h4>
            <p className="text-muted-foreground">{summary}</p>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
};

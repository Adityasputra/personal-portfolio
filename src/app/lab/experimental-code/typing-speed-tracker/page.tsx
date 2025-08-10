import { ButtonNav } from "@/components/custom/button";
import { TypingSpeedTracker } from "../components/TypingSpeedTracker";

export default function TypingSpeedTrackerPage() {
  return (
    <main className="max-w-xl mx-auto px-2">
      <ButtonNav
        href="/lab/experimental-code"
        label="Back to Lab"
        className="mb-2 mt-2"
      />
      <TypingSpeedTracker />
    </main>
  );
}

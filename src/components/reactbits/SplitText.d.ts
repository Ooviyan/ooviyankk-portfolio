import type { ComponentType } from "react";

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: Record<string, unknown>;
  to?: Record<string, unknown>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: string;
  tag?: string;
  onLetterAnimationComplete?: () => void;
}

declare const SplitText: ComponentType<SplitTextProps>;
export default SplitText;

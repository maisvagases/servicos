"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export const WordRotate = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { words: string[] }
>(({ className, words, ...props }, ref) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div ref={ref} className={cn("h-[1.2em] overflow-hidden", className)} {...props}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
});

WordRotate.displayName = "WordRotate";
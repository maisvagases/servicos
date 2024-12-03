"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const SparklesText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("relative", className)} {...props}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 z-10"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: Math.random() * 360 }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
            className="absolute h-1 w-1 bg-[#08A1C8]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>
      {children}
    </div>
  );
});

SparklesText.displayName = "SparklesText";
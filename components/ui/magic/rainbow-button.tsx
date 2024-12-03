"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const RainbowButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative rounded-lg px-6 py-3 text-white",
        "bg-gradient-to-r from-[#08A1C8] to-[#4299E1]",
        "hover:shadow-lg transition-shadow",
        className
      )}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      {...props}
    >
      <motion.div
        initial={false}
        animate={{
          background: hovered
            ? "linear-gradient(90deg, #08A1C8, #4299E1, #08A1C8)"
            : "linear-gradient(90deg, #08A1C8, #4299E1)",
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-lg"
        style={{
          backgroundSize: "200% 100%",
          animation: hovered ? "rainbow 2s linear infinite" : "none",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
});

RainbowButton.displayName = "RainbowButton";
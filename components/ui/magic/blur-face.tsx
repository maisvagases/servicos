"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BlurFace = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("relative", className)} {...props}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-[radial-gradient(circle_at_50%_120%,rgba(8,161,200,0.3),rgba(255,255,255,0)_70%)]"
        style={{
          maskImage: "radial-gradient(circle at 50% 120%, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 120%, black, transparent 70%)",
        }}
      />
    </div>
  );
});

BlurFace.displayName = "BlurFace";
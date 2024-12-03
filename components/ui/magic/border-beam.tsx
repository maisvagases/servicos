"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BorderBeam = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative rounded-lg border border-neutral-200 bg-white p-8 shadow-lg dark:border-neutral-800 dark:bg-neutral-950",
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
            ? "radial-gradient(300px circle, rgba(8,161,200,.15), transparent 80%)"
            : "none",
        }}
        className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-lg"
      />
      {children}
    </motion.div>
  );
});

BorderBeam.displayName = "BorderBeam";
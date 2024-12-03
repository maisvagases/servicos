"use client";

import { cn } from "@/lib/utils";
import { motion, useSpring, useTransform } from "framer-motion";
import React from "react";

export const NumberTicker = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: number }
>(({ className, value, ...props }, ref) => {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  React.useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.div
      ref={ref}
      className={cn("tabular-nums", className)}
      {...props}
    >
      {display}
    </motion.div>
  );
});

NumberTicker.displayName = "NumberTicker";
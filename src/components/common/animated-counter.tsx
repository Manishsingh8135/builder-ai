"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export function AnimatedCounter({ value, label, icon }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericPart = value.replace(/[^0-9.]/g, "");
    const prefix = value.match(/^[^0-9]*/)?.[0] || "";
    const suffix = value.match(/[^0-9]*$/)?.[0] || "";
    const targetNumber = parseFloat(numericPart);

    if (isNaN(targetNumber)) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(targetNumber * easeOut);

      if (numericPart.includes(".")) {
        setDisplayValue(`${prefix}${(targetNumber * easeOut).toFixed(1)}${suffix}`);
      } else {
        setDisplayValue(`${prefix}${currentValue}${suffix}`);
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {icon && <div className="mb-2 text-primary">{icon}</div>}
      <div className="text-4xl md:text-5xl font-bold gradient-text">{displayValue}</div>
      <div className="mt-2 text-muted-foreground">{label}</div>
    </motion.div>
  );
}

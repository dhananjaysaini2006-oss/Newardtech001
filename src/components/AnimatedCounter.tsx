/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    if (!isInView) return;

    // Parse numbers out of strings like "99.8%", "45+", "< 1.2s", "0"
    const match = value.match(/([\d.]+)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const isFloat = match[1].includes('.');
    const prefix = value.startsWith('<') ? '< ' : '';
    const suffix = value.replace(prefix, '').replace(match[1], '').trim();

    let startTimestamp: number | null = null;
    const duration = 1800; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easeProgress;

      const formattedNum = isFloat ? currentNum.toFixed(1) : Math.floor(currentNum).toString();
      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

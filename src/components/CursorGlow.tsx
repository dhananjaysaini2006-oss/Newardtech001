/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { Theme } from '../types';

interface CursorGlowProps {
  theme: Theme;
}

export default function CursorGlow({ theme }: CursorGlowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on pointer-fine devices (desktops/laptops)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {/* Ambient Large Glow Orb */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 380 : 300,
          height: isPointer ? 380 : 300,
          background:
            theme === 'light'
              ? 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(99, 102, 241, 0.03) 45%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 75%)',
          filter: 'blur(30px)',
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      />
    </div>
  );
}

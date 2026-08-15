/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { Theme } from '../types';

interface CinematicVideoProps {
  theme: Theme;
}

export default function CinematicVideo({ theme }: CinematicVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    // Attempt video playback
    const startPlayback = async () => {
      try {
        await video.play();
        setIsPlaying(true);
        setHasError(false);
      } catch (err) {
        console.warn("Mobile autoplay restricted or interrupted:", err);
        setIsPlaying(false);
      }
    };

    startPlayback();

    // Fallback trigger: try playing video on first user interaction (touch/scroll) if blocked
    const handleUserInteraction = () => {
      if (video && video.paused) {
        video.play()
          .then(() => {
            setIsPlaying(true);
            setHasError(false);
          })
          .catch(() => {});
      }
    };

    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('click', handleUserInteraction, { passive: true });
    window.addEventListener('scroll', handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
    };
  }, []);

  // Determine ambient background colors based on theme
  const ambientBg = theme === 'light' 
    ? 'bg-[#fafafc]' 
    : 'bg-[#07070a]';

  const gradientOverlay = theme === 'light'
    ? 'from-[#fafafc]/70 via-transparent to-[#fafafc]/90'
    : 'from-[#07070a]/60 via-transparent to-[#07070a]/90';

  return (
    <div 
      className={`fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0 ${ambientBg}`}
    >
      {/* 1. AMBIENT ANIMATED LIGHTING LAYER */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated glowing gradient orb 1 */}
        <div 
          className={`absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] sm:blur-[160px] ${
            theme === 'light' ? 'bg-violet-200/50 opacity-40 animate-float-slow' : 'bg-violet-700/30 opacity-30 animate-float-slow'
          }`}
        />

        {/* Animated glowing gradient orb 2 */}
        <div 
          className={`absolute -bottom-1/4 -right-1/4 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] sm:blur-[160px] ${
            theme === 'light' ? 'bg-indigo-100/60 opacity-50 animate-float-slower' : 'bg-indigo-600/25 opacity-25 animate-float-slower'
          }`}
        />

        {/* Subtle grid pattern overlay */}
        <div 
          className={`absolute inset-0 ${
            theme === 'light' ? 'grid-bg-light opacity-30' : 'grid-bg-dark opacity-30'
          }`}
        />
      </div>

      {/* 2. CINEMATIC VIDEO LAYER: Crisp, fluid visual texture across both themes */}
      {!hasError && (
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          className={`w-full h-full object-cover select-none pointer-events-none transition-opacity duration-700 ${
            isPlaying || true
              ? theme === 'light'
                ? 'opacity-25 mix-blend-luminosity filter contrast-125'
                : 'opacity-45 filter brightness-95 contrast-110'
              : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          onLoadedData={() => {
            setIsPlaying(true);
            setHasError(false);
          }}
          onPlaying={() => {
            setIsPlaying(true);
            setHasError(false);
          }}
          onCanPlay={() => {
            if (videoRef.current && videoRef.current.paused) {
              videoRef.current.play().catch(() => {});
            }
          }}
          onError={() => {
            console.warn("Video failed to load, falling back to ambient motion background");
            setHasError(true);
          }}
        />
      )}

      {/* 3. GRADIENT VIGNETTE OVERLAY */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b ${gradientOverlay} pointer-events-none`}
      />
    </div>
  );
}


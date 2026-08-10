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
    ? 'bg-gradient-to-b from-slate-50 via-purple-50/20 to-slate-100'
    : 'bg-[#07070a]';

  const gradientOverlay = theme === 'light'
    ? 'from-[#ffffff] via-transparent to-[#ffffff]'
    : 'from-[#07070a] via-transparent to-[#07070a]';

  return (
    <div 
      className={`fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0 ${ambientBg}`}
    >
      {/* 1. AMBIENT ANIMATED FALLBACK LAYER: Ensures background is NEVER black even if video fails or on low-power mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated glowing gradient orb 1 */}
        <div 
          className={`absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] sm:blur-[140px] opacity-30 sm:opacity-40 animate-float-slow ${
            theme === 'light' ? 'bg-purple-300/40' : 'bg-violet-700/30'
          }`}
        />

        {/* Animated glowing gradient orb 2 */}
        <div 
          className={`absolute -bottom-1/4 -right-1/4 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] sm:blur-[140px] opacity-25 sm:opacity-35 animate-float-slower ${
            theme === 'light' ? 'bg-indigo-200/40' : 'bg-indigo-600/25'
          }`}
        />

        {/* Subtle grid pattern overlay */}
        <div 
          className={`absolute inset-0 opacity-20 sm:opacity-30 ${
            theme === 'light' ? 'grid-bg-light' : 'grid-bg-dark'
          }`}
        />
      </div>

      {/* 2. CINEMATIC VIDEO LAYER: Muted, inline, seamless native HTML5 loop */}
      {!hasError && (
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          className={`w-full h-full object-cover select-none pointer-events-none transition-opacity duration-1000 ${
            isPlaying ? (theme === 'light' ? 'opacity-30' : 'opacity-40') : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
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
        style={{ mixBlendMode: 'normal' }}
      />
    </div>
  );
}


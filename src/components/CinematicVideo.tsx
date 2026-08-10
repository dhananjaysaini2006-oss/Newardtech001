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
  const [opacity, setOpacity] = useState<number>(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly start video
    video.muted = true;
    video.playsInline = true;
    
    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.warn("Video auto-play interrupted:", err);
      }
    };
    playVideo();

    const checkTime = () => {
      if (video && video.duration) {
        const cur = video.currentTime;
        const dur = video.duration;
        const fadeInDuration = 0.5; // seconds
        const fadeOutDuration = 0.5; // seconds

        let currentOpacity = 1;

        // Fade in at the start
        if (cur < fadeInDuration) {
          currentOpacity = cur / fadeInDuration;
        }
        // Fade out at the end
        else if (dur - cur < fadeOutDuration) {
          currentOpacity = (dur - cur) / fadeOutDuration;
        }

        // Clamp opacity between 0 and 1
        currentOpacity = Math.max(0, Math.min(1, currentOpacity));
        setOpacity(currentOpacity);
      }
      animationFrameId.current = requestAnimationFrame(checkTime);
    };

    animationFrameId.current = requestAnimationFrame(checkTime);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    // Set opacity to 0 immediately
    setOpacity(0);

    // Wait 100ms, reset and play again
    setTimeout(() => {
      if (video) {
        video.currentTime = 0;
        video.play()
          .catch(err => console.warn("Video failed to play on loop reset:", err));
      }
    }, 100);
  };

  // Determine standard background color to transition to
  const gradientColor = theme === 'light' ? 'from-[#ffffff] to-[#ffffff]' : 'from-[#07070a] to-[#07070a]';

  return (
    <div 
      className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0"
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
        className="w-full h-full object-cover select-none pointer-events-none transition-opacity duration-100"
        style={{ opacity: opacity * 0.45 }}
        muted
        playsInline
        onEnded={handleEnded}
      />

      {/* Gradient overlays: absolute inset-0 bg-gradient-to-b from-background via-transparent to-background positioned over the video */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b ${gradientColor} via-transparent pointer-events-none`}
        style={{ mixBlendMode: 'normal' }}
      />
    </div>
  );
}

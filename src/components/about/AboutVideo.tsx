"use client";

import { v1 } from "@/lib/v1-tokens";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Company film on the About page.
 *
 * - Starts by itself (muted, as every browser requires for autoplay) once
 *   half of it is on screen, and pauses again when scrolled away.
 * - If the visitor pauses it, scrolling won't restart it.
 * - Custom controls: play/pause, seek, time, mute, volume, fullscreen.
 *   iPhone/iPad don't allow pages to set volume, so there the slider is
 *   hidden and the phone's volume buttons do the job.
 * - Visitors who prefer reduced motion get the poster and a play button.
 */
const SRC_DESKTOP = "/videos/trishala-film-1080.mp4";
const SRC_MOBILE = "/videos/trishala-film-720.mp4";
const POSTER = "/videos/trishala-film-poster.jpg";
const HIDE_CONTROLS_MS = 2500;

function formatTime(s: number) {
  if (!Number.isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function AboutVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const hideTimerRef = useRef(0);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [volumeSettable, setVolumeSettable] = useState(true);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [controlsShown, setControlsShown] = useState(true);
  const [soundHint, setSoundHint] = useState(true);

  // Autoplay when in view, pause when out of view.
  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) userPausedRef.current = true;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPausedRef.current && video.paused && !video.ended) {
            video.play().catch(() => {
              // Autoplay refused (e.g. data saver); the play button still works.
            });
          }
        } else if (!video.paused) {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  const showControls = useCallback(() => {
    setControlsShown(true);
    window.clearTimeout(hideTimerRef.current);
    hideTimerRef.current = window.setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setControlsShown(false);
    }, HIDE_CONTROLS_MS);
  }, []);

  useEffect(() => () => window.clearTimeout(hideTimerRef.current), []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused || v.ended) {
      userPausedRef.current = false;
      v.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      v.pause();
    }
    showControls();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    if (!next && v.volume === 0) v.volume = 0.6;
    setSoundHint(false);
    showControls();
  };

  const onVolume = (value: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = value;
    v.muted = value === 0;
    setSoundHint(false);
  };

  const onSeek = (value: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = value;
    setTime(value);
  };

  const toggleFullscreen = () => {
    const wrap = wrapRef.current;
    const v = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (!wrap || !v) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (wrap.requestFullscreen) {
      wrap.requestFullscreen().catch(() => {});
    } else if (v.webkitEnterFullscreen) {
      v.webkitEnterFullscreen(); // iPhone
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const v = videoRef.current;
    if (!v || (e.target as HTMLElement).tagName === "INPUT") return;
    if (e.key === " " || e.key === "k") {
      e.preventDefault();
      togglePlay();
    } else if (e.key === "m") {
      toggleMute();
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.min(1, Math.max(0, (v.muted ? 0 : v.volume) + (e.key === "ArrowUp" ? 0.1 : -0.1)));
      onVolume(Math.round(next * 10) / 10);
      showControls();
    } else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      onSeek(Math.min(duration, Math.max(0, v.currentTime + (e.key === "ArrowRight" ? 5 : -5))));
      showControls();
    } else if (e.key === "f") {
      toggleFullscreen();
    }
  };

  const shown = controlsShown || !playing;
  const effectiveVolume = muted ? 0 : volume;
  const progress = duration ? (time / duration) * 100 : 0;

  return (
    <section className="py-8 md:py-10 lg:py-12" aria-labelledby="about-film-title">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <h2
          id="about-film-title"
          className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
          style={{ color: v1.ink.navy }}
        >
          Inside Trishala
        </h2>

        <div
          ref={wrapRef}
          tabIndex={0}
          role="region"
          aria-label="Trishala Laminates company film"
          onKeyDown={onKeyDown}
          onPointerMove={showControls}
          onPointerDown={showControls}
          onFocus={showControls}
          className="group relative mt-7 aspect-video w-full overflow-hidden rounded-2xl bg-black outline-none focus-visible:ring-4 focus-visible:ring-[#00B140]/40 md:mt-8 [&:fullscreen]:rounded-none"
          style={{ boxShadow: v1.shadow.soft }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-contain"
            poster={POSTER}
            muted
            playsInline
            preload="metadata"
            onClick={togglePlay}
            onPlay={() => {
              setPlaying(true);
              showControls();
            }}
            onPause={() => setPlaying(false)}
            onEnded={() => {
              setPlaying(false);
              userPausedRef.current = true;
            }}
            onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
            onDurationChange={(e) => setDuration(e.currentTarget.duration)}
            onVolumeChange={(e) => {
              setMuted(e.currentTarget.muted);
              setVolume(e.currentTarget.volume);
            }}
            onLoadedMetadata={(e) => {
              const v = e.currentTarget;
              setDuration(v.duration);
              // iOS keeps volume read-only (always 1): hide the slider there.
              const before = v.volume;
              v.volume = before === 1 ? 0.99 : 1;
              const settable = v.volume !== before;
              v.volume = before;
              setVolumeSettable(settable);
            }}
          >
            <source src={SRC_MOBILE} type="video/mp4" media="(max-width: 767px)" />
            <source src={SRC_DESKTOP} type="video/mp4" />
          </video>

          {/* Big centre play button when paused */}
          {!playing && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label={time > 0 && time >= duration - 0.1 ? "Replay video" : "Play video"}
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105 md:h-20 md:w-20"
              style={{ background: v1.green.primary }}
            >
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 md:h-9 md:w-9" fill="currentColor" aria-hidden>
                <path d="M8 5.5v13l11-6.5-11-6.5z" />
              </svg>
            </button>
          )}

          {/* "Tap for sound" hint while autoplaying muted */}
          {playing && muted && soundHint && (
            <button
              type="button"
              onClick={toggleMute}
              className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-black/60 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/75 md:right-4 md:top-4 md:text-sm"
            >
              <MuteIcon muted className="h-4 w-4" />
              Tap for sound
            </button>
          )}

          {/* Control bar */}
          <div
            className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 pb-2.5 pt-10 text-white transition-opacity duration-300 md:px-5 md:pb-4 ${
              shown ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={time}
              onChange={(e) => onSeek(Number(e.target.value))}
              aria-label="Seek"
              aria-valuetext={`${formatTime(time)} of ${formatTime(duration)}`}
              className="trishala-range block w-full"
              style={{ ["--fill" as string]: `${progress}%` }}
            />
            <div className="mt-1.5 flex items-center gap-1 md:mt-2 md:gap-2">
              <ControlButton onClick={togglePlay} label={playing ? "Pause" : "Play"}>
                {playing ? (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                    <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                    <path d="M8 5.5v13l11-6.5-11-6.5z" />
                  </svg>
                )}
              </ControlButton>

              <ControlButton onClick={toggleMute} label={muted ? "Unmute" : "Mute"}>
                <MuteIcon muted={muted || volume === 0} className="h-5 w-5" />
              </ControlButton>

              {volumeSettable && (
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={effectiveVolume}
                  onChange={(e) => onVolume(Number(e.target.value))}
                  aria-label="Volume"
                  aria-valuetext={`${Math.round(effectiveVolume * 100)}%`}
                  className="trishala-range w-16 sm:w-24"
                  style={{ ["--fill" as string]: `${effectiveVolume * 100}%` }}
                />
              )}

              <span className="ml-2 text-xs tabular-nums text-white/90 md:text-sm">
                {formatTime(time)} / {formatTime(duration)}
              </span>

              <ControlButton onClick={toggleFullscreen} label="Full screen" className="ml-auto">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                </svg>
              </ControlButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ControlButton({
  onClick,
  label,
  className = "",
  children,
}: {
  onClick: () => void;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/15 focus-visible:bg-white/20 focus-visible:outline-none ${className}`}
    >
      {children}
    </button>
  );
}

function MuteIcon({ muted, className }: { muted: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" stroke="none" />
      {muted ? (
        <path d="m16 9 6 6m0-6-6 6" />
      ) : (
        <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
      )}
    </svg>
  );
}

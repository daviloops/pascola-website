'use client';

import { useState } from 'react';
import type { JSX } from 'react';

interface VideoModalProps {
  src: string;
  posterSrc: string;
  posterAlt: string;
  posterYOffset?: number;
}

const VideoModal = ({ src, posterSrc, posterAlt, posterYOffset }: VideoModalProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center">
      {/* --- Thumbnail trigger --- */}
      <div
        onClick={() => setOpen(true)}
        className="group relative aspect-video w-full max-w-2xl cursor-pointer overflow-hidden rounded-lg shadow-lg"
      >
        <img
          src={posterSrc}
          alt={posterAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          style={{ objectPosition: `center ${posterYOffset}%` }}
        />
        {/* Play icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="h-16 w-16 opacity-90"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* --- DaisyUI modal --- */}
      <dialog id="video_modal" className={`modal ${open ? 'modal-open' : ''}`}>
        <div className="modal-box relative max-h-dvh max-w-4xl bg-black p-0">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="btn btn-sm btn-circle absolute top-2 right-2 z-10 bg-white/20 hover:bg-white/40"
          >
            ✕
          </button>

          {/* Video element */}
          {open && (
            <video
              className="h-auto max-h-dvh w-full rounded-b-lg"
              controls
              autoPlay
              playsInline
              poster={posterSrc}
            >
              <source src={src} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setOpen(false)}>close</button>
        </form>
      </dialog>
    </section>
  );
};

export { VideoModal };

'use client';

import { useEffect, useRef, useState } from 'react';

const VIDEO_ID = 'taVhjHijC4o';
const DISMISSED_KEY = 'popfab-home-video-dismissed';

export default function YouTubeVideoModal({ autoOpen = false, buttonLabel = 'Watch the POPFAB video' }: { autoOpen?: boolean; buttonLabel?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (autoOpen && window.sessionStorage.getItem(DISMISSED_KEY) !== 'true') setOpen(true);
  }, [autoOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  function close() {
    if (autoOpen) window.sessionStorage.setItem(DISMISSED_KEY, 'true');
    setOpen(false);
  }

  return <>
    <button type="button" onClick={() => setOpen(true)} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/[.06] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/[.1]">
      {buttonLabel}
    </button>
    <dialog
      ref={dialogRef}
      aria-label="POPFAB video"
      onCancel={(event) => { event.preventDefault(); close(); }}
      onClose={() => setOpen(false)}
      className="fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none overflow-hidden border-0 bg-transparent p-0 text-white backdrop:bg-black/40 backdrop:backdrop-blur-md"
    >
      <div className="relative flex h-full w-full items-center justify-center bg-transparent">
        <button type="button" autoFocus onClick={close} aria-label="Close video" className="absolute right-[6vw] top-[max(1rem,env(safe-area-inset-top))] z-10 inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 bg-black/65 px-4 text-sm font-semibold text-white shadow-lg backdrop-blur hover:bg-black/85 sm:right-[max(calc((100vw-64rem)/2),6vw)] sm:top-6">
          Close <span aria-hidden="true" className="ml-2 text-lg leading-none">×</span>
        </button>
        {open && <div className="relative aspect-video w-[min(88vw,138dvh,64rem)] overflow-hidden rounded-2xl bg-black shadow-[0_24px_100px_rgba(0,0,0,.65)] ring-1 ring-white/15">
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`}
            title="POPFAB video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>}
      </div>
    </dialog>
  </>;
}

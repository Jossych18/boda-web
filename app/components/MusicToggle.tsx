"use client";

import { useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  async function toggleMusic() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/musica.mp3?v=2" type="audio/mpeg" />
      </audio>

      <button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#3b2b20] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#5a4633]"
      >
        {playing ? "❚❚" : "▶"}
      </button>
    </>
  );
}
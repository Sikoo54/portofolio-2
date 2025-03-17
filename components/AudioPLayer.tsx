"use client";
import { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play().catch((err) => {
          console.warn("Autoplay diblokir oleh browser", err);
        });
      }
    };

    // Coba autoplay setelah halaman load
    playAudio();

    // Tambahkan event listener agar audio bisa diputar saat interaksi pertama
    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return <audio ref={audioRef} src="/audio/ambient.mp3" loop />;
};

export default AudioPlayer;

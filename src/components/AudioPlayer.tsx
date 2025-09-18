import { useEffect, useRef, useState } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.muted = true; // autoplay allowed when muted
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked even when muted:", err);
      });
    }
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;

    if (audioRef.current.muted) {
      audioRef.current.muted = false;
      audioRef.current.play(); // ensure sound starts after user interaction
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMute}
        className="px-4 py-2 rounded-full bg-primary text-white shadow-lg hover:scale-110 transition-transform neon-text"
      >
        {isMuted ? "🔇 Unmute" : "🔊 Mute"}
      </button>

      <audio ref={audioRef} loop playsInline>
        <source src="/audio/im-scared.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;

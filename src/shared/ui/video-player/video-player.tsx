import React, { useRef, useState } from "react";
import * as S from "./video-player.style";

export const CustomVideoPlayer: React.FC<{ src: string }> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Tipo específico para video
  const [isPlaying, setIsPlaying] = useState(false); // Estado de reproducción
  const [progress, setProgress] = useState(0); // Progreso del video
  const [volume, setVolume] = useState(1); // Volumen del video

  // Función para reproducir/pausar el video
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Actualizar el progreso del video
  const handleProgress = () => {
    if (videoRef.current) {
      const currentProgress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  // Control de la barra de progreso
  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime =
      (Number(event.target.value) / 100) * (videoRef.current?.duration || 0);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
    }
    setProgress(Number(event.target.value));
  };

  // Control de volumen
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  return (
    <S.VideoPlayerWrapper>
      <S.Video
        ref={videoRef}
        onTimeUpdate={handleProgress}
        src={src} // Cambia por tu archivo de video
        controls={false} // Desactiva los controles nativos
      />

      <S.ControlsWrapper>
        {/* Botón Play/Pause */}
        <S.Button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </S.Button>

        {/* Barra de progreso */}
        <S.Slider
          type="range"
          value={progress}
          onChange={handleSeek}
          min="0"
          max="100"
        />

        {/* Control de volumen */}
        <S.Slider
          type="range"
          value={volume}
          onChange={handleVolumeChange}
          min="0"
          max="1"
          step="0.1"
        />
      </S.ControlsWrapper>
    </S.VideoPlayerWrapper>
  );
};

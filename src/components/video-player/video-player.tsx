import React, { useRef, useState } from "react";
import styled from "styled-components";

const VideoPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ControlsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Slider = styled.input`
  margin: 0 10px;
  width: 150px;
`;

const Video = styled.video`
  width: 600px;
  height: auto;
  background-color: black;
`;

const CustomVideoPlayer: React.FC<{ src: string }> = ({ src }) => {
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
    <VideoPlayerWrapper>
      <Video
        ref={videoRef}
        onTimeUpdate={handleProgress}
        src={src} // Cambia por tu archivo de video
        controls={false} // Desactiva los controles nativos
      />

      <ControlsWrapper>
        {/* Botón Play/Pause */}
        <Button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </Button>

        {/* Barra de progreso */}
        <Slider
          type="range"
          value={progress}
          onChange={handleSeek}
          min="0"
          max="100"
        />

        {/* Control de volumen */}
        <Slider
          type="range"
          value={volume}
          onChange={handleVolumeChange}
          min="0"
          max="1"
          step="0.1"
        />
      </ControlsWrapper>
    </VideoPlayerWrapper>
  );
};

export default CustomVideoPlayer;

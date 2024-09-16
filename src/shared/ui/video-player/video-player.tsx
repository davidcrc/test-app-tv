import React, { ChangeEvent, useRef, useState } from "react";
import * as S from "./video-player.style";
import { parseDuration } from "./utils/parseDuration.util";
import {
  TbPlayerPlayFilled,
  TbPlayerPauseFilled,
  TbPlayerSkipForwardFilled,
  TbPlayerSkipBackFilled,
  TbArrowBackUp,
} from "react-icons/tb";

export const CustomVideoPlayer: React.FC<{
  src: string;
  onClose?: () => void;
}> = ({ src, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Tipo específico para video
  const sliderTimeRef = useRef<HTMLInputElement | null>(null); // Tipo específico para video
  const [isPlaying, setIsPlaying] = useState(true); // Estado de reproducción
  const [progress, setProgress] = useState(0); // Progreso del video
  const [showOverlay, setShowOverlay] = useState(true);

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
      if (sliderTimeRef.current) {
        sliderTimeRef.current.style.background = `linear-gradient(to right, #fff ${currentProgress}%, #666 ${currentProgress}%)`;
      }
    }
  };

  // Control de la barra de progreso
  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const seekTime =
      (Number(event.target.value) / 100) * (videoRef.current?.duration || 0);
    if (videoRef.current) videoRef.current.currentTime = seekTime;

    if (sliderTimeRef.current) {
      const value = event.target.value;
      sliderTimeRef.current.style.background = `linear-gradient(to right, #fff ${value}%, #666 ${value}%)`;
    }
    setProgress(Number(event.target.value));
  };

  const mouseMoveTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = () => {
    if (!showOverlay) setShowOverlay(true);
    if (mouseMoveTimeout.current) clearTimeout(mouseMoveTimeout.current);
    mouseMoveTimeout.current = setTimeout(() => {
      setShowOverlay(false);
    }, 2000);
  };

  return (
    <S.VideoPlayerWrapper>
      <S.Video
        onMouseMove={handleMouseMove}
        autoPlay
        ref={videoRef}
        onClick={togglePlayPause}
        onTimeUpdate={handleProgress}
        src={src}
      />
      {showOverlay && (
        <>
          <S.GoBackContainer>
            <S.Button onClick={onClose}>
              <TbArrowBackUp />
            </S.Button>
          </S.GoBackContainer>

          <S.VideoOverlay />
          <S.VideoPlayerControllers>
            <S.Button onClick={togglePlayPause}>
              <TbPlayerSkipBackFilled />
            </S.Button>
            <S.Button onClick={togglePlayPause}>
              {isPlaying ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled />}
            </S.Button>
            <S.Button onClick={togglePlayPause}>
              <TbPlayerSkipForwardFilled />
            </S.Button>
          </S.VideoPlayerControllers>

          <S.ControlsWrapperSliderVideo>
            <S.TimeVideo>
              {parseDuration(Number(videoRef.current?.currentTime))}
            </S.TimeVideo>
            <S.SliderTime
              ref={sliderTimeRef}
              type="range"
              value={progress}
              onChange={handleSeek}
              min="0"
              max="100"
            />
            <S.TimeVideo>
              {parseDuration(
                Number(videoRef.current?.duration) -
                  Number(videoRef.current?.currentTime)
              )}
            </S.TimeVideo>
          </S.ControlsWrapperSliderVideo>
        </>
      )}
    </S.VideoPlayerWrapper>
  );
};

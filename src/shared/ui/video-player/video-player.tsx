import { ChangeEvent, useEffect, useRef, useState } from "react";
import * as S from "./video-player.style";
import { parseDuration } from "./utils/parseDuration.util";
import {
  TbPlayerPlayFilled,
  TbPlayerPauseFilled,
  TbPlayerSkipForwardFilled,
  TbPlayerSkipBackFilled,
  TbArrowBackUp,
} from "react-icons/tb";
import { CustomVideoPlayerProps } from "./types";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";

export const CustomVideoPlayer = ({ src, onClose }: CustomVideoPlayerProps) => {
  const navigate = useNavigate();
  const { ref, focusKey, focusSelf } = useFocusable({
    autoRestoreFocus: true,
    saveLastFocusedChild: true,
  });

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

  const handleArrowPress = () => {
    handleMouseMove();
    return true;
  };

  const {
    ref: sliderTimeRef,
    focusSelf: focusSliderTime,
    focused: focusedSliderTime,
  } = useFocusable({
    onArrowPress: () => {
      handleMouseMove();
      return true;
    },
  });

  useEffect(() => {
    focusSelf();
  }, [focusKey, focusSelf]);

  const videoRef = useRef<HTMLVideoElement | null>(null); // Tipo específico para video
  const [isPlaying, setIsPlaying] = useState(true); // Estado de reproducción
  const [progress, setProgress] = useState(0); // Progreso del video
  const [showOverlay, setShowOverlay] = useState(true);

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
    if (!showOverlay) {
      setShowOverlay(true);
    }
    if (mouseMoveTimeout.current) clearTimeout(mouseMoveTimeout.current);
    mouseMoveTimeout.current = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);
  };
  return (
    <FocusContext.Provider value={focusKey}>
      <S.VideoPlayerWrapper ref={ref}>
        <S.Video
          onMouseMove={handleMouseMove}
          autoPlay
          ref={videoRef}
          onClick={togglePlayPause}
          onTimeUpdate={handleProgress}
          src={src}
        />
        <S.VideoOverlayContainer $show={showOverlay}>
          <S.VideoOverlay />
          <S.GoBackContainer>
            <S.StyledButton
              onArrowPress={handleArrowPress}
              onClick={() => {
                onClose?.();
                navigate(-1);
              }}
              onEnterPress={() => {
                onClose?.();
                navigate(-1);
              }}
            >
              <TbArrowBackUp />
            </S.StyledButton>
          </S.GoBackContainer>

          <S.VideoPlayerControllers>
            <S.StyledButton onArrowPress={handleArrowPress}>
              <TbPlayerSkipBackFilled />
            </S.StyledButton>
            <S.StyledButton
              focusKey="PLAY_BUTTON"
              onEnterPress={togglePlayPause}
              onArrowPress={handleArrowPress}
              onClick={togglePlayPause}
            >
              {isPlaying ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled />}
            </S.StyledButton>
            <S.StyledButton onArrowPress={handleArrowPress}>
              <TbPlayerSkipForwardFilled />
            </S.StyledButton>
          </S.VideoPlayerControllers>

          <S.ControlsWrapperSliderVideo>
            <S.TimeVideo>
              {videoRef.current
                ? parseDuration(Number(videoRef.current?.currentTime))
                : "00:00"}
            </S.TimeVideo>
            <S.SliderTime
              $focused={focusedSliderTime}
              onFocus={focusSliderTime}
              ref={sliderTimeRef}
              type="range"
              value={progress}
              onChange={handleSeek}
              min="0"
              max="100"
            />
            <S.TimeVideo>
              {videoRef.current
                ? parseDuration(
                    Number(videoRef.current.duration) -
                      Number(videoRef.current.currentTime)
                  )
                : "00:00"}
            </S.TimeVideo>
          </S.ControlsWrapperSliderVideo>
        </S.VideoOverlayContainer>
      </S.VideoPlayerWrapper>
    </FocusContext.Provider>
  );
};

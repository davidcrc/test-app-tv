import styled from "styled-components";

export const VideoPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ControlsWrapperSliderVideo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: absolute;
  bottom: 0;
  gap: 20px;
  width: 100%;
  height: 40px;
  padding: 40px 20px;
`;

export const VideoOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  background: linear-gradient(to top, #000 20%, transparent 100%);
`;

export const VideoPlayerControllers = styled.div`
  min-height: 60px;
  position: absolute;
  bottom: 80px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: nowrap;
`;

export const GoBackContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 30px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #000;
  color: #fff;
  width: 52px;
  height: 54px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    border: 1px solid #fff;
  }
`;

export const TimeVideo = styled.div`
  color: #fff;
`;

export const SliderTime = styled.input`
  -webkit-appearance: none; /* Elimina el estilo predeterminado en navegadores WebKit */
  width: 100%;
  height: 8px;
  background: #fff;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s;
  &:hover {
    background: #ccc;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: #45a049;
    }
  }
  &::-ms-thumb {
    width: 20px;
    height: 20px;
    background: #4caf50;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const Slider = styled.input`
  margin: 0 10px;
  width: 150px;
`;

export const Video = styled.video`
  width: 100%;
  height: auto;
  background-color: black;
`;

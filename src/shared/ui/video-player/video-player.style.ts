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
  width: 100%;
  height: 40px;
  padding: 20px;
`;

export const Button = styled.button`
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

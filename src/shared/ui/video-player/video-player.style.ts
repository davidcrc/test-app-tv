import styled from "styled-components";

export const VideoPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ControlsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Slider = styled.input`
  margin: 0 10px;
  width: 150px;
`;

export const Video = styled.video`
  width: 600px;
  height: auto;
  background-color: black;
`;

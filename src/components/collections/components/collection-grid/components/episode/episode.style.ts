import styled from "styled-components";

interface AssetBoxProps {
  $focused: boolean;
  $color: string;
}

export const EpisodeCard = styled.div<AssetBoxProps>`
  width: 100%;
  height: 100%;
  min-height: 250px;
  border-color: #007da5;
  border-style: solid;
  border-width: ${({ $focused }) => ($focused ? "6px" : 0)};
  box-sizing: border-box;
  border-radius: 7px;
  transition: transform 0.4s ease-in-out;
  transform: scale(${({ $focused }) => ($focused ? "1.05" : "1")});
`;

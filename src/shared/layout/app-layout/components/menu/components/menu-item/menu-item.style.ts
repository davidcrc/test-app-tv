import styled from "styled-components";

interface MenuItemBoxProps {
  $focused: boolean;
}

export const MenuItemBox = styled.div<MenuItemBoxProps>`
  width: 48px;
  height: 51px;
  border-color: #01b6d1;
  border-style: solid;
  border-width: ${({ $focused }) => ($focused ? "6px" : 0)};
  box-sizing: border-box;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 37px;
`;

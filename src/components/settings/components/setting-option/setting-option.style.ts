import styled from "styled-components";

export const Options = styled.div<{ $focused: boolean; $isSelected: boolean }>`
  padding: 8px;
  font-size: 24px;
  border: 4px solid ${({ $focused }) => ($focused ? "#01B6D1" : "transparent")};
  outline: none;
  width: fit-content;
  padding: 9px 30px;
  color: ${({ $focused, $isSelected }) =>
    $focused || $isSelected ? "#01B6D1" : "#fff"};
  font-weight: ${({ $focused }) => ($focused ? "bold" : "regular")};
  border-radius: 4px;
  &:focus {
    border-color: #01b6d1;
  }
`;

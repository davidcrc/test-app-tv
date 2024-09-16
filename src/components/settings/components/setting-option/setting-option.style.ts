import styled from "styled-components";

export const Options = styled.div<{ $focused: boolean }>`
  padding: 8px;
  font-size: 24px;
  border: 2px solid ${({ $focused }) => ($focused ? "#01B6D1" : "transparent")};
  outline: none;
  width: fit-content;
  &:focus {
    border-color: #01b6d1;
  }
`;

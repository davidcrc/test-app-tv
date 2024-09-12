import React, { FocusEvent, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  focused: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  width: 80%;
  height: 50px;
  font-size: 24px; /* Tamaño de texto grande para TV */
  padding: 10px;
  margin: 20px 0;
  border-radius: 10px;
  border: 2px solid ${({ focused }) => (focused ? "#01B6D1" : "#ccc")};
  outline: none;
  color: #fff;
  background-color: #333;

  &:focus {
    border-color: #01b6d1;
  }
`;

const Input: React.FC<
  InputHTMLAttributes<HTMLInputElement> & StyledInputProps
> = (props) => {
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    props.onFocus?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    props.onBlur?.(e);
  };

  return (
    <StyledInput
      {...props}
      focused={props.focused}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default Input;

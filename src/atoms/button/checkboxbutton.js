import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Body2 } from "../../atoms/text";

const Checkboxbutton = ({ setIsChecked, body }) => {
  return (
    <label>
      <Input onChange={setIsChecked} type="checkbox" />
      <Body2 color={COLOR.WHITE}>{body}</Body2>
    </label>
  );
};

export default Checkboxbutton;

const Input = styled.input`
  appearance: none;
  border-color: transparent;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: ${COLOR.GRAY700};
  border-radius: 8px;
  width: 24px;
  height: 24px;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='gray90' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${COLOR.BRANDCOLOR};
    border-radius: 8px;
    width: 24px;
    height: 24px;
  }
`;

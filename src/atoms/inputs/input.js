import React, { useState, useMemo } from "react";
import styled from "styled-components";

const Input = () => {
  const [text, setText] = useState("");

  const onChangeTextHandler = (e) => {
    setText(e.target.value);
  };

  const getText = (text) => {
    return text;
  };
  const showText = useMemo(() => getText(text), [text]);

  return (
    <InputContainer
      value={showText}
      onChange={onChangeTextHandler}
    ></InputContainer>
  );
};
export default Input;
/*
const Layout = styled.div`
  display: flex;
`;
*/
const InputContainer = styled.input`
  width: 100%;
  // height: 100%;
  display: flex;
  background-color: #2e2f36;
  border: none;
  outline: none;
  // margin-left: 10px;
  z-index: 1;
  font: inherit;
  font-weight: 500;
  color: #ffffff;
  font-size: 1.25rem;
`;

import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Body1 } from "../text";

const Textbutton = ({
  text = "아니",
  backgroundColor = COLOR.BRANDCOLOR,
  width = "100%",
  height = "3.25rem",
  margin = "1rem 0 0.5rem 0",
  isDisabled = false,
  onClick,
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      height={height}
      width={width}
      margin={margin}
      disabled={isDisabled}
      onClick={onClick}
    >
      <Body1>{text}</Body1>
    </Container>
  );
};
export default Textbutton;

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 1.25rem;
`;

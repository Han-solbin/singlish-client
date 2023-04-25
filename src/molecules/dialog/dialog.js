import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Title1, Body3 } from "../../atoms/text";
import { Textbutton } from "../../atoms/button";
import Exclamationmark from "../../resources/image/exclamationmark.png";

const Dialog = ({ children1, children2 }) => {
  return (
    <Container>
      <ImageContainer src={Exclamationmark}></ImageContainer>
      <Title1 color={COLOR.WHITE} margin={0}>
        {children1}
      </Title1>
      <Body3 color={COLOR.GRAY300} margin={0}>
        {children2}
      </Body3>
      <Textbutton text={"확인"} width="100px"></Textbutton>
    </Container>
  );
};

export default Dialog;

const ImageContainer = styled.img`
  width: 100%;
  height: 80px;
  object-fit: contain;
  margin: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-block-start: 0em;
  margin-block-end: 0em;
  padding: 1rem 1rem 1rem 1rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: none;
  border-radius: 1.25rem;
`;

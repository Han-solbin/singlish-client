import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Title1, Subtitle2, Body2 } from "../../atoms/text";

const Categorythumbnail = ({ title, subtitle, description }) => {
  return (
    <Container>
      <Title1 margin={"0"} color={COLOR.WHITE} text-align="center">
        {title}
      </Title1>
      <Subtitle2 margin={"0"} color={COLOR.GRAY100}>
        {subtitle}
      </Subtitle2>
      <Body2 margin={"0"} color={COLOR.GRAY300} text-align="left">
        {description}
      </Body2>
    </Container>
  );
};
export default Categorythumbnail;

const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  text-align: left;
  word-break: keep-all;
`;

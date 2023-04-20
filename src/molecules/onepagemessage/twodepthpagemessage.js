import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Title1, Body2 } from "../../atoms/text";

const Twodepthpagemessage = ({ children1, children2 }) => {
  return (
    <Container>
      <Title1 color={COLOR.WHITE} margin={0}>
        {children1}
      </Title1>
      <Body2 color={COLOR.WHITE} margin={0}>
        {children2}
      </Body2>
    </Container>
  );
};

export default Twodepthpagemessage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  margin-block-start: 0em;
  margin-block-end: 0em;
  padding: 1rem 1rem 2.25rem 1rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: none;
  border-radius: 1.25rem;
`;

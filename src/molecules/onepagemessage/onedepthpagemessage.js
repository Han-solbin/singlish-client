import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Title1 } from "../../atoms/text";

const Onedepthpagemessage = ({ children }) => {
  return (
    <Container>
      <Title1 color={COLOR.WHITE} margin={0}>
        {children}
      </Title1>
    </Container>
  );
};

export default Onedepthpagemessage;

const Container = styled.div`
  display: flex;
  width: auto;
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

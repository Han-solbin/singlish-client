import React from "react";
import styled from "styled-components";
import { Singlishlogo } from "../../resources/image";

const Singlishverticallogo = () => {
  return (
    <Container>
      <Singlishlogo></Singlishlogo>
      <Text>singlish</Text>
    </Container>
  );
};

export default Singlishverticallogo;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  aligh-items: center;
`;

const Text = styled.text`
  color: #fee500;
  font-size: 1.75rem;
  letter-spacing: -0.05rem;
  font-weight: 800;
  left-margin: 0.5rem;
`;

import React from "react";
import styled from "styled-components";
import { Singlishlogo } from "../../resources/image";
import { COLOR } from "../../constants";

const Singlishverticallogo = ({}) => {
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

  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Text = styled.text`
  color: #fee500;
  font-size: 1.75rem;
  letter-spacing: -0.05rem;
  font-weight: 800;
`;

import React from "react";
import styled from "styled-components";
import { Singlishlogo } from "../../resources/image";

const Singlishhorizontallogo = () => {
  return (
    <Container>
      <Singlishlogo></Singlishlogo>
      <Text>singlish</Text>
    </Container>
  );
};

export default Singlishhorizontallogo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Text = styled.text`
  color: #fee500;
  font-size: 1.75rem;
  letter-spacing: -0.05rem;
  font-weight: 800;
`;

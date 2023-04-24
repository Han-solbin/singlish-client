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
  flex-direction: row;
  aligh-items: center;
  justify-content: center;
`;

const Text = styled.text`
  color: #fee500;
  font-size: 1.75rem;
  letter-spacing: -0.05rem;
  font-weight: 800;
  margin-left: 0.25rem;
  line-height: 20px;
`;

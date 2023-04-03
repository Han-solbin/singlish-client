import React from "react";
import styled from "styled-components";

import { Title1 } from "../atoms/text";

const WelcomePage = () => {
  return (
    <Container>
      <Title1>WelcomePage</Title1>
    </Container>
  );
};
export default WelcomePage;

const Container = styled.div`
  width: 100%;
`;

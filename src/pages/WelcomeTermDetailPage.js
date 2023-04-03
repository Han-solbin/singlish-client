import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Title1 } from "../atoms/text";

const WelcomeTermDetailPage = () => {
  const { termId } = useParams();
  return (
    <Container>
      <Title1>WelcomeTermDetailPage{termId}</Title1>
    </Container>
  );
};
export default WelcomeTermDetailPage;

const Container = styled.div`
  width: 100%;
`;

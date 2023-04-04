import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Title1 } from "../atoms/text";

const PracticeSuccessPage = () => {
  const { courseId } = useParams();
  return (
    <Container>
      <Title1>PracticeSuccessPage{courseId}</Title1>
    </Container>
  );
};
export default PracticeSuccessPage;

const Container = styled.div`
  width: 100%;
`;

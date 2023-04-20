import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Navigationheader } from "../molecules/navigation";
import { Title1 } from "../atoms/text";

const PracticeDetailPage = () => {
  const { courseId, wordId } = useParams();
  return (
    <Container>
      <Navigationheader>{courseId}</Navigationheader>
      <Title1>{wordId}</Title1>
    </Container>
  );
};
export default PracticeDetailPage;

const Container = styled.div`
  width: 100%;
`;

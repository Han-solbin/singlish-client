import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Title1 } from "../atoms/text";

const CoursesDetailPage = () => {
  const { courseId } = useParams();
  return (
    <Container>
      <Title1>CoursesDetailPage{courseId}</Title1>
    </Container>
  );
};
export default CoursesDetailPage;

const Container = styled.div`
  width: 100%;
`;

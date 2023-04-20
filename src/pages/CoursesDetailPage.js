import React from "react";
//import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Navigationheader } from "../molecules/navigation";

const CoursesDetailPage = () => {
  //const { courseId } = useParams();
  return (
    <Container>
      <Navigationheader>클래스 소개</Navigationheader>
    </Container>
  );
};
export default CoursesDetailPage;

const Container = styled.div`
  width: 100%;
`;

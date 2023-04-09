import React from "react";
import styled from "styled-components";

import { Title1 } from "../atoms/text";
import { Bottomonebuttoncontainer } from "../molecules/buttoncontainer";

const CoursesSuccessPage = () => {
  return (
    <Container>
      <Title1>CoursesSuccessPage</Title1>
      <Bottomonebuttoncontainer
        content={"지금 수강하러 가기"}
      ></Bottomonebuttoncontainer>
    </Container>
  );
};
export default CoursesSuccessPage;

const Container = styled.div`
  width: 100%;
`;

import React from "react";
import styled from "styled-components";

import { Bottomnavigation } from "../molecules/navigation";

const PracticePage = () => {
  return (
    <Container>
      <Bottomnavigation></Bottomnavigation>
    </Container>
  );
};
export default PracticePage;

const Container = styled.div`
  width: 100%;
`;

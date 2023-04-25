import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Singlishhorizontallogo } from "../../atoms/logocontainer";
import { Searchicon } from "../../resources/icon";

const Coursesheader = () => {
  return (
    <Container>
      <Singlishhorizontallogo></Singlishhorizontallogo>
      <Searchicon color={COLOR.WHITE}></Searchicon>
    </Container>
  );
};

export default Coursesheader;

const Container = styled.div`
  display: flex;
  height: 52px;
  padding: 0rem 1rem 0rem 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLOR.BACKGROUND};
`;

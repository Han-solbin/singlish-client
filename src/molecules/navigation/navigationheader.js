import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Subtitle2 } from "../../atoms/text";
import { Previouspageicon } from "../../resources/icon";

const Navigationheader = ({ children }) => {
  return (
    <Container>
      <Previouspageicon></Previouspageicon>
      <Subtitle2 margin="0" color={COLOR.WHITE}>
        {children}
      </Subtitle2>
      <Previouspageicon color={COLOR.BACKGROUND}></Previouspageicon>
    </Container>
  );
};

export default Navigationheader;

const Container = styled.div`
  display: flex;
  height: 52px;
  padding: 0rem 1rem 0rem 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLOR.BACKGROUND};
`;

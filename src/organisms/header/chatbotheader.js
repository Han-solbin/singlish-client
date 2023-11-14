import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Title2 } from "../../atoms/text";

const Chatbotheader = () => {
  return (
    <Container>
      <Title2 margin="0" color={COLOR.WHITE}>
        챗봇
      </Title2>
      <></>
    </Container>
  );
};
export default Chatbotheader;

const Container = styled.div`
  display: flex;
  height: 52px;
  padding: 0rem 1rem 0rem 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLOR.BACKGROUND};
`;

import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Title2 } from "../../atoms/text";
import { Settingicon } from "../../resources/icon";

const Practiceheader = () => {
  return (
    <Container>
      <Title2 margin="0" color={COLOR.WHITE}>
        학습
      </Title2>
      <Settingicon color={COLOR.BACKGROUND}></Settingicon>
    </Container>
  );
};

export default Practiceheader;

const Container = styled.div`
  display: flex;
  height: 52px;
  padding: 0rem 1rem 0rem 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLOR.BACKGROUND};
`;

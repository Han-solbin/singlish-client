import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Title2 } from "../../atoms/text";
import { Settingicon } from "../../resources/icon";

const Accountheader = () => {
  return (
    <Container>
      <Title2 margin="0" color={COLOR.WHITE}>
        마이페이지
      </Title2>
      <Settingicon color={COLOR.WHITE}></Settingicon>
    </Container>
  );
};
export default Accountheader;

const Container = styled.div`
  display: flex;
  height: 52px;
  justify-content: space-between;
  padding: 0rem 1rem 0rem 1rem;
  align-items: center;
  background-color: ${COLOR.BACKGROUND};
`;

import React from "react";
import styled from "styled-components";

import { Title1 } from "../atoms/text";
import { Bottomonebuttoncontainer } from "../molecules/buttoncontainer";

const WelcomeTermPage = () => {
  return (
    <Container>
      <Title1>WelcomeTermPage</Title1>
      <Bottomonebuttoncontainer
        content={"동의합니다"}
      ></Bottomonebuttoncontainer>
    </Container>
  );
};
export default WelcomeTermPage;

const Container = styled.div`
  width: 100%;
`;

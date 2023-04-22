import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Title1 } from "../atoms/text";
import { Bottomonebuttoncontainer } from "../molecules/buttoncontainer";
import { Textbutton } from "../atoms/button";

const WelcomeTermDetailPage = () => {
  const { termId } = useParams();
  return (
    <Container>
      <Title1>WelcomeTermDetailPage{termId}</Title1>
      <Bottomonebuttoncontainer></Bottomonebuttoncontainer>
      <Textbutton></Textbutton>
    </Container>
  );
};
export default WelcomeTermDetailPage;

const Container = styled.div`
  width: 100%;
`;

import React from "react";
import styled from "styled-components";

import { COLOR } from "../constants";
import { Headline } from "../atoms/text";
import { Loginbottombuttoncontainer } from "../domain/signin";
import { Singlishlogo } from "../resources/image";
import Welcomeimage from "../resources/image/welcomeimage.jpg";

const WelcomePage = () => {
  return (
    <ContentContainer>
      <ImageContainer src={Welcomeimage}></ImageContainer>
      <Container>
        <BodyContainer>
          <Headline color={COLOR.WHITE}>
            싱글리시와
            <br />
            매일매일 혼자서도
            <br />
            꾸준히 영어공부해요
          </Headline>
          <Singlishlogo size="80"></Singlishlogo>
        </BodyContainer>
        <Loginbottombuttoncontainer></Loginbottombuttoncontainer>
      </Container>
    </ContentContainer>
  );
};
export default WelcomePage;

const ImageContainer = styled.img`
  width: 100vw;
  height: 240px;
  object-fit: cover;
  overflow: hidden;
`;

const BodyContainer = styled.div`
  width: auto;
  height: 100%;
  padding: 1rem;
`;

const ContentContainer = styled.div`
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

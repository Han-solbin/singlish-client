import React from "react";
import styled from "styled-components";

import { Navigationheader } from "../molecules/navigation";
import { Onedepthpagemessage } from "../molecules/onepagemessage";
import { Bottomonebuttoncontainer } from "../molecules/buttoncontainer";
import Checkmark from "../resources/image/checkmark.png";

const WelcomeTermPage = () => {
  return (
    <Container>
      <Navigationheader>약관 동의</Navigationheader>
      <Onedepthpagemessage>
        더 나은 학습을 위해 싱글리시 약관에 동의해주세요
      </Onedepthpagemessage>
      <ImageContainer src={Checkmark}></ImageContainer>
      <Bottomonebuttoncontainer
        content={"동의합니다"}
      ></Bottomonebuttoncontainer>
    </Container>
  );
};
export default WelcomeTermPage;

const ImageContainer = styled.img`
  width: 100%;
  height: 240px;
  object-fit: contain;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

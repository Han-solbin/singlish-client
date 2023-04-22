import React from "react";
import styled from "styled-components";

import { Twodepthpagemessage } from "../molecules/onepagemessage";
import { Bottomonebuttoncontainer } from "../molecules/buttoncontainer";
import { Navigationheader } from "../molecules/navigation";
import Trophy from "../resources/image/trophy.png";

const PracticeSuccessPage = () => {
  return (
    <>
      <Navigationheader>코스 완료</Navigationheader>
      <Container>
        <Twodepthpagemessage
          children1={"코스 완주를 축하드려요!"}
          children2={"빛나는 노력으로 이 코스의 단어를 모두 성공했어요."}
        ></Twodepthpagemessage>
        <ImageContainer src={Trophy}></ImageContainer>
        <Bottomonebuttoncontainer
          content={"완료하기"}
        ></Bottomonebuttoncontainer>
      </Container>
    </>
  );
};
export default PracticeSuccessPage;

const Container = styled.div`
  width: 100%;
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 360px;
  object-fit: contain;
`;

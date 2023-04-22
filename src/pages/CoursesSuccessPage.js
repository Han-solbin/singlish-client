import React from "react";
import styled from "styled-components";

import { Twodepthpagemessage } from "../molecules/onepagemessage";
import { Bottomonebuttoncontainer } from "../molecules/buttoncontainer";
import { Navigationheader } from "../molecules/navigation";
import Checkmark from "../resources/image/checkmark.png";

const CoursesSuccessPage = () => {
  return (
    <>
      <Navigationheader>수강 신청</Navigationheader>
      <Container>
        <Twodepthpagemessage
          children1={"이 코스를 수강신청했어요!"}
          children2={"지금부터 학습 페이지에서 연습할 수 있어요."}
        ></Twodepthpagemessage>
        <ImageContainer src={Checkmark}></ImageContainer>
        <Bottomonebuttoncontainer
          content={"지금 수강하러 가기"}
        ></Bottomonebuttoncontainer>
      </Container>
    </>
  );
};
export default CoursesSuccessPage;

const Container = styled.div`
  width: 100%;
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 360px;
  object-fit: contain;
`;

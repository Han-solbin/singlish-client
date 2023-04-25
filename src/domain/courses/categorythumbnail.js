import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Title1, Body3, Caption2 } from "../../atoms/text";
import ThumbnailImage from "../../resources/image/basiccategoryimage.png";

const Categorythumbnail = () => {
  return (
    <Container>
      <ImageContainer src={ThumbnailImage}></ImageContainer>
      <Title1 margin={"0"} color={COLOR.WHITE}>
        기초단어
      </Title1>
      <Body3 margin={"0"} color={COLOR.GRAY100}>
        영어 발음을 차근차근 연습하고 싶은 사람들에게 알맞는 기초적인 클래스들이
        준비되어 있어요.
      </Body3>
      <Caption2 margin={"0"} color={COLOR.GRAY300}>
        기초단어 카테고리에 총 4개의 수업이 존재해요.
      </Caption2>
    </Container>
  );
};
export default Categorythumbnail;

const ImageContainer = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
`;

const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  text-align: center;
  word-break: keep-all;
`;

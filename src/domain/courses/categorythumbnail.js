import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Title1, Body3, Caption2 } from "../../atoms/text";

const Categorythumbnail = ({ title, description, imgUrl, courseNum }) => {
  console.log({ imgUrl });
  return (
    <Container>
      <ImageContainer src={imgUrl}></ImageContainer>
      <Title1 margin={"0"} color={COLOR.WHITE}>
        {title}
      </Title1>
      <Body3 margin={"0"} color={COLOR.GRAY100}>
        {description}
      </Body3>
      <Caption2 margin={"4"} color={COLOR.GRAY300}>
        {title} 카테고리에 총 {courseNum}개의 수업이 존재해요.
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
  padding: 2rem 1rem;
  text-align: left;
  word-break: keep-all;
`;

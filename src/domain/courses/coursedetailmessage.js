import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Title1, Subtitle2, Body2 } from "../../atoms/text";

const Categorythumbnail = () => {
  return (
    <Container>
      <Title1 margin={"0"} color={COLOR.WHITE}>
        가장 달콤한 것, 사랑
      </Title1>
      <Subtitle2 margin={"0"} color={COLOR.GRAY100}>
        다채로운 애정표현
      </Subtitle2>
      <Body2 margin={"0"} color={COLOR.GRAY300}>
        종잣돈을 모으기 위해 가장 먼저 해야 하는 일은 바로 자신의 소비 패턴을
        파악하는 일입니다. 급여는 얼마나 받는지, 받은 급여는 어디에 얼마나
        쓰는지.
      </Body2>
    </Container>
  );
};
export default Categorythumbnail;

const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  text-align: center;
  word-break: keep-all;
`;

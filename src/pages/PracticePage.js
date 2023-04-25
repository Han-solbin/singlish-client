import React from "react";
import styled from "styled-components";

import { COLOR } from "../constants";
import { Practiceheader } from "../organisms/header";
import { Bottomnavigation } from "../molecules/navigation";
import { Advertisementmessage } from "../domain/advertisement";
import { Singlishlogo } from "../resources/image";
import { Title2 } from "../atoms/text";

const PracticePage = () => {
  return (
    <Container>
      <Practiceheader></Practiceheader>
      <AdvertisementContainer>
        <Advertisementmessage
          children1={"싱글리시 사용 방법 알아보기 "}
          children2={"혼자서도 영어 연습 싱글리시와 지금 시작해봐요"}
        ></Advertisementmessage>
        <Singlishlogo size={"48px"}></Singlishlogo>
      </AdvertisementContainer>
      <Title2 margin={"1rem"} color={COLOR.WHITE}>
        수강중인 코스
      </Title2>
      <Bottomnavigation></Bottomnavigation>
    </Container>
  );
};
export default PracticePage;

const AdvertisementContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  background-color: #454a55;
  padding: 1rem;
`;

const Container = styled.div`
  width: 100%;
  flex-direction: column;
`;

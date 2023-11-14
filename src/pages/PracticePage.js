/* eslint-disable no-console */
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { SubscribePreview } from "../domain/practice";
import { COLOR } from "../constants";
import { Practiceheader } from "../organisms/header";
import { Bottomnavigation } from "../molecules/navigation";
import { Advertisementmessage } from "../domain/advertisement";
import { Title2 } from "../atoms/text";
import { useAxiosGet } from "../hooks/queries";

const PracticePage = () => {
  const { userId } = useParams();
  const randomNum = Math.floor(Math.random() * 2);
  const {
    loading: loading_1,
    data: advertisement,
    error: error_1,
  } = useAxiosGet(`http://localhost:8081/api/v1/advertisements/${randomNum}`);
  const { loading: loading_2, data: subscribes, error: error_2 } = useAxiosGet(
    `http://localhost:8081/api/v1/users/${userId}/courses`
  );
  if (loading_1) {
    console.log("loading...");
  }
  if (error_1) {
    console.log("error!");
  }
  if (loading_2) {
    console.log("loading...");
  }
  if (error_2) {
    console.log("error!");
  }
  console.log(advertisement);
  console.log(subscribes);
  if (advertisement && subscribes)
    return (
      <Container>
        <Practiceheader></Practiceheader>
        <AdvertisementContainer>
          <Advertisementmessage
            title={advertisement.title}
            body={advertisement.body}
          ></Advertisementmessage>
          <ImgContainer src={advertisement.imgUrl}></ImgContainer>
        </AdvertisementContainer>
        <Title2 margin={"1rem"} color={COLOR.WHITE}>
          수강중인 코스
        </Title2>
        <SubscribesContainer>
          {subscribes.map((it) => (
            <SubscribePreview
              key={it.id}
              id={it.id}
              title={it.courseTitle}
              subtitle={it.courseSubtitle}
              activated={!it.activated}
              text={"학습하기"}
              status={"학습중"}
            ></SubscribePreview>
          ))}
        </SubscribesContainer>
        <Bottomnavigation></Bottomnavigation>
      </Container>
    );
};
export default PracticePage;

const SubscribesContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0rem 1rem;
`;

const ImgContainer = styled.img`
  align-items: center;
  height: 48px;
  width: 48px;
`;

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
  height: 115vh;
  flex-direction: column;
`;

/* eslint-disable no-console */
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { PATH } from "../constants";
import { useAxiosGet } from "../hooks/queries";
import { Agreebutton } from "../domain/signin";
import { Navigationheader } from "../molecules/navigation";
import { Onedepthpagemessage } from "../molecules/onepagemessage";
import { Bottomonebuttoncontainer } from "../molecules/buttoncontainer";
import Checkmark from "../resources/image/checkmark.png";

const WelcomeTermPage = () => {
  const navigate = useNavigate();
  const { loading, data: terms, error } = useAxiosGet(
    `http://localhost:8081/api/v1/terms`
  );
  const [service, setService] = React.useState(false);
  const [marketing, setMarketing] = React.useState(false);
  const [personal, setPersonal] = React.useState(false);
  const [push, setPush] = React.useState(false);
  if (loading) {
    console.log("loading...");
  }
  if (error) {
    console.log("error!");
  }
  const handleClick = () => {
    navigate(`${PATH.COURSES}/0`);
  };
  if (terms)
    return (
      <Container>
        <Navigationheader>약관 동의</Navigationheader>
        <Onedepthpagemessage>
          더 나은 학습을 위해 싱글리시 약관에 동의해주세요
        </Onedepthpagemessage>
        <ImageContainer src={Checkmark}></ImageContainer>
        <Agreebutton
          isChecked={service}
          setIsChecked={setService}
          body={"(필수) 서비스 이용약관입니다"}
        ></Agreebutton>
        <Agreebutton
          isChecked={personal}
          setIsChecked={setPersonal}
          body={"(필수) 만14세 이상입니다"}
        ></Agreebutton>
        <Agreebutton
          isChecked={marketing}
          setIsChecked={setMarketing}
          body={"(선택) 이메일, SMS 마케팅 수신 동의"}
        ></Agreebutton>
        <Agreebutton
          isChecked={push}
          setIsChecked={setPush}
          body={"(선택) 앱 내 푸시알림 수신 동의"}
        ></Agreebutton>
        <ContainerBlock></ContainerBlock>
        <Bottomonebuttoncontainer
          disabled={!service && !personal}
          content={"동의합니다"}
          onClick={handleClick}
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
const ContainerBlock = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

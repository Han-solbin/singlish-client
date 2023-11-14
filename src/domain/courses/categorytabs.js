import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PATH, COLOR, LNB } from "../../constants";
import { Body2 } from "../../atoms/text";

const Categorytabs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const setCurrentLocation = () => {
    for (const key in LNB) {
      if (pathname.includes(LNB[key])) {
        return LNB[key];
      }
    }
  };
  const [isCurrent, setIsCurrent] = useState(setCurrentLocation);
  const handleCategory0 = () => {
    setIsCurrent(LNB.CATEGORY1);
    navigate(PATH.CATEGORY1);
    window.location.reload();
  };
  const handleCategory1 = () => {
    setIsCurrent(LNB.CATEGORY2);
    navigate(PATH.CATEGORY2);
    window.location.reload();
  };
  const handleCategory2 = () => {
    setIsCurrent(LNB.CATEGORY3);
    navigate(PATH.CATEGORY3);
    window.location.reload();
  };
  const handleCategory3 = () => {
    setIsCurrent(LNB.CATEGORY4);
    navigate(PATH.CATEGORY4);
    window.location.reload();
  };

  return (
    <Container>
      <ButtonWrapper isCurrent={isCurrent} onClick={handleCategory0}>
        <Body2 margin={"0.5rem"} color={COLOR.WHITE}>
          생활영어
        </Body2>
        <Barcontainer
          color={`${
            isCurrent === LNB.CATEGORY1 ? COLOR.BRANDCOLOR : COLOR.GRAY700
          }`}
        ></Barcontainer>
      </ButtonWrapper>
      <ButtonWrapper isCurrent={isCurrent} onClick={handleCategory1}>
        <Body2 margin={"0.5rem"} color={COLOR.WHITE}>
          전문영역
        </Body2>
        <Barcontainer
          color={`${
            isCurrent === LNB.CATEGORY2 ? COLOR.BRANDCOLOR : COLOR.GRAY700
          }`}
        ></Barcontainer>
      </ButtonWrapper>
      <ButtonWrapper isCurrent={isCurrent} onClick={handleCategory2}>
        <Body2 margin={"0.5rem"} color={COLOR.WHITE}>
          취미생활
        </Body2>
        <Barcontainer
          color={`${
            isCurrent === LNB.CATEGORY3 ? COLOR.BRANDCOLOR : COLOR.GRAY700
          }`}
        ></Barcontainer>
      </ButtonWrapper>
      <ButtonWrapper isCurrent={isCurrent} onClick={handleCategory3}>
        <Body2 margin={"0.5rem"} color={COLOR.WHITE}>
          심리상담
        </Body2>
        <Barcontainer
          color={`${
            isCurrent === LNB.CATEGORY4 ? COLOR.BRANDCOLOR : COLOR.GRAY700
          }`}
        ></Barcontainer>
      </ButtonWrapper>
    </Container>
  );
};

export default Categorytabs;

const Barcontainer = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.color};
`;

const ButtonWrapper = styled.button`
  width: inline-block;
  background-color: #2e2f36;
  border: none;
  padding: 0px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: auto;
  padding: 0px;
`;

/*
const Activatedcolor =
    isCurrent === GNB.CHATBOTSINGLY ? COLOR.WHITE : COLOR.GRAY500;
  return (
    <Container onClick={handleChatpage}>
      <Textbubbleicon color={Activatedcolor}></Textbubbleicon>
      <Caption2 color={Activatedcolor}>챗봇</Caption2>
    </Container>
  );*/

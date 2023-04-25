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

  const handleBasiccategory = () => {
    setIsCurrent(LNB.BASICCOURSES);
    navigate(PATH.BASICCOURSES);
    console.log("살려줘");
  };

  const handleCommoncategory = () => {
    setIsCurrent(LNB.COMMONCOURSES);
    navigate(PATH.COMMONCOURSES);
  };

  const handleApplicationcategory = () => {
    setIsCurrent(LNB.APPLICATIONCOURSES);
    navigate(PATH.APPLICATIONCOURSES);
  };

  return (
    <Container>
      <ButtonWrapper isCurrent={isCurrent} onClick={handleBasiccategory}>
        <Body2 margin={"0.5rem"} color={COLOR.WHITE}>
          기초단어
        </Body2>
        <Barcontainer></Barcontainer>
      </ButtonWrapper>
      <ButtonWrapper isCurrent={isCurrent} onClick={handleCommoncategory}>
        <Body2 margin={"0.5rem"} color={COLOR.WHITE}>
          생활단어
        </Body2>
        <Barcontainer></Barcontainer>
      </ButtonWrapper>
      <ButtonWrapper isCurrent={isCurrent} onClick={handleApplicationcategory}>
        <Body2 margin={"0.5rem"} color={COLOR.WHITE}>
          응용단어
        </Body2>
        <Barcontainer></Barcontainer>
      </ButtonWrapper>
    </Container>
  );
};

export default Categorytabs;

const Barcontainer = styled.div`
  width: 100%;
  height: 2px;
  background-color: #fee500;
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

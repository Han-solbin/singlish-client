import React from "react";
import styled from "styled-components";
import { Specialsubtitle1, Subtitle2 } from "../../atoms/text";
import { COLOR } from "../../constants";

const WordDetail = ({ num, engWord, korWord, diacritic }) => {
  return (
    <Container>
      <NumberContainer>
        <Specialsubtitle1 color={COLOR.BRANDCOLOR}>{num}</Specialsubtitle1>
      </NumberContainer>
      <WordContainer>
        <Specialsubtitle1 color={COLOR.WHITE}>{engWord}</Specialsubtitle1>
      </WordContainer>
      <KorContainer>
        <Subtitle2 color={COLOR.GRAY100}>{korWord}</Subtitle2>
      </KorContainer>
    </Container>
  );
};

export default WordDetail;

const NumberContainer = styled.div`
  display: flex;
  height: 20px;
  width: 24px;
  margin: auto 0rem auto 1rem;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  background-color: #454a55;
  border-radius: 1.25rem;
`;

const WordContainer = styled.div`
  display: flex;
  height: 24px;
  width: 220px;
  margin: auto auto auto 0.25rem;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  background-color: #454a55;
  border-radius: 1.25rem;
`;

const KorContainer = styled.div`
  display: flex;
  height: 24px;
  width: 120px;
  margin: auto auto auto 0.25rem;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  background-color: #454a55;
  border-radius: 1.25rem;
`;

const Container = styled.div`
  display: flex;
  height: 4rem;
  width: 100%;
  flex-direction: row;
  aligh-items: center;
  margin: 0rem 0rem 1rem 0rem;
  justify-content: space-between;
  background-color: #454a55;
  border-radius: 1.25rem;
`;

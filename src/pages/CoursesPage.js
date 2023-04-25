import React from "react";
import styled from "styled-components";

import { Coursesheader, Searchheader } from "../organisms/header";
import { Bottomnavigation } from "../molecules/navigation";
import { Categorytabs, Categorythumbnail } from "../domain/courses";
import { Title2, Body2 } from "../atoms/text";
import { COLOR } from "../constants";
import { Chipbutton } from "../atoms/button";
import { Stacklist } from "../atoms/list";

const CoursesSuccessPage = () => {
  return (
    <Container>
      <Coursesheader></Coursesheader>
      <Searchheader></Searchheader>
      <Categorytabs></Categorytabs>
      <Categorythumbnail></Categorythumbnail>
      <Title2 margin={"1rem"} color={COLOR.WHITE}>
        기초단어 코스
      </Title2>
      <Body2 margin={"1rem"} color={COLOR.WHITE}>
        지금 뜨는 검색어
      </Body2>
      <Stacklist margin={"1rem"}>
        <Chipbutton children1={"안뇽..."}></Chipbutton>
        <Chipbutton children1={"나야나..."}></Chipbutton>
        <Chipbutton children1={"구헹..."}></Chipbutton>
        <Chipbutton children1={"안뇽..."}></Chipbutton>
        <Chipbutton children1={"나야나..."}></Chipbutton>
        <Chipbutton children1={"구헹..."}></Chipbutton>
      </Stacklist>
      <Bottomnavigation></Bottomnavigation>
    </Container>
  );
};
export default CoursesSuccessPage;

const Container = styled.div`
  width: 100%;
`;

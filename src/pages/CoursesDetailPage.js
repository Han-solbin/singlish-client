/* eslint-disable no-console */
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { PATH } from "../constants";
import { Coursedetailmessage } from "../domain/courses";
import { Navigationheader } from "../molecules/navigation";
import { useAxiosGet } from "../hooks/queries";
import { Columnlist } from "../atoms/list";
import { WordDetail } from "../domain/courses";
import { Bottomonebuttoncontainer } from "../molecules/buttoncontainer";

const CoursesDetailPage = () => {
  let number = 0;
  const navigate = useNavigate();
  const { courseId } = useParams();
  const fakeNavigate = () => {
    navigate(PATH.COURSESSUCCESS);
  };
  const {
    loading: loading_1,
    data: courseDetail,
    error: error_1,
  } = useAxiosGet(`http://localhost:8081/api/v1/courses/${courseId}`);
  if (loading_1) {
    console.log("loading...");
  }
  if (error_1) {
    console.log("error!");
  }
  const { loading: loading_2, data: words, error: error_2 } = useAxiosGet(
    `http://localhost:8081/api/v1/courses/${courseId}/words`
  );
  if (loading_2) {
    console.log("loading...");
  }
  if (error_2) {
    console.log("error!");
  }
  if (courseDetail && words)
    return (
      <>
        <Navigationheader>클래스 소개</Navigationheader>
        <Container>
          <ImageContainer src={courseDetail.imgUrl}></ImageContainer>
          <Coursedetailmessage
            title={courseDetail.title}
            subtitle={courseDetail.subtitle}
            description={courseDetail.description}
          ></Coursedetailmessage>
          <WordWrapper>
            <Columnlist>
              {words.map((it) => (
                <WordDetail
                  key={it.id}
                  num={++number}
                  engWord={it.engWord}
                  korWord={it.korWord}
                  diacritic={it.diacritic}
                ></WordDetail>
              ))}
            </Columnlist>
          </WordWrapper>
        </Container>
        <Bottomonebuttoncontainer
          content={"지금 수강신청하기"}
          onClick={fakeNavigate}
        ></Bottomonebuttoncontainer>
      </>
    );
};
export default CoursesDetailPage;

const ImageContainer = styled.img`
  width: 100%;
  border-radius: 1.25rem;
  background-color: #000000;
`;

const WordWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: auto;
  margin: 0rem 1rem 0rem 1rem;
  height: 148vh;
`;

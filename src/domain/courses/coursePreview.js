import React from "react";
import styled from "styled-components";
import { Body1, Body2 } from "../../atoms/text";
import { PATH, COLOR } from "../../constants";
import { useNavigate } from "react-router-dom";

const CoursePreview = ({ courseId, title, subtitle, imgUrl }) => {
  const navigate = useNavigate();
  const handleCourseDetailPage = () => {
    navigate(`${PATH.COURSESDETAIL}/${courseId}`);
  };
  return (
    <ButtonWrapper onClick={handleCourseDetailPage}>
      <Container>
        <ImgContainer src={imgUrl}></ImgContainer>
        <Body1 color={COLOR.WHITE} margin={"0"}>
          {title}
        </Body1>
        <Body2 color={COLOR.GRAY100} margin={"0"}>
          {subtitle}
        </Body2>
      </Container>
    </ButtonWrapper>
  );
};

export default CoursePreview;

const ImgContainer = styled.img`
  display: flex;
  width: 200px;
  flex-direction: column;
  aligh-items: left;
  justify-content: flex-start;
  border-radius: 1.25rem;
  margin: 0rem 1rem 1rem 0rem;
`;
const ButtonWrapper = styled.button`
  background-color: #2e2f36;
  border: none;
  margin: 0rem 0rem 1rem 0rem;
  padding: 0px;
  display: flex;
  aligh-items: left;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  aligh-items: left;
  text-align: left;
  justify-content: flex-start;
`;

import React from "react";
//import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Coursedetailmessage } from "../domain/courses";
import { Navigationheader } from "../molecules/navigation";
import Heartimage from "../resources/image/heartimage.png";

const CoursesDetailPage = () => {
  //const { courseId } = useParams();
  return (
    <>
      <Navigationheader>클래스 소개</Navigationheader>
      <Container>
        <ImageContainer src={Heartimage}></ImageContainer>
        <Coursedetailmessage></Coursedetailmessage>
      </Container>
    </>
  );
};
export default CoursesDetailPage;

const ImageContainer = styled.img`
  width: 100%;
  height: 240px;
  object-fit: contain;
  border-radius: 1.25rem;
  background-color: #000000;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 0rem 1rem;
`;

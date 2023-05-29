import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import useFetchCourseDetail from "../hooks/queries/useFetchCourseDetail";
import { Coursedetailmessage } from "../domain/courses";
import { Navigationheader } from "../molecules/navigation";

const CoursesDetailPage = () => {
  const { courseId } = useParams();
  const { loading, courseDetail, error } = useFetchCourseDetail(courseId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(courseDetail);

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
      </Container>
    </>
  );
};
export default CoursesDetailPage;

const ImageContainer = styled.img`
  width: 100%;
  max-width: 400px;
  height: 280px;
  object-fit: cover;
  border-radius: 1.25rem;
  background-color: #000000;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: auto;
  margin: 0rem 1rem;
`;

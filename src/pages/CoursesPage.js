/* eslint-disable no-console */
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { SearchHeader } from "../domain/search";
import { Bottomnavigation } from "../molecules/navigation";
import { Categorytabs, Categorythumbnail } from "../domain/courses";
import { Title2 } from "../atoms/text";
import { COLOR } from "../constants";
import { useAxiosGet } from "../hooks/queries";
import { CoursePreview } from "../domain/courses";

const CoursesPage = () => {
  const { categoryId } = useParams();
  const { loading: loading_2, data: courses, error: error_2 } = useAxiosGet(
    `http://localhost:8081/api/v1/categories/${categoryId}/courses`
  );
  if (loading_2) {
    console.log("loading...");
  }
  if (error_2) {
    console.log("error!");
  }
  const {
    loading: loading_3,
    data: categoryDetail,
    error: error_3,
  } = useAxiosGet(`http://localhost:8081/api/v1/categories/${categoryId}`);
  if (loading_3) {
    console.log("loading...");
  }
  if (error_3) {
    console.log("error!");
  }
  if (courses && categoryDetail)
    return (
      <Container>
        <SearchHeader></SearchHeader>
        <Categorytabs></Categorytabs>
        <Categorythumbnail
          title={categoryDetail.title}
          description={categoryDetail.description}
          imgUrl={categoryDetail.imgUrl}
          courseNum={courses.length}
        ></Categorythumbnail>
        <Title2 margin={"1rem"} color={COLOR.WHITE}>
          {categoryDetail.title} 코스
        </Title2>
        <CourseContainer>
          {courses.map((it) => (
            <CoursePreview
              key={it.id}
              courseId={it.id}
              title={it.title}
              subtitle={it.subtitle}
              imgUrl={it.imgUrl}
            ></CoursePreview>
          ))}
        </CourseContainer>
        <Bottomnavigation></Bottomnavigation>
      </Container>
    );
};
export default CoursesPage;

const CourseContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem;
  justify-contents: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 120vh;
`;

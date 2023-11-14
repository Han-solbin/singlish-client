import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../hooks/queries";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { CoursePreview } from "../domain/courses";
import { SearchModal } from "../domain/search";

import { Title2 } from "../atoms/text";
import { COLOR, PATH } from "../constants";
import { Stacklist } from "../atoms/list";

const SearchPage = () => {
  const navigate = useNavigate();
  const stopSearching = () => {
    navigate(PATH.COURSES + "/0");
  };
  const { keyword } = useParams();
  useEffect(() => {}, [state]);
  const { loading, data: courses, error } = useAxiosGet(
    `http://localhost:8081/api/v1/courses/search?keyword=${keyword}`
  );
  if (loading) {
    console.log("loading...");
  }
  if (error) {
    console.log("error!");
  }
  const [state, setState] = useState(keyword);
  console.log(state);
  if (courses)
    return (
      <Container>
        <SearchModal
          stopSearching={stopSearching}
          keyword={state}
        ></SearchModal>
        <Title2 margin={"1rem"} color={COLOR.WHITE}>
          검색된 코스가 {courses.length}개 있어요.
        </Title2>
        <Stacklist margin={"1rem"}>
          {courses.map((it) => (
            <CoursePreview
              key={it.id}
              courseId={it.id}
              title={it.title}
              subtitle={it.subtitle}
              imgUrl={it.imgUrl}
            ></CoursePreview>
          ))}
        </Stacklist>
      </Container>
    );
};
export default SearchPage;

const Container = styled.div`
  width: 100%;
`;

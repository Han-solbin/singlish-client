import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Title1 } from "../atoms/text";

const SearchPage = () => {
  const { keyword } = useParams();
  return (
    <Container>
      <Title1>SearchPage{keyword}</Title1>
    </Container>
  );
};
export default SearchPage;

const Container = styled.div`
  width: 100%;
`;

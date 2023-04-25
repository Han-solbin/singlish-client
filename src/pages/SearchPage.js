import React from "react";
//import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Searchheader } from "../organisms/header";
import { Title2 } from "../atoms/text";
import { COLOR } from "../constants";

const SearchPage = () => {
  //const { keyword } = useParams();
  return (
    <Container>
      <Searchheader></Searchheader>
      <Title2 margin={"1rem"} color={COLOR.WHITE}>
        검색된 코스가 3개 있어요.
      </Title2>
    </Container>
  );
};
export default SearchPage;

const Container = styled.div`
  width: 100%;
`;

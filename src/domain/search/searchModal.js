import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Input } from "../../atoms/inputs";
import { Previouspageicon } from "../../resources/icon";
import { Iconbutton, Chipbutton } from "../../atoms/button";
import { useAxiosGet } from "../../hooks/queries";
import { Body2 } from "../../atoms/text";
import { Stacklist } from "../../atoms/list";

const Searchheader = ({ stopSearching, keyword }) => {
  const {
    loading: loading_1,
    data: searchKeywords,
    error: error_1,
  } = useAxiosGet(`http://localhost:8081/api/v1/search-keywords`);
  if (loading_1) {
    console.log("loading...");
  }
  if (error_1) {
    console.log("error!");
  }
  if (searchKeywords)
    return (
      <Wrapper>
        <Container>
          <Iconbutton onClick={stopSearching}>
            <Previouspageicon
              color={COLOR.WHITE}
              padding={"10px"}
            ></Previouspageicon>
          </Iconbutton>
          <InputContainer>
            <Input keyword={keyword}></Input>
          </InputContainer>
        </Container>
        <Body2 margin={"1rem 1rem 0rem 1rem"} color={COLOR.WHITE}>
          지금 뜨는 검색어
        </Body2>
        <Stacklist margin={"1rem"}>
          {searchKeywords.map((it) => (
            <Chipbutton
              children1={it.searchKeyword}
              key={it.searchKeyword}
            ></Chipbutton>
          ))}
        </Stacklist>
      </Wrapper>
    );
};
export default Searchheader;

const InputContainer = styled.div`
  padding: 0rem 0.5rem 0rem 0.5rem;
  width: 100%;
  z-index: 999;
`;

const Container = styled.div`
  position: display;
  display: flex;
  top: 0;
  z-index: 999;
  height: 52px;
  padding: 0rem 1rem 0rem 1rem;
  justify-content: flex-start;
  align-items: center;
  background-color: ${COLOR.BACKGROUND};
`;

const Wrapper = styled.div`
  position: display;
  display: flex;
  flex-direction: column;
  z-index: 999;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  background-color: ${COLOR.BACKGROUND};
`;

import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Input } from "../../atoms/inputs";
import { Previouspageicon } from "../../resources/icon";

const Searchheader = () => {
  return (
    <Container>
      <Previouspageicon color={COLOR.WHITE} padding={"10px"}></Previouspageicon>
      <InputContainer>
        <Input></Input>
      </InputContainer>
    </Container>
  );
};
export default Searchheader;

const InputContainer = styled.div`
  padding: 0rem 0.5rem 0rem 0.5rem;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  height: 52px;
  padding: 0rem 1rem 0rem 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLOR.BACKGROUND};
`;

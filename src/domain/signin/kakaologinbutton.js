import React from "react";
import styled from "styled-components";

import { Body2 } from "../../atoms/text";
import { Kakaologo } from "../../resources/image";

const Kakaologinbutton = ({
  width = "100%",
  height = "3.25rem",
  margin = "0",
  onClick: handleClick = () => {},
}) => {
  return (
    <Container
      height={height}
      width={width}
      margin={margin}
      onClick={handleClick}
    >
      <Kakaologo></Kakaologo>
      <Body2>Kakao로 계속하기</Body2>
      <Body2></Body2>
    </Container>
  );
};
export default Kakaologinbutton;

const Container = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: #ffe812;
  border: none;
  border-radius: 1.25rem;
`;

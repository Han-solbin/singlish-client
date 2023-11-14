import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { PATH } from "../../constants";
import { Body2 } from "../../atoms/text";
import { Applelogo } from "../../resources/image";

const Appleloginbutton = ({
  width = "100%",
  height = "3.25rem",
  margin = "1rem 0 0.5rem 0",
  // eslint-disable-next-line no-unused-vars
  onClick: handleClick = () => {},
}) => {
  const navigate = useNavigate();
  const fakeNavigate = () => {
    navigate(PATH.WELCOMETERM);
  };
  return (
    <Container
      height={height}
      width={width}
      margin={margin}
      onClick={fakeNavigate}
    >
      <Applelogo></Applelogo>
      <Body2>Apple로 계속하기</Body2>
      <Body2></Body2>
    </Container>
  );
};

export default Appleloginbutton;

const Container = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: #ffffff;
  border: none;
  border-radius: 1.25rem;
`;

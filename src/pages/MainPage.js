import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PATH } from "../constants";
import { Singlishhorizontallogo } from "../atoms/logocontainer";

const MainPage = () => {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate(PATH.WELCOME);
    }, 2000);
  };
  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <Container>
      <Singlishhorizontallogo></Singlishhorizontallogo>
    </Container>
  );
};
export default MainPage;

const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

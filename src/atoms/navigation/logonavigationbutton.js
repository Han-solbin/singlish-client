import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PATH } from "../../constants";
import { Singlishverticallogo } from "../logocontainer";

const Logonavigationbutton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(PATH.WELCOME);
  };

  return (
    <Button onClick={handleClick}>
      <Singlishverticallogo></Singlishverticallogo>
    </Button>
  );
};

export default Logonavigationbutton;

const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
`;

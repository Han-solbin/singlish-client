import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { COLOR } from "../../constants";
import { Subtitle2 } from "../../atoms/text";
import { Previouspageicon } from "../../resources/icon";

const Navigationheader = ({ children }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Container>
      <ButtonContainer onClick={handleClick}>
        <Previouspageicon></Previouspageicon>
      </ButtonContainer>
      <Subtitle2 margin="0" color={COLOR.WHITE}>
        {children}
      </Subtitle2>
      <Previouspageicon color={COLOR.BACKGROUND}></Previouspageicon>
    </Container>
  );
};

export default Navigationheader;

const ButtonContainer = styled.button`
  border: none;
  background-color: #2e2e36;
  padding: 0px;
`;

const Container = styled.div`
  display: flex;
  height: 52px;
  padding: 0rem 1rem 0rem 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLOR.BACKGROUND};
`;

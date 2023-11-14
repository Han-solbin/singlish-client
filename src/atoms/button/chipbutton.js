import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router";
import { COLOR, PATH } from "../../constants";
import { Body2 } from "../text";

const Chipbutton = ({ children1 }) => {
  const navigate = useNavigate();
  const search = () => {
    navigate(PATH.SEARCH + "/" + children1);
    window.location.reload();
  };
  return (
    <ChipContainer onClick={search}>
      <Body2 color={COLOR.WHITE} margin={"0"}>
        {children1}
      </Body2>
    </ChipContainer>
  );
};

export default Chipbutton;

const ChipContainer = styled.div`
  display: inline-block;
  border-radius: 3rem;
  padding: 4px 12px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #454a55;
`;

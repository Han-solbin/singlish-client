import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Body2 } from "../text";

const Chipbutton = ({ children1 }) => {
  return (
    <ChipContainer>
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
  background-color: #454a55;
`;
/**
 * <Container
        backgroundColor={backgroundColor}
        margin={margin}
        onClick={handleClick}
      >

      margin = "0.25rem 0.125rem",
  backgroundColor = COLOR.GRAY500,
 */

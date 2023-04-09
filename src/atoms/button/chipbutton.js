import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Body2 } from "../text";

const Chipbutton = ({
  children,
  margin = "0.25rem 0.125rem",
  backgroundColor = COLOR.GRAY500,
  onClick: handleClick = () => {},
}) => {
  return (
    <Chipbuttoncontainer>
      <Container
        backgroundColor={backgroundColor}
        margin={margin}
        onClick={handleClick}
      >
        <Body2>{children}</Body2>
      </Container>
    </Chipbuttoncontainer>
  );
};

export default Chipbutton;

const Container = styled.div`
  padding: 0 10px;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  border-radius: "1.25rem";
`;

const Chipbuttoncontainer = styled.div`
  display: inline-block;
  width: auto;
  border-radius: "1.25rem";
`;

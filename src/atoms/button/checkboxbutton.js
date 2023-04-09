import React from "react";
import styled from "styled-components";

import { Checkicon } from "../../resources/icon";

const Checkboxbutton = ({
  children = Checkicon,
  onClick: handleClick = () => {},
}) => {
  return <Button onClick={handleClick}>{children}</Button>;
};

export default Checkboxbutton;

const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

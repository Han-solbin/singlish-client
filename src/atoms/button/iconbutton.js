import React from "react";
import styled from "styled-components";

const Iconbutton = ({ children = null, onClick: handleClick = () => {} }) => {
  return <Button onClick={handleClick}>{children}</Button>;
};

export default Iconbutton;

const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

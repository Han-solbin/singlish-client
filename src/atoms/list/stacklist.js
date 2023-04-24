import React from "react";
import styled from "styled-components";

const Stacklist = ({
  children,
  width = "100%",
  height = "auto",
  padding = "0",
  margin = "0",
  alignItems = "center",
  justifyContent = "flex-start",
  onClick: handleClick = () => {},
}) => {
  return (
    <Container
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      alignItems={alignItems}
      justifyContent={justifyContent}
      onClick={handleClick}
    >
      {children}
    </Container>
  );
};

export default Stacklist;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

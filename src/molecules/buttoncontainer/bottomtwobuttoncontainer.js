import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";

const Bottombuttoncontainer = ({ Leftchild, Rightchild }) => {
  return (
    <Container>
      {Leftchild}
      {Rightchild}
    </Container>
  );
};

export default Bottombuttoncontainer;

const Container = styled.div`
  position: fixed;
  width: auto;
  padding: 1rem 1rem 2.25rem;
  display: flex;
  flex-direction: row;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${COLOR.BACKGROUND};
`;

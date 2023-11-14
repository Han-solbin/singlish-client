import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Textbutton } from "../../atoms/button";

const Bottomonebuttoncontainer = ({ content, onClick }) => {
  return (
    <Container>
      <Textbutton text={content} onClick={onClick}></Textbutton>
    </Container>
  );
};

export default Bottomonebuttoncontainer;

const Container = styled.div`
  position: fixed;
  padding: 1rem 1rem 2.25rem;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${COLOR.BACKGROUND};
`;

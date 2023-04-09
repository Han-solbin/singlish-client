import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Appleloginbutton, Kakaologinbutton } from ".";

const Loginbottombuttoncontainer = () => {
  return (
    <Container>
      <Kakaologinbutton></Kakaologinbutton>
      <Appleloginbutton></Appleloginbutton>
    </Container>
  );
};

export default Loginbottombuttoncontainer;

const Container = styled.div`
  position: fixed;
  width: auto;
  padding: 1rem 1rem 2.25rem;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${COLOR.BACKGROUND};
`;

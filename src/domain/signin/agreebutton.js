import React from "react";
import styled from "styled-components";
import { Checkboxbutton } from "../../atoms/button";

const Agreebutton = ({ isChecked, setIsChecked, body }) => {
  return (
    <Container>
      <Checkboxbutton
        isChecked={isChecked}
        onClick={setIsChecked}
        body={body}
      ></Checkboxbutton>
    </Container>
  );
};

export default Agreebutton;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  padding: 1rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: none;
  border-radius: 1.25rem;
`;

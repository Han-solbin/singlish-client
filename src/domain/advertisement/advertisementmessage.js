import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Subtitle2, Caption1 } from "../../atoms/text";

const Advertisementmessage = ({ children1, children2 }) => {
  return (
    <Container>
      <Subtitle2 color={COLOR.WHITE} margin={0}>
        {children1}
      </Subtitle2>
      <Caption1 color={COLOR.GRAY300} margin={0}>
        {children2}
      </Caption1>
    </Container>
  );
};

export default Advertisementmessage;

const Container = styled.div`
  display: flex;
  height: 64px;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: none;
  border-radius: 1.25rem;
`;

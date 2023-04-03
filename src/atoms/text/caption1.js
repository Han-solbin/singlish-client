import React from "react";
import styled from "styled-components";

import { TEXT } from "../../constants";

const Caption1 = ({ color, margin, children }) => {
  return (
    <Text margin={margin} color={color}>
      {children}
    </Text>
  );
};

export default Caption1;

const Text = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: ${TEXT.CAPTION1.FONTFAMILY};
  font-weight: ${TEXT.CAPTION1.WEIGTHT};
  font-size: ${TEXT.CAPTION1.SIZE};
  line-height: ${TEXT.CAPTION1.HEIGHT};
  letter-spacing: ${TEXT.CAPTION1.LETTER_SPACING};
`;

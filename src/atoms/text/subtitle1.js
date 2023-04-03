import React from "react";
import styled from "styled-components";

import { TEXT } from "../../constants";

const Subtitle1 = ({ color, margin, children }) => {
  return (
    <Text margin={margin} color={color}>
      {children}
    </Text>
  );
};

export default Subtitle1;

const Text = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: ${TEXT.SUBTITLE1.FONTFAMILY};
  font-weight: ${TEXT.SUBTITLE1.WEIGTHT};
  font-size: ${TEXT.SUBTITLE1.SIZE};
  line-height: ${TEXT.SUBTITLE1.HEIGHT};
  letter-spacing: ${TEXT.SUBTITLE1.LETTER_SPACING};
`;

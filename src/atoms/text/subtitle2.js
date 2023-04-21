import React from "react";
import styled from "styled-components";

import { TEXT } from "../../constants";

const Subtitle2 = ({ color, margin, children }) => {
  return (
    <Text margin={margin} color={color}>
      {children}
    </Text>
  );
};

export default Subtitle2;

const Text = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: ${TEXT.SUBTITLE2.FONTFAMILY};
  font-weight: ${TEXT.SUBTITLE2.WEIGTHT};
  font-size: ${TEXT.SUBTITLE2.SIZE};
  line-height: ${TEXT.SUBTITLE2.HEIGHT};
  letter-spacing: ${TEXT.SUBTITLE2.LETTER_SPACING};
`;

import React from "react";
import styled from "styled-components";

import { TEXT } from "../../constants";

const Caption2 = ({ color, margin, children }) => {
  return (
    <Text margin={margin} color={color}>
      {children}
    </Text>
  );
};

export default Caption2;

const Text = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: ${TEXT.CAPTION2.FONTFAMILY};
  font-weight: ${TEXT.CAPTION2.WEIGTHT};
  font-size: ${TEXT.CAPTION2.SIZE};
  line-height: ${TEXT.CAPTION2.HEIGHT};
  letter-spacing: ${TEXT.CAPTION2.LETTER_SPACING};
`;

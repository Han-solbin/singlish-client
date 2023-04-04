import React from "react";
import styled from "styled-components";

import { TEXT } from "../../constants";

const Body2 = ({ color, margin, children }) => {
  return (
    <Text margin={margin} color={color}>
      {children}
    </Text>
  );
};

export default Body2;

const Text = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: ${TEXT.BODY2.FONTFAMILY};
  font-weight: ${TEXT.BODY2.WEIGTHT};
  font-size: ${TEXT.BODY2.SIZE};
  line-height: ${TEXT.BODY2.HEIGHT};
  letter-spacing: ${TEXT.BODY2.LETTER_SPACING};
`;

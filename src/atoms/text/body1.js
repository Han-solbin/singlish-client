import React from "react";
import styled from "styled-components";

import { TEXT } from "../../constants";

const Body1 = ({ color, margin, children }) => {
  return (
    <Text margin={margin} color={color}>
      {children}
    </Text>
  );
};

export default Body1;

const Text = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: ${TEXT.BODY1.FONTFAMILY};
  font-weight: ${TEXT.BODY1.WEIGTHT};
  font-size: ${TEXT.BODY1.SIZE};
  line-height: ${TEXT.BODY1.HEIGHT};
  letter-spacing: ${TEXT.BODY1.LETTER_SPACING};
`;

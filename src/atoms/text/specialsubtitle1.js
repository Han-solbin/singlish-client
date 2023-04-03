import React from "react";
import styled from "styled-components";

import { TEXT } from "../../constants";

const Specialsubtitle1 = ({ color, margin, children }) => {
  return (
    <Text margin={margin} color={color}>
      {children}
    </Text>
  );
};

export default Specialsubtitle1;

const Text = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: ${TEXT.SPECIALSUBTITLE1.FONTFAMILY};
  font-weight: ${TEXT.SPECIALSUBTITLE1.WEIGTHT};
  font-size: ${TEXT.SPECIALSUBTITLE1.SIZE};
  line-height: ${TEXT.SPECIALSUBTITLE1.HEIGHT};
  letter-spacing: ${TEXT.SPECIALSUBTITLE1.LETTER_SPACING};
`;

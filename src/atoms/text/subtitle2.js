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
  font-family: ${TEXT.SPECIALTITLE2.FONTFAMILY};
  font-weight: ${TEXT.SPECIALTITLE2.WEIGTHT};
  font-size: ${TEXT.SPECIALTITLE2.SIZE};
  line-height: ${TEXT.SPECIALTITLE2.HEIGHT};
  letter-spacing: ${TEXT.SPECIALTITLE2.LETTER_SPACING};
`;

import styled from "styled-components";

import { TEXT } from "../constants";

const Headline = ({ color, margin, children }) => {
  return (
    <Text margin={margin} color={color}>
      {children}
    </Text>
  );
};

export default Headline;

const Text = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: ${TEXT.HEADLINE.FONTFAMILY};
  font-weight: ${TEXT.HEADLINE.WEIGTHT};
  font-size: ${TEXT.HEADLINE.SIZE};
  line-height: ${TEXT.HEADLINE.HEIGHT};
  letter-spacing: ${TEXT.HEADLINE.LETTER_SPACING};
`;

import styled from "styled-components";

import { TEXT } from "../../consTanTs";

const Title2 = ({ color, margin, children }) => {
  return (
    <Text margin={margin} color={color}>
      {children}
    </Text>
  );
};

export default Title2;

const Text = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: ${TEXT.TITLE2.FONTFAMILY};
  font-weight: ${TEXT.TITLE2.WEIGTHT};
  font-size: ${TEXT.TITLE2.SIZE};
  line-height: ${TEXT.TITLE2.HEIGHT};
  letter-spacing: ${TEXT.TITLE2.LETTER_SPACING};
`;

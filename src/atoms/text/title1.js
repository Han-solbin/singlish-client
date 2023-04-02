import styled from "styled-components";

import { TEXT } from "../../constants";

const Title1 = ({ color, margin, children }) => {
  return (
    <Text margin={margin} color={color}>
      {children}
    </Text>
  );
};

export default Title1;

const Text = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: ${TEXT.TITLE1.FONTFAMILY};
  font-weight: ${TEXT.TITLE1.WEIGTHT};
  font-size: ${TEXT.TITLE1.SIZE};
  line-height: ${TEXT.TITLE1.HEIGHT};
  letter-spacing: ${TEXT.TITLE1.LETTER_SPACING};
`;

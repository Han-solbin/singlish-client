import styled from "styled-components";

import { TEXT } from "../../constants";

const Body3 = ({ color, margin, children }) => {
  return (
    <Text margin={margin} color={color}>
      {children}
    </Text>
  );
};

export default Body3;

const Text = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: ${TEXT.BODY3.FONTFAMILY};
  font-weight: ${TEXT.BODY3.WEIGTHT};
  font-size: ${TEXT.BODY3.SIZE};
  line-height: ${TEXT.BODY3.HEIGHT};
  letter-spacing: ${TEXT.BODY3.LETTER_SPACING};
`;

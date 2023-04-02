import styled from "styled-components";

import { TEXT } from "../../constants";

const Specialsubtitle2 = ({ color, margin, children }) => {
  return (
    <Text margin={margin} color={color}>
      {children}
    </Text>
  );
};

export default Specialsubtitle2;

const Text = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: ${TEXT.SPECIALSUBTITLE2.FONTFAMILY};
  font-weight: ${TEXT.SPECIALSUBTITLE2.WEIGTHT};
  font-size: ${TEXT.SPECIALSUBTITLE2.SIZE};
  line-height: ${TEXT.SPECIALSUBTITLE2.HEIGHT};
  letter-spacing: ${TEXT.SPECIALSUBTITLE2.LETTER_SPACING};
`;

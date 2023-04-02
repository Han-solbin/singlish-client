import styled from "styled-components";

import { TEXT } from "../../constants";

const Specialtitle1 = ({ color, margin, children }) => {
  return (
    <Text margin={margin} color={color}>
      {children}
    </Text>
  );
};

export default Specialtitle1;

const Text = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: ${TEXT.SPECIALTITLE1.FONTFAMILY};
  font-weight: ${TEXT.SPECIALTITLE1.WEIGTHT};
  font-size: ${TEXT.SPECIALTITLE1.SIZE};
  line-height: ${TEXT.SPECIALTITLE1.HEIGHT};
  letter-spacing: ${TEXT.SPECIALTITLE1.LETTER_SPACING};
`;

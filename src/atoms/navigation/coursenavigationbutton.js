import React from "react";
import styled from "styled-components";

import { COLOR, GNB } from "../../constants";
import { Flagicon } from "../../resources/icon";
import { Caption2 } from "../text";

const Coursenavigationbutton = ({
  isCurrent = false,
  onClick: handelCoursepage,
}) => {
  const Activatedcolor =
    isCurrent === GNB.COURSES || isCurrent === "/courses/1"
      ? COLOR.WHITE
      : COLOR.GRAY500;

  return (
    <Container onClick={handelCoursepage}>
      <Flagicon color={Activatedcolor}></Flagicon>
      <Caption2 color={Activatedcolor}>코스</Caption2>
    </Container>
  );
};
export default Coursenavigationbutton;

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 0;
  background-color: ${COLOR.BACKGROUND};
`;

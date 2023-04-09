import React from "react";
import styled from "styled-components";

import { COLOR, GNB } from "../../constants";
import { Monitoricon } from "../../resources/icon";
import { Caption2 } from "../text";

const Pracicenavigationbutton = ({
  isCurrent = false,
  onClick: handlePracticepage,
}) => {
  const Activatedcolor = isCurrent === GNB.MYPAGE ? COLOR.WHITE : COLOR.GRAY500;

  return (
    <Container onClick={handlePracticepage}>
      <Monitoricon color={Activatedcolor}></Monitoricon>
      <Caption2 color={Activatedcolor}>학습</Caption2>
    </Container>
  );
};
export default Pracicenavigationbutton;

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

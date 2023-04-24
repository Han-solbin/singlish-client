import React from "react";
import styled from "styled-components";
import { COLOR, GNB } from "../../constants";
import { Accounticon } from "../../resources/icon";
import { Caption2 } from "../text";

const Accountnavigationbutton = ({
  isCurrent = false,
  onClick: handleAccountpage,
}) => {
  const Activatedcolor =
    isCurrent === GNB.ACCOUNT ? COLOR.WHITE : COLOR.GRAY500;
  return (
    <Container onClick={handleAccountpage}>
      <Accounticon color={Activatedcolor}></Accounticon>
      <Caption2 line-height="1rem" color={Activatedcolor}>
        마이페이지
      </Caption2>
    </Container>
  );
};
export default Accountnavigationbutton;

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

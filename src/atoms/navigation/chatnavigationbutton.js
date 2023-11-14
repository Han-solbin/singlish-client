import React from "react";
import styled from "styled-components";

import { COLOR, GNB } from "../../constants";
import { Textbubbleicon } from "../../resources/icon";
import { Caption2 } from "../text";

const Chatnavigationbutton = ({
  isCurrent = false,
  onClick: handleChatpage,
}) => {
  const Activatedcolor =
    isCurrent === GNB.CHATBOT ? COLOR.WHITE : COLOR.GRAY500;
  return (
    <Container onClick={handleChatpage}>
      <Textbubbleicon color={Activatedcolor}></Textbubbleicon>
      <Caption2 color={Activatedcolor}>챗봇</Caption2>
    </Container>
  );
};
export default Chatnavigationbutton;

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

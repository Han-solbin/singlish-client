import React from "react";
import styled from "styled-components";

import { Navigationheader } from "../molecules/navigation";
import { Speechbubble } from "../atoms";

const ChatbotSinglyPage = () => {
  return (
    <Container>
      <Navigationheader>챗봇</Navigationheader>
      <BubbleContainer>
        <Speechbubble message={"안녕하세요"} isMe={false}></Speechbubble>
        <Speechbubble message={"어째서..."} isMe={false}></Speechbubble>
        <Speechbubble message={"네 안녕하세요."} isMe={true}></Speechbubble>
        <Speechbubble message={"저예요."} isMe={true}></Speechbubble>
      </BubbleContainer>
    </Container>
  );
};
export default ChatbotSinglyPage;

const BubbleContainer = styled.div`
  padding: 0rem 1rem;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

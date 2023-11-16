import React from "react";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../hooks/queries";
import styled from "styled-components";

import { Navigationheader } from "../molecules/navigation";
import { Speechbubble } from "../atoms";
import { ChatbotProfile } from "../domain/chatbot";

const ChatbotDetailPage = () => {
  const { chatbotId } = useParams();
  const { loading: loading, data: chatbot, error: error } = useAxiosGet(
    `http://localhost:8081/api/v1/chatbots/${chatbotId}`
  );
  if (loading) {
    console.log("loading...");
  }
  if (error) {
    console.log("error!");
  }
  if (chatbot)
    return (
      <Container>
        <Navigationheader>{chatbot.name}</Navigationheader>
        <BubbleContainer>
          <ChatbotProfile
            id={chatbot.id}
            name={chatbot.name}
            profile={chatbot.profile}
            imgUrl={chatbot.imgUrl}
            description={chatbot.description}
          ></ChatbotProfile>
          <Speechbubble
            message={chatbot.scene_description}
            isMe={false}
          ></Speechbubble>
        </BubbleContainer>
      </Container>
    );
};
export default ChatbotDetailPage;

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

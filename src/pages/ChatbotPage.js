import React from "react";
import styled from "styled-components";
import { useAxiosGet } from "../hooks/queries";

import { Title2 } from "../atoms/text";
import { COLOR } from "../constants";
import { RecommandedChatbot, ChatbotPreview } from "../domain/chatbot";
import { Chatbotheader } from "../organisms/header";
import { Bottomnavigation } from "../molecules/navigation";

const ChatbotPage = () => {
  const randomNum = Math.floor(Math.random() * 6);
  const { loading: loading_1, data: chatbot, error: error_1 } = useAxiosGet(
    `http://localhost:8081/api/v1/chatbots/${randomNum}`
  );
  const { loading: loading_2, data: chatbots, error: error_2 } = useAxiosGet(
    `http://localhost:8081/api/v1/chatbots`
  );
  if (loading_1) {
    console.log("loading...");
  }
  if (error_1) {
    console.log("error!");
  }
  if (loading_2) {
    console.log("loading...");
  }
  if (error_2) {
    console.log("error!");
  }
  if (chatbots && chatbot)
    return (
      <Container>
        <Chatbotheader
          id={chatbot.id}
          name={chatbot.name}
          profile={chatbot.profile}
          imgUrl={chatbot.imgUrl}
        ></Chatbotheader>
        <RecommandedChatbotContainer>
          <RecommandedChatbot></RecommandedChatbot>
        </RecommandedChatbotContainer>
        <Title2 margin={"1rem"} color={COLOR.WHITE}>
          모든 챗봇
        </Title2>
        <ChatbotContainer>
          {chatbots.map((it) => (
            <ChatbotPreview
              key={it.id}
              id={it.id}
              name={it.name}
              profile={it.profile}
              imgUrl={it.imgUrl}
            ></ChatbotPreview>
          ))}
        </ChatbotContainer>
        <Bottomnavigation></Bottomnavigation>
      </Container>
    );
};
export default ChatbotPage;

const ChatbotContainer = styled.div`
  width: auto;
  display: flex;
  justify-contents: space-between;
  margin: 0rem 0rem 0rem 1rem;
  flex-wrap: wrap;
`;

const RecommandedChatbotContainer = styled.div`
  width: auto;
  display: flex;
  justify-contents: space-between;
  margin: 0rem 1rem 0rem 1rem;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  height: 150vh;
`;

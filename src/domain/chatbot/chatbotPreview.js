import React from "react";
import styled from "styled-components";
import { PATH, COLOR } from "../../constants";
import { Title2, Body1, Body2 } from "../../atoms/text";
import { useNavigate } from "react-router-dom";

const ChatbotPreview = ({ id, name, profile, imgUrl }) => {
  const navigate = useNavigate();
  const handleChatbotDetailPage = () => {
    navigate(PATH.CHATBOTDETAIL + "/" + id);
  };
  return (
    <Container onClick={handleChatbotDetailPage}>
      <ImgContainer src={imgUrl}></ImgContainer>
      <Title2 color={COLOR.WHITE} margin={"0"}>
        {name}
      </Title2>
      <Body2 color={COLOR.GRAY100} margin={"0"}>
        {profile}
      </Body2>
      <ButtonContatiner>
        <FakeButton>
          <Body1 color={COLOR.GRAY900} margin={"0"}>
            {"대화하기"}
            {" →"}
          </Body1>
        </FakeButton>
      </ButtonContatiner>
    </Container>
  );
};
export default ChatbotPreview;

const ImgContainer = styled.img`
  display: flex;
  width: 40px;
  flex-direction: column;
  aligh-items: left;
  justify-content: flex-start;
  border-radius: 1.25rem;
  margin: 0rem 1rem 1rem 0rem;
`;

const ButtonContatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-contents: space-between;
`;

const FakeButton = styled.span`
  background-color: ${COLOR.BRANDCOLOR};
  height: auto;
  text-align: right;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  margin: 0.25rem 0rem 0.5rem auto;
`;

const Container = styled.button`
  display: ${(props) => (props.activated == true ? "none" : "flex")};
  border: none;
  height: auto;
  width: 200px;
  flex-direction: column;
  text-align: left;
  margin: 0rem 1rem 1rem 0rem;
  padding: 0.75rem 1rem 0.75rem 1rem;
  background-color: #454a55;
  border-radius: 1.25rem;
`;

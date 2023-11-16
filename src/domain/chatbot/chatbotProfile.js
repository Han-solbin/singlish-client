import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants";
import { Title2, Body2 } from "../../atoms/text";

const ChatbotProfile = ({ id, name, profile, imgUrl, description }) => {
  return (
    <Container>
      <RowContainer>
        <ColumnContainer>
          <Title2 color={COLOR.WHITE} margin={"0"}>
            {name}
          </Title2>
          <Body2 color={COLOR.GRAY100} margin={"0"}>
            {profile}
          </Body2>
        </ColumnContainer>
        <ImgContainer src={imgUrl}></ImgContainer>
      </RowContainer>
      <Body2 color={COLOR.GRAY300} margin={"0"}>
        {description}
      </Body2>
    </Container>
  );
};
export default ChatbotProfile;

const ImgContainer = styled.img`
  display: flex;
  width: 40px;
  height: 40px;
  flex-direction: column;
  aligh-items: left;
  justify-content: flex-start;
  border-radius: 1.25rem;
  margin: auto;
`;

const ColumnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-contents: flex-start;
  margin: auto;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-contents: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 280px;
  position: relative;
  padding: 0.5rem 0.25rem 0.5rem 1rem;
  border: none;
  height: auto;
  flex-direction: column;
  text-align: left;
  margin: 0rem 0rem 1rem 0rem;
  padding: 0.75rem 1rem 0.75rem 1rem;
  background-color: #454a55;
  border-radius: 1.25rem;
  ::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 10px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent transparent ${COLOR.GRAY700};
  }
  &.right {
    align-self: flex-end;
    background-color: ${COLOR.GRAY700};

    ::before {
      right: 10px;
      border-color: transparent ${COLOR.GRAY700} transparent transparent;
    }
  }

  &.no-tail {
    ::before {
      display: visible;
    }
  }
`;

import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Body2, Body3 } from "../../atoms/text";

const Memberprofile = ({ userName, email, imgUrl }) => {
  console.log({ imgUrl });
  return (
    <ProfileContainer>
      <ImageContainer src={imgUrl}></ImageContainer>
      <TextContainer>
        <Body2 margin={"0"} color={COLOR.GRAY100}>
          {userName}
        </Body2>
        <Body3 margin={"0"} color={COLOR.GRAY300}>
          {email}
        </Body3>
      </TextContainer>
    </ProfileContainer>
  );
};
export default Memberprofile;

const ImageContainer = styled.img`
  width: 52px;
  height: 52px;
  object-fit: contain;
  border-radius: 10rem;
`;

const ProfileContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  padding: 2rem 2rem;
  background-color: #454a55;
  border-radius: 1.25rem;
`;

const TextContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
  background-color: #454a55;
`;

import React from "react";
import styled from "styled-components";

import { COLOR } from "../../constants";
import { Body2, Body3 } from "../../atoms/text";
import Profileimage from "../../resources/image/profileimage.jpeg";

const Memberprofile = () => {
  return (
    <ProfileContainer>
      <ImageContainer src={Profileimage}></ImageContainer>
      <TextContainer>
        <Body2 margin={"0"} color={COLOR.GRAY100}>
          솔빈
        </Body2>
        <Body3 margin={"0"} color={COLOR.GRAY300}>
          solbing@gmail.com
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
  margin: 0rem 1rem;
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

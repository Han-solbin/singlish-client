import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { PATH, COLOR } from "../constants";
import { Caption2 } from "../atoms/text";
import { useAxiosGet } from "../hooks/queries";
import { Bottomonebuttoncontainer } from "../molecules/buttoncontainer";
import { Navigationheader } from "../molecules/navigation";

const WelcomeTermDetailPage = () => {
  const navigate = useNavigate();
  const { termId } = useParams();
  const { loading, data: termDetail, error } = useAxiosGet(
    `http://localhost:8081/api/v1/terms/${termId}`
  );
  if (loading) {
    console.log("loading...");
  }
  if (error) {
    console.log("error!");
  }
  const onClick = () => {
    navigate(PATH.WELCOMETERM);
  };
  if (termDetail)
    return (
      <Container>
        <Navigationheader>{termDetail.title}</Navigationheader>
        <Wrapper>
          <Caption2 color={COLOR.GRAY100}>{termDetail.body}</Caption2>
          {termDetail.imgUrl && (
            <ImgContainer src={termDetail.imgUrl}></ImgContainer>
          )}
        </Wrapper>
        <Bottomonebuttoncontainer
          onClick={onClick}
          content={"동의합니다"}
        ></Bottomonebuttoncontainer>
      </Container>
    );
};
export default WelcomeTermDetailPage;

const ImgContainer = styled.img`
  height: auto;
  width: 100%;
`;
const Wrapper = styled.div`
  padding: 0rem 1rem;
`;
const Container = styled.div`
  width: 100%;
`;

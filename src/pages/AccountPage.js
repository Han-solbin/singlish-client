/* eslint-disable no-console */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Title2 } from "../atoms/text";
import { COLOR } from "../constants";
import { Accountheader } from "../organisms/header";
import { SubscribePreview } from "../domain/practice";
//import { Dialog } from "../molecules/dialog";
import { Bottomnavigation } from "../molecules/navigation";
import { Memberprofile } from "../domain/member";
import { useAxiosGet } from "../hooks/queries";

const AccountPage = () => {
  const { userId } = useParams();
  const [isModal, setIsModal] = useState(false);
  const { loading_1, data: userDetail, error_1 } = useAxiosGet(
    `http://localhost:8081/api/v1/users/${userId}`
  );
  if (loading_1) {
    console.log("loading...");
  }
  if (error_1) {
    console.log("error!");
  }
  const { loading: loading_2, data: subscribes, error: error_2 } = useAxiosGet(
    `http://localhost:8081/api/v1/users/${userId}/courses`
  );
  if (loading_2) {
    console.log("loading...");
  }
  if (error_2) {
    console.log("error!");
  }
  console.log(subscribes);
  console.log(setIsModal);
  /*
  {isModal && (
            <DialogContainer>
              <Dialog
                children1={"진행상황이 초기화되어요"}
                children2={"다시 처음부터 코스를 수강할 수 있어요."}
              ></Dialog>
            </DialogContainer>
          )} 
          */
  if (userDetail && subscribes)
    return (
      <>
        <Accountheader></Accountheader>
        <Container>
          <Memberprofile
            userName={userDetail.userName}
            email={userDetail.email}
            imgUrl={userDetail.imgUrl}
          ></Memberprofile>
          <Title2 color={COLOR.WHITE}>지금까지 수강한 코스</Title2>
          <SubscribesContainer>
            {subscribes.map((it) => (
              <SubscribePreview
                key={it.id}
                id={it.id}
                title={it.courseTitle}
                subtitle={it.courseSubtitle}
                activated={it.activated}
                text={"복습하기"}
                status={"학습완료"}
              ></SubscribePreview>
            ))}
          </SubscribesContainer>
        </Container>
        <Bottomnavigation></Bottomnavigation>
      </>
    );
};
export default AccountPage;

const SubscribesContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Container = styled.div`
  width: auto;
  display: flex;
  margin: 0rem 1rem 0rem 1rem;
  flex-direction: column;
  justify-content: flex-start;
`;

const DialogContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  z-index: 999;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #454a55;
`;

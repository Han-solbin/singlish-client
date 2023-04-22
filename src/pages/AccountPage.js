import React from "react";
import styled from "styled-components";

import { Title1 } from "../atoms/text";
import { Dialog } from "../molecules/dialog";
import { Chipbutton } from "../atoms/button";

const AccountPage = () => {
  return (
    <>
      <Container>
        <Title1>AccountPage</Title1>
        <DialogContainer>
          <Dialog
            children1={"진행상황이 초기화되어요"}
            children2={"다시 처음부터 코스를 수강할 수 있어요."}
          ></Dialog>
        </DialogContainer>
      </Container>
      <Chipbutton children1={"aaid"}></Chipbutton>
    </>
  );
};
export default AccountPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

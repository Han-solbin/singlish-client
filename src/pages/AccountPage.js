import React from "react";
import styled from "styled-components";

import { Title2 } from "../atoms/text";
import { COLOR } from "../constants";
import { Accountheader } from "../organisms/header";
import { Dialog } from "../molecules/dialog";
import { Bottomnavigation } from "../molecules/navigation";
import { Memberprofile } from "../domain/member";

const AccountPage = () => {
  return (
    <>
      <Container>
        <Accountheader></Accountheader>
        <Memberprofile></Memberprofile>
        <Title2 color={COLOR.WHITE} margin={"1rem"}>
          수강중인 코스
        </Title2>
        <DialogContainer>
          <Dialog
            children1={"진행상황이 초기화되어요"}
            children2={"다시 처음부터 코스를 수강할 수 있어요."}
          ></Dialog>
        </DialogContainer>
      </Container>
      <Bottomnavigation></Bottomnavigation>
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

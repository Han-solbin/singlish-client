import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, GNB, PATH } from "../../constants";
import { Rowlist } from "../../atoms/list";
import {
  Coursenavigationbutton,
  Pracicenavigationbutton,
  Chatnavigationbutton,
  Accountnavigationbutton,
} from "../../atoms/navigation";

const Bottomnavigation = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const setCurrentLocation = () => {
    for (const key in GNB) {
      if (pathname.includes(GNB[key])) {
        return GNB[key];
      }
    }
  };

  const [isCurrent, setIsCurrent] = useState(setCurrentLocation);

  const handleCoursepage = () => {
    setIsCurrent(GNB.COURSES);
    navigate(PATH.COURSES + "/0");
  };

  const handlePracticepage = () => {
    setIsCurrent(GNB.PRACTICE);
    navigate(PATH.PRACTICE + "/0");
  };

  const handleChatbotpage = () => {
    setIsCurrent(GNB.CHATBOT);
    navigate(PATH.CHATBOT);
  };

  const handleAccountpage = () => {
    setIsCurrent(GNB.ACCOUNT);
    navigate(PATH.ACCOUNT + "/0");
  };

  console.log(GNB.COURSES);
  console.log(PATH.COURSES);
  console.log(GNB.CHATBOT);
  console.log(PATH.CHATBOT);
  return (
    <Container>
      <Rowlist>
        <Coursenavigationbutton
          isCurrent={isCurrent}
          onClick={handleCoursepage}
        ></Coursenavigationbutton>
        <Pracicenavigationbutton
          isCurrent={isCurrent}
          onClick={handlePracticepage}
        ></Pracicenavigationbutton>
        <Chatnavigationbutton
          isCurrent={isCurrent}
          onClick={handleChatbotpage}
        ></Chatnavigationbutton>
        <Accountnavigationbutton
          isCurrent={isCurrent}
          onClick={handleAccountpage}
        ></Accountnavigationbutton>
      </Rowlist>
    </Container>
  );
};

export default Bottomnavigation;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4rem;
  margin-top: 2rem;
  padding: 0.75rem 0 0 0;
  border-top: 0.063rem solid ${COLOR.GRAY700};
  z-index: 2;
  background-color: ${COLOR.BACKGROUND};
`;

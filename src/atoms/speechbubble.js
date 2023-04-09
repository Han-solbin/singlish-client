import React, { useState } from "react";
import styled from "styled-components";
import { Body3 } from "./text";
import { COLOR } from "../constants";

const Speechbubble = ({ message, isMe }) => {
  const [previousSender, setPreviousSender] = useState(null);
  const hasPreviousMessageFromSameSender = previousSender === isMe;

  React.useEffect(() => {
    setPreviousSender(isMe);
  }, [isMe]);

  return (
    <Bubble
      bgColor={isMe ? COLOR.BRANDCOLOR : COLOR.GRAY700}
      color={isMe ? COLOR.GRAY900 : COLOR.WHITE}
      className={`${isMe ? "right" : ""} ${
        hasPreviousMessageFromSameSender ? "no-tail" : ""
      }`}
    >
      <Body3>{message}</Body3>
    </Bubble>
  );
};
export default Speechbubble;

const Bubble = styled.div`
  position: relative;
  padding: 0px 10px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  border-radius: 1.25rem;
  margin-bottom: 1.25rem;

  ::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 20px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent transparent
      ${(props) => props.bgColor};
  }

  &.right {
    align-self: flex-end;
    background-color: ${(props) => props.bgColor};

    ::before {
      right: 20px;
      border-color: transparent ${(props) => props.bgColor} transparent
        transparent;
    }
  }

  &.no-tail {
    ::before {
      display: none;
    }
  }
`;

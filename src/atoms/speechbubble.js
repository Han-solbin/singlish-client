import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Body3 } from "./text";
import { COLOR } from "../constants";

const Speechbubble = ({ message, isMe }) => {
  const [previousSender, setPreviousSender] = useState(null);
  const hasPreviousMessageFromSameSender = previousSender === isMe;
  useEffect(() => {
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
      <Body3 margin={"0"}>{message}</Body3>
    </Bubble>
  );
};
export default Speechbubble;

const Bubble = styled.div`
  width: auto;
  position: relative;
  padding: 4px 8px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  border-radius: 1.25rem;
  margin-bottom: 1.25rem;
  align-self: flex-start;
  ::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 10px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent transparent
      ${(props) => props.bgColor};
  }

  &.right {
    align-self: flex-end;
    background-color: ${(props) => props.bgColor};

    ::before {
      right: 10px;
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

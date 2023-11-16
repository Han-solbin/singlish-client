import React from "react";
import styled from "styled-components";
import { PATH, COLOR } from "../../constants";
import { Title2, Body1, Body2 } from "../../atoms/text";
import { useNavigate } from "react-router-dom";

const SubscribePreview = ({ id, title, subtitle, activated, text, status }) => {
  const navigate = useNavigate();
  const handlePracticeDetailPage = () => {
    navigate(PATH.PRACTICEDETAIL + "/" + id * 6);
  };
  return (
    <Container activated={activated} onClick={handlePracticeDetailPage}>
      <Tag>
        <Body2 color={COLOR.GRAY300} margin={"0"}>
          {status}
        </Body2>
      </Tag>
      <Title2 color={COLOR.WHITE} margin={"0"}>
        {title}
      </Title2>
      <Body2 color={COLOR.GRAY100} margin={"0"}>
        {subtitle}
      </Body2>
      <ButtonContatiner>
        <FakeButton>
          <Body1 color={COLOR.GRAY900} margin={"0"}>
            {text}
            {" →"}
          </Body1>
        </FakeButton>
      </ButtonContatiner>
    </Container>
  );
};
export default SubscribePreview;

const ButtonContatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-contents: space-between;
`;

const FakeButton = styled.span`
  background-color: ${COLOR.BRANDCOLOR};
  height: auto;
  text-align: right;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  margin: 0rem 0rem 0.5rem auto;
`;

const Tag = styled.span`
  background-color: ${COLOR.GRAY900};
  height: auto;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  margin: 0rem 0rem 0.5rem 0rem;
`;

const Container = styled.button`
  display: ${(props) => (props.activated == true ? "none" : "flex")};
  border: none;
  height: auto;
  width: auto;
  flex-direction: column;
  text-align: left;
  margin: 0rem 0rem 1rem 0rem;
  padding: 0.75rem 1rem 0.75rem 1rem;
  background-color: #454a55;
  border-radius: 1.25rem;
`;

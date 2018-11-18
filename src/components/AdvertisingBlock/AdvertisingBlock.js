import React from "react";
import styled from "styled-components";

const AdWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 520px;
  border: 1px solid green;
`;
const AdContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1170px;
  height: 100%;
  border: 1px solid blue;
`;

const FirstBlock = styled.div``;

const Text = styled.h2`
  align-self: center;
  display: flex;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 55px;
  width: 1170px;
  font-size: 22px;
  font-family: "Roboto";
  color: rgb(0, 0, 0);
  line-height: 1.2;
  text-align: center;

  &::before,
  &::after {
    content: "";
    margin-top: 6px;
    flex-grow: 1;
    flex-shrink: 0;
    width: 50px;
    height: 2px;
    background-color: rgb(217, 217, 217);
  }

  &::before {
    margin-right: 25px;
  }

  &::after {
    margin-left: 25px;
  }
`;

const SecondBlock = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  border: 1px solid grey;
`;
const PhotoBlock = styled.div``;

export default () => {
  return (
    <AdWrapper>
      <AdContainer>
        <FirstBlock>
          <Text>Добавьте к вашему заказу</Text>
        </FirstBlock>
        <SecondBlock>
          <PhotoBlock />
        </SecondBlock>
      </AdContainer>
    </AdWrapper>
  );
};

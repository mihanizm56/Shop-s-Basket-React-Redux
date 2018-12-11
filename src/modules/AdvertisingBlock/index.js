import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { getAdPhoto } from "../../helpers/";

const AdWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 520px;
`;
const AdContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1170px;
  height: 100%;
`;

const FirstBlock = styled.div``;

const Text = styled.h2`
  align-self: center;
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
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
`;

const ItemBlock = styled.div`
  height: 100%;
  width: 276px;
`;

const ItemPhoto = styled.div`
  height: 276px;
  width: 276px;
`;

const ItemName = styled.div`
  text-align: center;
  margin: 5px 0 0 0;
  padding: 0 5px;
  font-size: 16px;
  font-family: "Roboto";
  color: rgb(0, 0, 0);
  line-height: 1.2;
  margin-bottom: 8px;
`;

const ItemPrice = styled.div`
  text-align: center;
  font-size: 16px;
  font-family: "Roboto";
  color: rgb(0, 0, 0);
  line-height: 1.2;
  margin: 0;
  padding: 0;
`;

export const AdvertisingBlock = ({ addList }) => {
  return (
    <AdWrapper>
      <AdContainer>
        <FirstBlock>
          <Text>Добавьте к вашему заказу</Text>
        </FirstBlock>
        <SecondBlock>
          {addList.map((item, index) => {
            return (
              <ItemBlock key={index}>
                <ItemPhoto
                  style={{ backgroundImage: `url(${getAdPhoto(index + 1)})` }}
                />
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{item.price} руб.</ItemPrice>
              </ItemBlock>
            );
          })}
        </SecondBlock>
      </AdContainer>
    </AdWrapper>
  );
};

AdvertisingBlock.defaultProps = {
  addList: []
};

AdvertisingBlock.propTypes = {
  addList: PropTypes.array.isRequired
};
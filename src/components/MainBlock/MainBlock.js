import React from "react";
import styled from "styled-components";

import DiscountWrapper from './Items/DiscountWrapper'

import getAdPhoto from "../../scripts/getAdPhoto";
import EditNumber from "./Items/EditNumber";

import crossIcon from "./Items/img/remove.png";

const MainTitle = styled.h2`
  align-self: center;
  display: flex;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 50px;
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

const MainBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableTitles = styled.div`
  display: flex;
  margin-bottom: 44px;
`;

const FirstBlock = styled.div`
  display: flex;
  width: 574px;
`;

const SecondBlock = styled.div`
  display: flex;
  width: 596px;
`;

const TitleNameItem = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: "Roboto";
  color: rgb(0, 0, 0);
  line-height: 1.2;
  margin-right: 148px;
`;

const TitleNameDescription = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: "Roboto";
  color: rgb(0, 0, 0);
  line-height: 1.2;
`;

const TitleNameNumber = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: "Roboto";
  color: rgb(0, 0, 0);
  line-height: 1.2;
  margin-right: 186px;
`;

const TitleNamePrice = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: "Roboto";
  color: rgb(0, 0, 0);
  line-height: 1.2;
  margin-right: 215px;
`;

const TitleNameDelete = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: "Roboto";
  color: rgb(0, 0, 0);
  line-height: 1.2;
`;

const ItemWrapper = styled.div``;

const ItemContainer = styled.div`
  height: 176px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 35px;
`;

const ItemPhoto = styled.div`
  height: 178px;
  width: 178px;
  margin-right: 15px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const DescriptionWrapper = styled.div`
  width: 211px;
  margin-right: 173px;
`;

const ItemName = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Roboto";
  font-size: 15px;
  width: 211px;
`;

const ItemCode = styled.p`
  margin: 13px 0 0 0;
  padding: 0;
  font-family: "Roboto";
  font-size: 14px;
  color: #808080;
`;

const ItemSize = styled.p`
  margin: 15px 0 0 0;
  padding: 0;
  font-family: "Roboto";
  font-size: 15px;
`;

const ItemColor = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Roboto";
  font-size: 15px;
`;

const ItemPrice = styled.p`
  display: flex;
  justify-content: center;
  width: 76px;
  height: 25px;
  padding: 0;
  margin-top: 0;
  margin-right: 213px;
`;

const DeleteIcon = styled.div`
  width: 18px;
  height: 18px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export default ({ userItems, increment, decrement, deleteItem, promocode, discount, checkDiscount, discountValue}) => {
  //console.log(promocode);
  return (
    <MainBlockWrapper>
      <MainTitle>Ваша корзина</MainTitle>
      <TableTitles>
        <FirstBlock>
          <TitleNameItem>Товар</TitleNameItem>
          <TitleNameDescription>Описание</TitleNameDescription>
        </FirstBlock>
        <SecondBlock>
          <TitleNameNumber>Количество</TitleNameNumber>
          <TitleNamePrice>Цена</TitleNamePrice>
          <TitleNameDelete>Удалить</TitleNameDelete>
        </SecondBlock>
      </TableTitles>
      <ItemWrapper>
        {userItems.map(item => {
          return (
            <ItemContainer key={item.id}>
              <ItemPhoto
                style={{ backgroundImage: `url(${getAdPhoto(item.code)})` }}
              />
              <DescriptionWrapper>
                <ItemName>{item.description}</ItemName>
                <ItemCode>Код: {item.code}</ItemCode>
                <ItemSize>Размер: {item.size}</ItemSize>
                <ItemColor>Цвет: {item.color}</ItemColor>
              </DescriptionWrapper>
              <EditNumber
                userItems={userItems}
                id={item.id}
                numberOfItems={item.numberOfItems}
                increment={increment}
                decrement={decrement}
              />
              <ItemPrice>{item.price} руб.</ItemPrice>
              <DeleteIcon
                style={{ backgroundImage: `url(${crossIcon})` }}
                onClick={() => deleteItem(userItems, item.id)}
              />
            </ItemContainer>
          );
        })}
      </ItemWrapper>
      <DiscountWrapper promocode={promocode} userItems={userItems} discount={discount} discountValue={discountValue} checkDiscount={checkDiscount} />
    </MainBlockWrapper>
  );
};
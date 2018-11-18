import React from "react";
import styled from "styled-components";
import getAdPhoto from "../../scripts/getAdPhoto";

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
const ItemContainer = styled.div``;
const ItemPhoto = styled.div``;
const DescriptionWrapper = styled.div``;
const ItemName = styled.p``;
const ItemCode = styled.p``;
const ItemSize = styled.p``;
const ItemColor = styled.p``
const EditNumber = styled.p``;
const ItemPrice = styled.p``;
const DeleteIcon = styled.div``;

export default ({ userItems }) => {
  console.log(userItems);
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
            <ItemContainer>
              <ItemPhoto />
              <DescriptionWrapper>
                <ItemName>{item.description}</ItemName>
                <ItemCode>{item.code}</ItemCode>
                <ItemSize>{item.size}</ItemSize>
                <ItemColor>{item.color}</ItemColor>
              </DescriptionWrapper>
              <EditNumber number={item.numberOfItems} />
              <ItemPrice>{item.price} руб.</ItemPrice>
              <DeleteIcon />
            </ItemContainer>
          );
        })}
      </ItemWrapper>
    </MainBlockWrapper>
  );
};

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import FindComponent from "./Items/FindComponent";
import {NumberOfItems} from "./Items/NumberItems";

import logo from "./Items/img/logo-shop.png";
import basket from "./Items/img/basket.png";
import person from "./Items/img/person.png";

const UserBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 87px;
`;

const UserBlockNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1170px;
`;

const FirstBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 537px;
  height: 100%;
`;

const SecondBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 256px;
  height: 100%;
`;

const UserInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const UserItemsWrapper = styled.div`
    display: flex;
    align-items: center;
    width:100px;
    height: 100%;
`;

const ShopLogo = styled.div`
  width: 198px;
  height: 56px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
`;

const UserIcon = styled.div`
  width: 27px;
  height: 25px;
  background-image: url(${person});
  background-size: contain;
  background-repeat: no-repeat;
`;

const BasketIcon = styled.div`
  width: 26px;
  height: 26px;
  background-image: url(${basket});
  background-size: contain;
  background-repeat: no-repeat;
`;

const UserName = styled.p`
    font-size: 14px;
    font-family: "Roboto";
    margin-left:10px;
    color: rgb(0, 0, 0);
    line-height: 1.2;
`


export const UserBlock = ({userName,numberOfItems}) => {
  return (
    <UserBlockWrapper>
      <UserBlockNav>
        <FirstBlock>
          <ShopLogo />
          <FindComponent />
        </FirstBlock>
        <SecondBlock>
          <UserInfoWrapper>
            <UserIcon />
            <UserName >{userName}</UserName>
          </UserInfoWrapper>
          <UserItemsWrapper>
            <BasketIcon />
            <NumberOfItems numberOfItems={numberOfItems}/>
          </UserItemsWrapper>
        </SecondBlock>
      </UserBlockNav>
    </UserBlockWrapper>
  );
};


UserBlock.defaultProps = {
  userName:'',
  numberOfItems:0
};

UserBlock.propTypes = {
  userName:PropTypes.string.isRequired,
  numberOfItems:PropTypes.number.isRequired
};
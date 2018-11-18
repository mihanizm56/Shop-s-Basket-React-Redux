import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Header/Header";
import UserBlock from "./UserBlock/UserBlock";
import NavigationBlock from "./NavigationBlock/NavigationBlock";
import MainBlock from "./MainBlock/MainBlock";
import AdvertisingBlock from "./AdvertisingBlock/AdvertisingBlock";
import Footer from "./Footer/Footer";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const BasketPage = ({adItems,userName,userItems}) => {
    return (
      <MainWrapper>
        <Header />
        <UserBlock userName = {userName} numberOfItems={userItems.length}/>
        <NavigationBlock />
        <MainBlock userItems={userItems}/>
        <AdvertisingBlock addList = {adItems}/>
        <Footer /> 
      </MainWrapper>
    );
}

export default BasketPage;

import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Header/Header";
import UserBlock from "./UserBlock/UserBlock";
import NavigationBlock from "./NavigationBlock/NavigationBlock";
import MainBlock from "./MainBlock/index";
import AdvertisingBlock from "./AdvertisingBlock/AdvertisingBlock";
import Footer from "./Footer/Footer";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

class BasketPage extends Component {
  state = {};

  render() {
    return (
      <MainWrapper>
        <Header />
        <UserBlock />
        <NavigationBlock />
        {/*<MainBlock />*/}
        <AdvertisingBlock />
        <Footer /> 
      </MainWrapper>
    );
  }
}

export default BasketPage;

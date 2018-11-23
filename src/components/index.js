import React from "react";
import styled from "styled-components";

import Header from "./Header/Header";
import { UserBlock } from "./UserBlock/UserBlock";
import NavigationBlock from "./NavigationBlock/NavigationBlock";
import { MainBlock } from "./MainBlock/MainBlock";
import { AdvertisingBlock } from "./AdvertisingBlock/AdvertisingBlock";
import Footer from "./Footer/Footer";

import getNumberOfItems from "../modules/getNumberOfItems";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const BasketPage = ({
  adItems,
  userName,
  userItems,
  increment,
  decrement,
  deleteItem,
  promocode,
  discount,
  discountValue,
  checkDiscount
}) => {
  return (
    <MainWrapper>
      <Header />
      <UserBlock
        userName={userName}
        numberOfItems={getNumberOfItems(userItems)}
      />
      <NavigationBlock />
      <MainBlock
        userItems={userItems}
        increment={increment}
        decrement={decrement}
        deleteItem={deleteItem}
        promocode={promocode}
        discount={discount}
        checkDiscount={checkDiscount}
        discountValue={discountValue}
      />
      <AdvertisingBlock addList={adItems} />
      <Footer />
    </MainWrapper>
  );
};

export default BasketPage;

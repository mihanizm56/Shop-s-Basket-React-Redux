import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import {
  AdvertisingBlock,
  MainBlock,
  NavigationBlock,
  UserBlock,
  Header,
  Footer,
} from "../"
import { getNumberOfItems } from "../../helpers/"

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const BasketPage = ({
  adItems,
  userName,
  userItems,
  increment,
  decrement,
  deleteItem,
  promocode,
  discount,
  discountValue,
  checkDiscount,
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
  )
}

BasketPage.propTypes = {
  adItems: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
  userItems: PropTypes.array.isRequired,
  promocode: PropTypes.string.isRequired,
  discount: PropTypes.bool.isRequired,
  discountValue: PropTypes.number.isRequired,
}

BasketPage.defaultProps = {
  adItems: [],
  userName: "test_string",
  userItems: [],
  promocode: "test",
  discount: false,
  discountValue: 1800,
}

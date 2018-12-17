import React from "react"
import styled from "styled-components"
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
  console.log(typeof adItems)
  console.log(typeof userName)
  console.log(typeof userItems)
  console.log(typeof increment)
  console.log(typeof decrement)
  console.log(typeof deleteItem)
  console.log(typeof promocode)
  console.log(typeof discount)
  console.log(typeof discountValue)
  console.log(typeof checkDiscoun)
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

// BasketPage.propTypes = {

//   adItems,
//   userName,
//   userItems: PropTypes.array.isRequired,
//   increment: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired,
//   deleteItem,
//   promocode,
//   discount,
//   discountValue,
//   checkDiscount,
// }

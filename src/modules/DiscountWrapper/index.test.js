import React from "react"
import { shallow } from "enzyme"
import { DiscountWrapper } from "./index"

describe("DiscountWrapper test", () => {
  const userItemsTest = [
    {
      img: "./img/img1.png",
      description: "Платье-миди с расклешенной юбкой",
      code: "82039-11",
      size: "44",
      color: "синий",
      price: 2450,
      numberOfItems: 1,
      id: 1,
    },
    {
      img: "./img/img2.png",
      description: "Туфли женские украшенные кружевными вставками",
      code: "13524-01",
      size: "38",
      color: "черный",
      price: 2450,
      numberOfItems: 1,
      id: 2,
    },
    {
      img: "./img/img3.png",
      description: "Платье-миди",
      code: "75039",
      size: "44",
      color: "белый",
      price: 2450,
      numberOfItems: 1,
      id: 3,
    },
    {
      img: "./img/img4.png",
      description: "Платье-миди",
      code: "75039",
      size: "46",
      color: "белый",
      price: 2450,
      numberOfItems: 1,
      id: 4,
    },
  ]

  it("Renders correct without props", () => {
    const component = shallow(<DiscountWrapper />)

    expect(component).toMatchSnapshot()
  })
  it("Renders correct with props", () => {
    const component = shallow(
      <DiscountWrapper
        promocode="123"
        userItems={userItemsTest}
        discount={true}
        checkDiscount={() => "test_callback"}
        discountValue={2000}
      />
    )

    expect(component).toMatchSnapshot()
  })
})

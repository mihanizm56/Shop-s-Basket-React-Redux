import React from "react"
import { shallow } from "enzyme"
import { BasketPage } from "./index"
import {
  MainBlock,
  Header,
  UserBlock,
  NavigationBlock,
  AdvertisingBlock,
  Footer,
} from "../"

describe("BasketPage test", () => {
  it("Renders correct defaultProps", () => {
    const component = shallow(<BasketPage />)

    expect(component).toMatchSnapshot()
  })

  it("Renders correct defaultProps", () => {
    const component = shallow(
      <BasketPage
        adItems={[
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
        ]}
        userName="test_name"
        userItems={[
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
        ]}
        increment={() => "test_func"}
        decrement={() => "test_func"}
        deleteItem={() => "test_func"}
        promocode="123"
        discount={false}
        discountValue={2100}
        checkDiscount={() => "test_func"}
      />
    )

    expect(component).toMatchSnapshot()
  })

  it("comes with MainBlock", () => {
    const component = shallow(<BasketPage />)

    const findingComponent = component.find(MainBlock).length

    expect(findingComponent).toBe(1)
  })

  it("comes with Header", () => {
    const component = shallow(<BasketPage />)

    const findingComponent = component.find(Header).length

    expect(findingComponent).toBe(1)
  })
  it("comes with UserBlock", () => {
    const component = shallow(<BasketPage />)

    const findingComponent = component.find(UserBlock).length

    expect(findingComponent).toBe(1)
  })
  it("comes with NavigationBlock", () => {
    const component = shallow(<BasketPage />)

    const findingComponent = component.find(NavigationBlock).length

    expect(findingComponent).toBe(1)
  })
  it("comes with AdvertisingBlock", () => {
    const component = shallow(<BasketPage />)

    const findingComponent = component.find(AdvertisingBlock).length

    expect(findingComponent).toBe(1)
  })
  it("comes with Footer", () => {
    const component = shallow(<BasketPage />)

    const findingComponent = component.find(Footer).length

    expect(findingComponent).toBe(1)
  })
})

import React from "react"
import { shallow } from "enzyme"
import { AdvertisingBlock } from "."

describe("AdvertisingBlock testing", () => {
  it("AdvertisingBlock render defaultProps", () => {
    const component = shallow(<AdvertisingBlock />)
    expect(component).toMatchSnapshot()
  })
  it("AdvertisingBlock render array", () => {
    const randomArray = [
      {
        name: "test_1",
        price: "test_rubles",
      },
      {
        name: "test_2",
        price: "test_rubles",
      },
      {
        name: "test_3",
        price: "test_rubles",
      },
      {
        name: "test_4",
        price: "test_rubles",
      },
    ]
    const component = shallow(<AdvertisingBlock addList={randomArray} />)
    expect(component).toMatchSnapshot()
  })
})

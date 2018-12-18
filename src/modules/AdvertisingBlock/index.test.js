import React from "react"
import { shallow } from "enzyme"
import { AdvertisingBlock } from "./index"

describe("Youtube", () => {
  const testArray = [
    {
      name: "test_name_1",
      price: "1234",
    },
    {
      name: "test_name_2",
      price: "1234",
    },
    {
      name: "test_name_3",
      price: "1234",
    },
  ]

  it("Renders correct defaultProps", () => {
    const component = shallow(<AdvertisingBlock />)

    expect(component).toMatchSnapshot()
  })

  it("Renders correct defaultProps", () => {
    const component = shallow(<AdvertisingBlock addList={testArray} />)

    expect(component).toMatchSnapshot()
  })
})

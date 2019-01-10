import React from "react"
import { shallow } from "enzyme"
import { NavigationBlock } from "./index"

describe("NavigationBlock test", () => {
  it("Renders correct", () => {
    const component = shallow(<NavigationBlock />)

    expect(component).toMatchSnapshot()
  })
})

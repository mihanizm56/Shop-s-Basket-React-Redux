import React from "react"
import { shallow } from "enzyme"
import { Star } from "."

describe("Star", () => {
  const component = shallow(<Star />)

  it("Renders correct", () => {
    expect(component).toMatchSnapshot()
  })
})

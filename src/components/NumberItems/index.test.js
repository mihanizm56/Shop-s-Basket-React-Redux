import React from "react"
import { shallow } from "enzyme"
import { NumberOfItems } from "."

describe("NumberOfItems", () => {
  it("Renders correct if numberOfItems more than 4", () => {
    const component = shallow(<NumberOfItems numberOfItems={5} />)
    expect(component).toMatchSnapshot()
  })

  it("Renders correct if numberOfItems less than 4", () => {
    const component = shallow(<NumberOfItems numberOfItems={3} />)
    expect(component).toMatchSnapshot()
  })
})

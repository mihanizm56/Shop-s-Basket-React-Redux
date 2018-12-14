import React from "react"
import { shallow } from "enzyme"
import { FindComponent } from "."

describe("EditNumber", () => {
  it("Renders correct", () => {
    const component = shallow(<FindComponent />)
    expect(component).toMatchSnapshot()
  })
})

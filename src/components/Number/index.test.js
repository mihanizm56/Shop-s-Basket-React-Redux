import React from "react"
import { shallow } from "enzyme"
import { Number } from "."

describe("Number", () => {
  const component = shallow(<Number />)

  it("Renders correct", () => {
    expect(component).toMatchSnapshot()
  })
})

import React from "react"
import { shallow } from "enzyme"
import { Header } from "./index"

describe("Header test", () => {
  it("Renders correct", () => {
    const component = shallow(<Header />)

    expect(component).toMatchSnapshot()
  })
})

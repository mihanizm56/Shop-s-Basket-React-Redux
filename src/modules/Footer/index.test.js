import React from "react"
import { shallow } from "enzyme"
import { Footer } from "./index"

describe("Footer test", () => {
  it("Renders correct", () => {
    const component = shallow(<Footer />)

    expect(component).toMatchSnapshot()
  })
})

import React from "react"
import { shallow } from "enzyme"
import { Youtube } from "./index"

describe("Youtube", () => {
  const component = shallow(<Youtube />)

  it("Renders correct", () => {
    expect(component).toMatchSnapshot()
  })
})

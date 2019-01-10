import React from "react"
import { shallow } from "enzyme"
import { LiveStream } from "."

describe("LiveStream", () => {
  const component = shallow(<LiveStream />)

  it("Renders correct", () => {
    expect(component).toMatchSnapshot()
  })
})

import React from "react"
import { shallow } from "enzyme"
import { FreeCall } from "."

describe.only("EditNumber", () => {
  const component = shallow(<FreeCall />)

  it("Renders correct", () => {
    expect(component).toMatchSnapshot()
  })
})

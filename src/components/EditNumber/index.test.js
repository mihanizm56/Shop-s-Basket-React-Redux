import React from "react"
import { shallow } from "enzyme"
import { EditNumber } from "."

describe("EditNumber", () => {
  it("Renders correct", () => {
    let output = shallow(<EditNumber />)

    expect(output).toMatchSnapshot()
  })
  it("Check render props", () => {
    let output = shallow(
      <EditNumber userItems={["test1", "test2", "test3"]} numberOfItems="4" />
    )

    expect(output).toMatchSnapshot()
  })
  // it("Check increment", () => {})
})

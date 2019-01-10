import React from "react"
import { shallow } from "enzyme"
import { UserBlock } from "./index"
import { NumberOfItems, FindComponent } from "../../components/"

describe("UserBlock test", () => {
  it("Renders correct without props", () => {
    const component = shallow(<UserBlock />)

    expect(component).toMatchSnapshot()
  })
  it("Renders correct with props", () => {
    const component = shallow(
      <UserBlock userName="test_name" numberOfItems={10} />
    )

    expect(component).toMatchSnapshot()
  })

  it("Renders correct NumberOfItems", () => {
    const component = shallow(<UserBlock />)
    const result = component.find(NumberOfItems).length

    expect(result).toBe(1)
  })
  it("Renders correct FindComponent", () => {
    const component = shallow(<UserBlock />)
    const result = component.find(FindComponent).length

    expect(result).toBe(1)
  })
})

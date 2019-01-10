import React from "react"
import { shallow } from "enzyme"
import { MainBlock } from "./index"

describe("MainBlock test", () => {
  it("Renders correct default props", () => {
    const component = shallow(<MainBlock />)

    expect(component).toMatchSnapshot()
  })

  it("Renders correct normal props", () => {
    const component = shallow(
      <MainBlock
        userItems={[{id:1}]}
        increment={() => "test"}
        decrement={() => "test"}
        deleteItem={() => "test"}
        promocode={"test_code"}
        discount={false}
        checkDiscount={() => "test"}
        discountValue={5500}
      />
    )

    expect(component).toMatchSnapshot()
  })
})

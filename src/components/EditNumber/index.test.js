import React from "react"
import { shallow, mount } from "enzyme"
import { EditNumber } from "."

describe("EditNumber", () => {
  let onSubmitSpyDecrement = jest.fn().mockReturnValueOnce(10)
  let onSubmitSpyIncrement = jest.fn().mockReturnValueOnce(20)

  const component = shallow(
    <EditNumber
      userItems={["test1", "test2", "test3"]}
      numberOfItems={4}
      id={1}
      decrement={onSubmitSpyDecrement}
      increment={onSubmitSpyIncrement}
    />
  )

  const defaultProps = mount(<EditNumber />).props()

  it("Renders correct", () => {
    expect(component).toMatchSnapshot()
  })

  it("Check increment with the value", () => {
    const button = component.find(".incrementFunc")

    expect(onSubmitSpyIncrement).not.toHaveBeenCalled()

    button.at(0).simulate("click")

    expect(onSubmitSpyIncrement).toHaveBeenCalled()

    expect(onSubmitSpyIncrement.mock.results[0].value).toBe(20)
  })

  it("Check decrement with the value", () => {
    const button = component.find(".decrementFunc")

    expect(onSubmitSpyDecrement).not.toHaveBeenCalled()

    button.at(0).simulate("click")

    expect(onSubmitSpyDecrement).toHaveBeenCalled()

    expect(onSubmitSpyDecrement.mock.results[0].value).toBe(10)
  })

  it("Check decrement without any value", () => {
    const decrement = defaultProps.decrement
    expect(decrement()).toEqual("test_decrement")
  })

  it("Check increment without any value", () => {
    const increment = defaultProps.increment
    expect(increment()).toEqual("test_increment")
  })
})

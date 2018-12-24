import React from "react"
import { shallow, mount } from "enzyme"
import { MainBlock } from "./index"

describe("MainBlock test", () => {
  let onSubmitSpyDecrement = jest
    .fn()
    .mockReturnValueOnce("onSubmitSpyDecrement")
  let onSubmitSpyIncrement = jest.fn().mockReturnValueOnce(10)
  let onSubmitSpyDeleteItem = jest.fn().mockReturnValueOnce(10)
  let onSubmitSpycheckDiscount = jest
    .fn()
    .mockReturnValueOnce("onSubmitSpycheckDiscount")

  const defaultProps = mount(<MainBlock />).props()

  const component = shallow(
    <MainBlock
      userItems={[{}]}
      increment={onSubmitSpyIncrement}
      decrement={onSubmitSpyDecrement}
      deleteItem={onSubmitSpyDeleteItem}
      promocode={"test_code"}
      discount={false}
      checkDiscount={onSubmitSpycheckDiscount}
      discountValue={5500}
    />
  )

  it("Renders correct default props", () => {
    const component = shallow(<MainBlock />)

    expect(component).toMatchSnapshot()
  })

  it("Renders correct normal props", () => {
    expect(component).toMatchSnapshot()
  })

  it("Check decrement without any value", () => {
    const decrement = defaultProps.decrement
    expect(decrement()).toEqual("test_decrement")
  })
  it("Check increment without any value", () => {
    const increment = defaultProps.increment
    expect(increment()).toEqual("test_increment")
  })
  it("Check deleteItem without any value", () => {
    const deleteItem = defaultProps.deleteItem
    expect(deleteItem()).toEqual("test_deleteItem")
  })
  it("Check checkDiscount without any value", () => {
    const checkDiscount = defaultProps.checkDiscount
    expect(checkDiscount()).toEqual("test_checkDiscount")
  })

  it("Check deleteItem with the value", () => {
    const button = component.find(".icon_delete")

    expect(onSubmitSpyDeleteItem).not.toHaveBeenCalled()

    button.at(0).simulate("click")

    expect(onSubmitSpyDeleteItem).toHaveBeenCalled()

    expect(onSubmitSpyDeleteItem.mock.results[0].value).toBe(10)
  })

  // it("Check decrement with the value", () => {
  //   const button = component.find(".decrementFunc")

  //   expect(onSubmitSpyDecrement).not.toHaveBeenCalled()

  //   button.at(0).simulate("click")

  //   expect(onSubmitSpyDecrement).toHaveBeenCalled()

  //   expect(onSubmitSpyDecrement.mock.results[0].value).toBe(10)
  // })

  // it("Check deleteItem with the value", () => {
  //   const button = component.find(".decrementFunc")

  //   expect(onSubmitSpyDecrement).not.toHaveBeenCalled()

  //   button.at(0).simulate("click")

  //   expect(onSubmitSpyDecrement).toHaveBeenCalled()

  //   expect(onSubmitSpyDecrement.mock.results[0].value).toBe(10)
  // })

  // it("Check checkDiscount with the value", () => {
  //   const button = component.find(".decrementFunc")

  //   expect(onSubmitSpyDecrement).not.toHaveBeenCalled()

  //   button.at(0).simulate("click")

  //   expect(onSubmitSpyDecrement).toHaveBeenCalled()

  //   expect(onSubmitSpyDecrement.mock.results[0].value).toBe(10)
  // })
})

import { changeNumberOfItems } from "../helpers/"
import { incrementItem, decrementItem, deleteItem, checkDiscount } from "./"

describe("check action-creators", () => {
  let resultObject = {}

  const initArray = [
    {
      img: "./img/img1.png",
      description: "Платье-миди с расклешенной юбкой",
      code: "82039-11",
      size: "44",
      color: "синий",
      price: 2450,
      numberOfItems: 1,
      id: 1,
    },
    {
      img: "./img/img2.png",
      description: "Туфли женские украшенные кружевными вставками",
      code: "13524-01",
      size: "38",
      color: "черный",
      price: 2450,
      numberOfItems: 1,
      id: 2,
    },
    {
      img: "./img/img3.png",
      description: "Платье-миди",
      code: "75039",
      size: "44",
      color: "белый",
      price: 2450,
      numberOfItems: 1,
      id: 3,
    },
    {
      img: "./img/img4.png",
      description: "Платье-миди",
      code: "75039",
      size: "46",
      color: "белый",
      price: 2450,
      numberOfItems: 1,
      id: 4,
    },
  ]

  const id = 2
  const indexOfItem = 1
  let parameter = ""

  it("incrementItem works", () => {
    parameter = "increase"

    const expectingResult = {
      type: "INCREMENT_ITEM",
      payload: changeNumberOfItems(initArray, id, indexOfItem, parameter),
    }

    resultObject = incrementItem(initArray, id, indexOfItem)

    expect(resultObject).toEqual(expectingResult)
  })

  it("decrementItem works", () => {
    parameter = "decrease"

    const expectingResult = {
      type: "DECREMENT_ITEM",
      payload: changeNumberOfItems(initArray, id, indexOfItem, parameter),
    }

    resultObject = decrementItem(initArray, id, indexOfItem)

    expect(resultObject).toEqual(expectingResult)
  })

  it("deleteItem works", () => {
    parameter = "delete"

    const expectingResult = {
      type: "DELETE_ITEM",
      payload: changeNumberOfItems(initArray, id, indexOfItem, parameter),
    }

    resultObject = deleteItem(initArray, id)

    expect(resultObject).toEqual(expectingResult)
  })

  it("checkDiscount works", () => {
    parameter = "delete"
    const value = "test"
    const code = "test1"

    const expectingResult = {
      type: "CHECK_DISCOUNT",
      payload: value === code,
    }

    resultObject = checkDiscount(initArray, id)

    expect(resultObject).toEqual(expectingResult)
  })
})

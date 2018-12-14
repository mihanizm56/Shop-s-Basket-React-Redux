import firstPhoto from "./img/good-1.png"
import secondPhoto from "./img/good-2.png"
import thirdPhoto from "./img/good-3.png"
import fourthPhoto from "./img/good-4.png"
import firstItemPhoto from "./img/item1.png"
import secondItemPhoto from "./img/item2.png"
import thirdItemPhoto from "./img/item3.png"

import {
  changeNumberOfItems,
  checkSumOfItems,
  getAdPhoto,
  getNumberOfItems,
} from "./index"

describe.only("changeNumberOfItems", () => {
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

  const newArray = [
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

  const increasedArray = [
    {
      code: "82039-11",
      color: "синий",
      description: "Платье-миди с расклешенной юбкой",
      id: 1,
      img: "./img/img1.png",
      numberOfItems: 1,
      price: 2450,
      size: "44",
    },
    {
      code: "13524-01",
      color: "черный",
      description: "Туфли женские украшенные кружевными вставками",
      id: 2,
      img: "./img/img2.png",
      numberOfItems: 2,
      price: 2450,
      size: "38",
    },
    {
      code: "75039",
      color: "белый",
      description: "Платье-миди",
      id: 3,
      img: "./img/img3.png",
      numberOfItems: 1,
      price: 2450,
      size: "44",
    },
    {
      code: "75039",
      color: "белый",
      description: "Платье-миди",
      id: 4,
      img: "./img/img4.png",
      numberOfItems: 1,
      price: 2450,
      size: "46",
    },
  ]

  describe("changeNumberOfItems works", () => {
    it("changeNumberOfItems increasing", () => {
      const id = 2
      const number = newArray[id - 1].numberOfItems
      const paramenter = "increase"
      const result = changeNumberOfItems(newArray, id, number, paramenter)

      expect(result).toEqual(increasedArray)
    })

    it("changeNumberOfItems decreasing", () => {
      const id = 2
      const number = increasedArray[id - 1].numberOfItems
      const paramenter = "decrease"
      const result = changeNumberOfItems(increasedArray, id, number, paramenter)

      expect(result).toEqual(initArray)
    })
  })
})

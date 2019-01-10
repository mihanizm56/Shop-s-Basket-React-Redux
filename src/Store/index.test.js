import { store } from "../Store/"
import {
  incrementItem,
  decrementItem,
  deleteItem,
  checkDiscount,
} from "../Actions/"

describe("Store testing", () => {
  const initState = {
    adItems: [
      {
        img: 1,
        name: "Солнечные очки зеленого цвета в стиле ретро",
        price: "2450",
      },
      { img: 2, name: "Шляпа", price: "800" },
      { img: 3, name: "Платье-миди с расклешенной юбкой", price: "2450" },
      { img: 4, name: "Платье-миди с расклешенной юбкой", price: "2450" },
    ],
    discount: false,
    discountValue: 1800,
    promocode: "123",
    userItems: [
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
        numberOfItems: 1,
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
    ],
    userName: "Анастасия",
  }

  const incrementState = {
    adItems: [
      {
        img: 1,
        name: "Солнечные очки зеленого цвета в стиле ретро",
        price: "2450",
      },
      { img: 2, name: "Шляпа", price: "800" },
      { img: 3, name: "Платье-миди с расклешенной юбкой", price: "2450" },
      { img: 4, name: "Платье-миди с расклешенной юбкой", price: "2450" },
    ],
    discount: false,
    discountValue: 1800,
    promocode: "123",
    userItems: [
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
    ],
    userName: "Анастасия",
  }

  const deletedState = {
    adItems: [
      {
        img: 1,
        name: "Солнечные очки зеленого цвета в стиле ретро",
        price: "2450",
      },
      { img: 2, name: "Шляпа", price: "800" },
      { img: 3, name: "Платье-миди с расклешенной юбкой", price: "2450" },
      { img: 4, name: "Платье-миди с расклешенной юбкой", price: "2450" },
    ],
    discount: false,
    discountValue: 1800,
    promocode: "123",
    userItems: [
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
    ],
    userName: "Анастасия",
  }

  const id = 2
  const indexOfItem = 1

  it("Makes correct initState", () => {
    expect(store.getState()).toEqual(initState)
  })
  it("Makes correct incrementItem", () => {
    store.dispatch(incrementItem(initState.userItems, id, indexOfItem))
    expect(store.getState()).toEqual(incrementState)
  })
  it("Makes correct decrementItem", () => {
    store.dispatch(decrementItem(incrementState.userItems, id, indexOfItem))
    expect(store.getState()).toEqual(initState)
  })

  it("Makes correct decrementItem", () => {
    store.dispatch(deleteItem(initState.userItems, id))
    expect(store.getState()).toEqual(deletedState)
  })

  it("Makes correct decrementItem", () => {
    store.dispatch(checkDiscount(incrementState.promocode, "123"))
    expect(store.getState().discount).toBe(true)
  })
})

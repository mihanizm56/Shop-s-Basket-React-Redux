import { rootReducer } from "./"
import { changeNumberOfItems } from "../helpers/"

describe("Testing rootReducer", () => {
  let resultObject = {}

  const initialState = {
    userName: "Анастасия",
    promocode: "123",
    discount: false,
    discountValue: 1800,
    adItems: [
      {
        img: 1,
        name: "Солнечные очки зеленого цвета в стиле ретро",
        price: "2450",
      },
      {
        img: 2,
        name: "Шляпа",
        price: "800",
      },
      {
        img: 3,
        name: "Платье-миди с расклешенной юбкой",
        price: "2450",
      },
      {
        img: 4,
        name: "Платье-миди с расклешенной юбкой",
        price: "2450",
      },
    ],
    userItems: [
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
    ],
  }

  const increasedState = {
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

  const filteredState = {
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

  const discountState = {
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
    discount: true,
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

  const id = 2
  const indexOfItem = 1
  let parameter = ""
  let actionCreator = {}

  it("rootReducer action INCREMENT_ITEM", () => {
    parameter = "increase"

    actionCreator = {
      type: "INCREMENT_ITEM",
      payload: changeNumberOfItems(
        initArray,
        id,
        initArray[indexOfItem].numberOfItems,
        parameter
      ),
    }

    resultObject = rootReducer(actionCreator)

    expect(resultObject).toEqual(increasedState)
  })

  it("rootReducer action DECREMENT_ITEM", () => {
    parameter = "decrease"

    actionCreator = {
      type: "DECREMENT_ITEM",
      payload: changeNumberOfItems(
        increasedArray,
        id,
        increasedArray[indexOfItem].numberOfItems,
        parameter
      ),
    }

    resultObject = rootReducer(actionCreator)

    expect(resultObject).toEqual(initialState)
  })

  it("rootReducer action DELETE_ITEM", () => {
    parameter = "delete"

    actionCreator = {
      type: "DELETE_ITEM",
      payload: changeNumberOfItems(
        increasedArray,
        id,
        increasedArray[indexOfItem].numberOfItems,
        parameter
      ),
    }

    resultObject = rootReducer(actionCreator)

    expect(resultObject).toEqual(filteredState)
  })

  it("rootReducer action CHECK_DISCOUNT", () => {
    actionCreator = {
      type: "CHECK_DISCOUNT",
      payload: true,
    }

    resultObject = rootReducer(actionCreator)

    expect(resultObject).toEqual(discountState)
  })

  it("rootReducer action undefined", () => {
    actionCreator = {
      type: "undefined",
      payload: "12345",
    }

    resultObject = rootReducer(actionCreator)

    expect(resultObject).toEqual(initialState)
  })
})

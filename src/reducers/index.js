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

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_ITEM":
      return { ...state, userItems: action.payload }
    case "DECREMENT_ITEM":
      return { ...state, userItems: action.payload }
    case "DELETE_ITEM":
      return { ...state, userItems: action.payload }
    case "CHECK_DISCOUNT":
      return { ...state, discount: action.payload }

    default:
      return state
  }
}

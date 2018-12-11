import { initialState } from '../Store/'

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT_ITEM":
        return { ...state, userItems: action.payload };
      case "DECREMENT_ITEM":
        return { ...state, userItems: action.payload };
      case "DELETE_ITEM":
        return { ...state, userItems: action.payload };
      case "CHECK_DISCOUNT":
        return { ...state, discount: action.payload};

      default:
        return state;
    }
  };

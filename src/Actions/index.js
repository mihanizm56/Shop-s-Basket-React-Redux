import { changeNumberOfItems } from "../helpers/"

export const incrementItem = (array, id, numberOfItems) => {
  return {
    type: "INCREMENT_ITEM",
    payload: changeNumberOfItems(array, id, numberOfItems, "increase"),
  }
}

export const decrementItem = (array, id, numberOfItems) => {
  return {
    type: "DECREMENT_ITEM",
    payload: changeNumberOfItems(array, id, numberOfItems, "decrease"),
  }
}

export const deleteItem = (array, id) => {
  return {
    type: "DELETE_ITEM",
    payload: changeNumberOfItems(array, id, null, "delete"),
  }
}

export const checkDiscount = (value, code) => {
  return {
    type: "CHECK_DISCOUNT",
    payload: value === code,
  }
}

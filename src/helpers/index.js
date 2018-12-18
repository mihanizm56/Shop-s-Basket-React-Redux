import firstPhoto from "./img/good-1.png"
import secondPhoto from "./img/good-2.png"
import thirdPhoto from "./img/good-3.png"
import fourthPhoto from "./img/good-4.png"
import firstItemPhoto from "./img/item1.png"
import secondItemPhoto from "./img/item2.png"
import thirdItemPhoto from "./img/item3.png"

export const changeNumberOfItems = (array, id, numberOfItems, parameter) => {
  const newArray = [...array]
  if (newArray.length && id) {
    if (parameter === "increase" && numberOfItems) {
      newArray.forEach(element => {
        if (element.id) {
          if (element.id === id) element.numberOfItems = numberOfItems + 1
        }
      })

      return newArray
    }
    if (parameter === "decrease" && numberOfItems) {
      if (numberOfItems > 1) {
        newArray.forEach(element => {
          if (element.id) {
            if (element.id === id) element.numberOfItems = numberOfItems - 1
          }
        })
      }

      return newArray
    }
    if (parameter === "delete") {
      return newArray.filter(element => element.id !== id)
    }

    return newArray
  }

  return array
}

export const checkSumOfItems = array => {
  if (array.length) {
    let result = 0
    array.forEach(element => {
      if (element.numberOfItems && element.price)
        result = result + element.numberOfItems * element.price
    })
    return result
  }
  return array
}

export const getAdPhoto = indexOfImg => {
  if (indexOfImg) {
    switch (indexOfImg) {
      case 1:
        return firstPhoto
      case 2:
        return secondPhoto
      case 3:
        return thirdPhoto
      case 4:
        return fourthPhoto
      case "13524-01":
        return secondItemPhoto
      case "82039-11":
        return firstItemPhoto
      case "75039":
        return thirdItemPhoto

      default:
        return "pictureIsNotFound"
    }
  }
  return "pictureIsNotFound"
}

export const getNumberOfItems = array => {
  if (array.length) {
    let result = 0
    array.forEach(element => {
      if (element.numberOfItems) result += element.numberOfItems
    })
    return result
  }
  return array.length
}

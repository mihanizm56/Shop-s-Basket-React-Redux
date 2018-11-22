export const changeNumberOfItems = (array, id, numberOfItems, parameter) => {
  const newArray = [...array];
  if (parameter === "increase") {
    newArray.forEach(element => {
      if (element.id === id) element.numberOfItems = numberOfItems + 1;
    });
    return newArray;
  }
  if (parameter === "decrease") {
    if (numberOfItems > 1) {
      newArray.forEach(element => {
        if (element.id === id) element.numberOfItems = numberOfItems - 1;
      });
    }
    return newArray;
  }
  if (parameter === "delete") {
    return newArray.filter(element => element.id !== id);
  }
};

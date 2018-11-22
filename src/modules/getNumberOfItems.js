export default array => {
  let result = 0;
  array.forEach(element => {
    result += element.numberOfItems;
  });
  return result;
};

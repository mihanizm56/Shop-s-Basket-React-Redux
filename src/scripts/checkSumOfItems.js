export default array => {
    let result = 0
    array.forEach(element => {
        result = result + (element.numberOfItems*element.price)
    });
    return result
}
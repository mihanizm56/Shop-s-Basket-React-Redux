
export default array => {
    let result = 0
    array.map(element=>{
        result += element.numberOfItems
    })
    return result
}
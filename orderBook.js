function reconcileOrder(existingBook, incomingOrder) {
  // create empty array to push in all info
  let newList = []

  // if the existing book does not contain any data
  if (existingBook.length <= 0) {
    // add incoming order to empty book
    existingBook.push(incomingOrder)

    return existingBook }

  // run through the items in the existing book
  for (let i = 0; i < existingBook.length; i++) {
    // turn current item in existingBook into a variable so it can be reused
    let currentItem = existingBook[i]

    // if the order type is the same add it to the existing book
    // if the order type is different also add it
    if (currentItem.type === incomingOrder.type || currentItem.type !== incomingOrder.type) {
      existingBook.push(incomingOrder)

      // if the order type and quantity matches remove both matches from existingbook
      if (currentItem.type !== incomingOrder.type && currentItem.quantity === incomingOrder.quantity) {
        let matchingOrder = existingBook.filter(order => order.type === incomingOrder.type &&
          order.quantity !== incomingOrder.quantity)

        return matchingOrder
      }
    }

    // return updated book
    return existingBook
  }
}


module.exports = reconcileOrder

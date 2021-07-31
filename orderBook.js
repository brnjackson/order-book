function reconcileOrder(existingBook, incomingOrder) {
  // if the existing book does not contain any data
  if (existingBook.length === 0) {
    // add incoming order to empty book
    existingBook.push(incomingOrder)

    return existingBook
  }
  let newArray = []

  // run through the items in the existing book
  for (let i = 0; i < existingBook.length; i++) {
    // turn current item in existingBook into a variable so it can be reused
    let currentItem = existingBook[i]

    // if the order type is the same add it to the existing book
    // if the order type is different also add it
    if (incomingOrder.type !== currentItem.type &&
      (incomingOrder.price === currentItem.price ||
      (incomingOrder.type === 'sell' && incomingOrder.price < currentItem.price))) {
      // order type different and price is same
      // subtract smaller quantity from both orders
      let smallerQty =
        incomingOrder.quantity < currentItem.quantity
          ? incomingOrder.quantity
          : currentItem.quantity

      currentItem.quantity = currentItem.quantity - smallerQty
      incomingOrder.quantity = incomingOrder.quantity - smallerQty

      if (currentItem.quantity === 0) {
        existingBook.splice(i, 1)
        i--
      } else {
        newArray.push(currentItem)
        existingBook.splice(i, 1)
        i--
      }
    }
  }
  if (incomingOrder.quantity > 0) {
    existingBook.push(incomingOrder)
  }
  existingBook = existingBook.concat(newArray)

  return existingBook
}

module.exports = reconcileOrder

function reconcileOrder(existingBook, incomingOrder) {
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
      // if orders match and existing qty is greater than the incoming qty
      if (currentItem.type !== incomingOrder.type && currentItem.quantity > incomingOrder.quantity) {
        // matchingOrder is the finished filtered array
        let matchingOrder = existingBook.filter(order => order.type === incomingOrder.type &&
          order.quantity !== incomingOrder.quantity)

        // add incoming order to updatedBook
        existingBook.push(incomingOrder)

        // run through the filtered array - check qty. update qty to reflect existing qty subtracted incoming qty

        if (currentItem.quantity > incomingOrder.quantity) {
          matchingOrder.push({
            price: incomingOrder.price,
            type: currentItem.type,
            quantity: currentItem.quantity - incomingOrder.quantity
          })


          return matchingOrder
        }
        if (currentItem.type !== incomingOrder.type && currentItem.price === incomingOrder.price)
        { let matchingOrder = existingBook.filter(order => order.type === incomingOrder.type)

          existingBook.push(incomingOrder)
          if (currentItem.quantity < incomingOrder) {
            matchingOrder.push({
              price: incomingOrder.price,
              type: incomingOrder.type,
              quantity: incomingOrder.quantity - currentItem.quantity

            })

            return matchingOrder
          }

          // incoming order type = sell + quantity = 15 + price = 6150
          // existing order type = buy + quantity = 10 + price = 6150
          // type = sell + qty = 12 + price = 5950
          // update existing order to
          // type = sell quantity = 5 price = 6150 &  type = sell + qty = 12 + price = 5950
          // remove existing buy order
          // updating existingBook to include rem 5 units from sell order
        }
      }
      if (currentItem.type !== incomingOrder.type && currentItem.price > incomingOrder.price &&
          currentItem.quantity === incomingOrder.quantity) {
        let matchingOrder = existingBook.filter(order => order.type !== incomingOrder.type)

        return matchingOrder
      }

      // return updated book
      return existingBook
    }
  }
}

module.exports = reconcileOrder

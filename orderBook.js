function reconcileOrder(existingBook, incomingOrder) {
  if (incomingOrder.type !== existingBook.type) {
    existingBook.push(incomingOrder)
  }
  if (existingBook <= 0) {
    existingBook.push(incomingOrder)
  }
  return existingBook
}

/* function reconcileOrder(){
if (incomingOrder.price === order.price){
  index = i
}
if (index !=== undefined) {
  existingBook.push(incomingOrder)
}
})
    
}
*/
module.exports = reconcileOrder

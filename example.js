/* function greaterThanFive(num) {
  return num > 5
}

function isEven(num) {
  return num % 2 === 0
}

function whatDoIDo1(arr, pred) {
  let returnVal = true

  arr.forEach((item) => {
    if (!pred(item)) {
      returnVal = false
    }
  })

  return returnVal
}
console.log(whatDoIDo1([1,2,3], isEven))
console.log(whatDoIDo1([], isEven))
*/

/* function whatDoIDo2Internal(remainingArr, resultArr) {
  if (remainingArr.length < 1) {
    return resultArr
  } else {
    const nextItem = remainingArr.pop()

    resultArr.unshift(nextItem * 2)

    return whatDoIDo2Internal(remainingArr, resultArr)
  }
}

function whatDoIDo2(arr) {
  return whatDoIDo2Internal(arr, [])
}
console.log(whatDoIDo2([5,6,4,7,3,8]))
console.log(whatDoIDo2(['a','b','c','d']))
*/

function whatDoIDo3(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        var numToFlip = arr[j - 1]

        arr[j - 1] = arr[j]
        arr[j] = numToFlip
      }
    }
  }

  return arr
}
console.log(whatDoIDo3([5, 6, 4, 7, 3, 8]))

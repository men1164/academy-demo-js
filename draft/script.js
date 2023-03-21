const list = [1, 2, 3, 4, 5]

const sum = list.reduce((previousValue, currentValue) => {
  return previousValue + currentValue
});

console.log(sum)


const haveEven = list.some((value) => {
  return value % 2 === 0
})

console.log(haveEven)


const allEven = list.filter((value) => {
  return value % 2 === 0
})
console.log(allEven)

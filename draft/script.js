const tripLocation = ['London', 'Bali', 'Amsterdam', 'Paris']

tripLocation.forEach((location, idx) => {
  console.log(idx, location)
})
// ! ไม่ได้บอกว่า for loop จะไม่ได้ใช้ เพียงแต่ถ้าอยากให้โค้ดทำงานแบบนี้ หรือ use case แบบนี้ เราสามารถเขียนท่านี้ได้


const list = [1, 2, 3, 4, 5]

// * .map()
const newList = list.map((value) => {
  return value * 2
})

console.log(newList)


// * .filter()
const filtered = list.filter((value) => {
  return value % 2 === 0
})

console.log(filtered)


// * .reduce()
const sum = list.reduce((prevVal, value) => {
  return prevVal + value
})

console.log(sum)
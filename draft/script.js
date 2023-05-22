const tripLocation = ['London', 'Bali', 'Amsterdam', 'Paris']

tripLocation.forEach((location, idx) => {
  console.log(idx, location)
})
// ! ไม่ได้บอกว่า for loop จะไม่ได้ใช้ เพียงแต่ถ้าอยากให้โค้ดทำงานแบบนี้ หรือ use case แบบนี้ เราสามารถเขียนท่านี้ได้


const prices = [20, 15, 30, 40, 55]

// * .map()
const newPrices = prices.map((price) => {
  return price * 1.1
})

console.log(newPrices)


// * .filter()
const filtered = prices.filter((price) => {
  return price > 30
})

console.log(filtered)


// * .reduce()
const sum = prices.reduce((prevVal, price) => {
  return prevVal + price
})

console.log(sum)
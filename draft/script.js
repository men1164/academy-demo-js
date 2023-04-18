// ! Remind them of this code
const tripLocation = ['London', 'Bali', 'Amsterdam', 'Paris']

for (let i = 0; i < tripLocation.length; i++){
  console.log(tripLocation[i]);
}

// * I'm gonna do the same thing with .forEach() method
// * forEach calls the callbackfn function one time for each element in the array.
tripLocation.forEach((location, idx) => {
  console.log(idx, location) // ! เพิ่ม index หลัง demo
})

// ! ไม่ได้บอกว่า for loop จะไม่ได้ใช้ เพียงแต่ถ้าอยากให้โค้ดทำงานแบบนี้ หรือ use case แบบนี้ เราสามารถเขียนท่านี้ได้
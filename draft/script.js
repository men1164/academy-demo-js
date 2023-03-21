// ! Remind them of this code
const tripLocation = ['London', 'Bali', 'Amsterdam', 'Paris']

for (let i = 0; i < tripLocation.length; i++){
  console.log(tripLocation[i]);
}

// * I'm gonna do the same thing with .forEach() method
// * forEach calls the callbackfn function one time for each element in the array.
tripLocation.forEach((location) => {
  console.log(location)
})

// ! ไม่ได้บอกว่า for loop ไม่จำเป็นหรือจะไม่ได้ใช้ เพียงแต่ถ้าอยากให้โค้ดทำงานแบบนี้หรือ use case แบบนี้เราสามารถเขียนอีกท่าได้
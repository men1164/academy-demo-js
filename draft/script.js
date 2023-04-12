for(let i = 1; i <= 5; i++) {
  console.log(i)
}

// ! Tricky ต้องเมคชัวร์ว่าสรุปเราอยากได้ loop กี่รอบ ต้องกำหนด initial i เท่าไหร่ condition เท่าไหร่
for(let i = 0; i < 5; i++) {
  console.log(i)
}


// * Looping in reverse
for(let i = 3; i >= 0; i--) {
  console.log(i)
}


// * Nested loop
for(let i = 0; i < 3; i++) {
  console.log("i", i)
  for(let j = 0; j < 3; j++) {
    console.log("j", j)
  }
}
// ? let they guess the output line by line, give some hints
// i 0
// j 0
// j 1
// j 2
// i 1
// j 0
// j 1
// j 2


// * Loop through array
const tripLocation = ['London', 'Bali', 'Amsterdam', 'Paris'];

for (let i = 0; i < tripLocation.length; i++){
  console.log(tripLocation[i]);
}


// * Break keyword
for (let i = 0; i < tripLocation.length; i++){
  console.log(tripLocation[i]);
  if(tripLocation[i] === 'Bali') {
    break
  }
}


// * While loop
let i = 0
while(i < 5) {
  console.log(i)
  i++ // ! Don't forget to update expression, otherwise it will be an infinite loop
}



// ? Exercise: 
// ? Write a code that will loop from 0 to 15. For each loop, it will check if the current number is odd or even, and display a message to the console.

// Example Output:
// > 0 is even
// > 1 is odd
// > 2 is even
// > 3 is odd

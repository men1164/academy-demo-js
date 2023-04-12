// function
// ! Remind them about Arrow function
// function greeting (callback) {
//   console.log(`hello world`)
//   callback()
// }

const greeting = (callback) => {
  console.log(`hello world`)
  callback()
}

const callMe = () => {
  console.log(`hello from callback function`)
}

// greeting(callMe)

// ! Another way to pass in a function
greeting(() => {
  console.log("hello from another callback function")
})
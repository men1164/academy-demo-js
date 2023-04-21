// * normal function
// function greeting (callback) {
  //   console.log(`hello world`)
  //   callback()
  // }
  
// ! Remind them about Arrow function
const greeting = (callback) => {
  console.log(`hello world`)
  callback("Men")
}

const callMe = (name) => {
  console.log(`hello ${name} from callback function`)
}

// greeting(callMe)

// ! Another way to pass in a function
greeting((name) => {
console.log(`hello ${name} from another callback function`)
})
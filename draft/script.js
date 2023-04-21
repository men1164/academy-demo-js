// ! Remind them about Arrow function
const greeting = (callback) => {
  console.log(`hello world`)
  callback("Men")
}

const callMe = (name) => {
  console.log(`hello ${name} from callback function`)
}

// greeting(callMe)

// ! 1. Another way to pass in a function
// ! 2. Demo pass parameter in
greeting((name) => {
  console.log(`hello ${name} from another callback function`)
})
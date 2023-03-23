// * Demo setTimeOut
setTimeout(() => {
  console.log("Yo")
}, 3000)


// * Then promise, assume that setTimeOut is fetching data from database that takes 3 seconds to load.
let countValue = new Promise((resolve, reject)=> {
  setTimeout(() => {
    if (true) {
      // * If fetch success
      resolve("There is a count value.");
    } else {
      // ! If fetch failed
      reject("There is no count value");
    }
  }, 3000)
})

console.log(countValue)
// * To show that it is parallel
console.log("Hello")


// * Wait for 3 seconds, it should fullfilled
setTimeout(() => {
  console.log(countValue)
}, 3000)


// * Access to returned value
countValue
  .then(res => {
    console.log(res)
  })
  // ! Change if to false, get reject first
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log('Finally!')
  })
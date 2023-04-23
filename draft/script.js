// * Demo setTimeOut
setTimeout(() => {
  console.log("Yo")
}, 3000)


// * Then promise, assume that setTimeOut is fetching data from database that takes 3 seconds to load.
let data = new Promise((resolve, reject)=> {
  setTimeout(() => {
    if (true) {
      // * If fetch success
      resolve("Found a data.");
    } else {
      // ! If fetch failed
      reject("Data not found");
    }
  }, 3000)
})

console.log(data)
// * To show that it is parallel
console.log("Hello")


// * Wait for 3 seconds, it should fullfilled
setTimeout(() => {
  console.log(data)
}, 3000)


// * Access to returned value
data
  .then(res => {
    console.log(res)
  })
  // ! Change if to false, get reject first
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log('Done!')
  })
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

// * If there are another asynchronus tasks to run after the first one?
let countValue2 = new Promise((resolve, reject)=> {
  setTimeout(() => {
    if (true) {
      resolve("There is a count value. 2");
    } else {
      reject("There is no count value");
    }
  }, 3000)
})

let countValue3 = new Promise((resolve, reject)=> {
  setTimeout(() => {
    if (true) {
      resolve("There is a count value. 3");
    } else {
      reject("There is no count value");
    }
  }, 3000)
})


countValue
  .then(res => {
    console.log(res)
    countValue2
      .then(res2 => {
        console.log(res2)
        countValue3
          .then(res3 => {
            console.log(res3)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
  .catch(err => {
    console.log(err)
  })


// * Return async
const fetchMultipleData = async () => {
  // ! Demo try catch after
  try {
    const result = await countValue
    const result2 = await countValue2
    const result3 = await countValue3

    return { result, result2, result3 }

  } catch (err) {
    console.log(err)
  }
}

fetchMultipleData().then(res => console.log(res))


// * Non-Return async
const fetchMultipleData2 = async () => {
  const result = await countValue
  const result2 = await countValue2
  const result3 = await countValue3

  console.log(result)
  console.log(result2)
  console.log(result3)
}

fetchMultipleData2()
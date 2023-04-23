const fetchData = () => Promise.resolve("data")

const getData = async () => {
	try {
    const res = await fetchData()
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

getData()


// * Benefits of async await
const data = Promise.resolve("data1")
const data2 = Promise.resolve("data1")
const data3 = Promise.resolve("data1")

data
  .then(res => {
    console.log(res)
    data2
      .then(res2 => {
        console.log(res2)
        data3
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


const getMultipleData = async () => {
  const result = await data
  const result2 = await data2
  const result3 = await data3

  console.log(result)
  console.log(result2)
  console.log(result3)
}

getMultipleData()
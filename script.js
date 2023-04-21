function callMe () {
  console.log(`hello from callback function`)
}

function greeting (callback) {
  console.log(`hello world`)
  callback()
}

greeting(callMe)
const myArr = ["Men", 22]

console.log("My name:", myArr[0])
console.log("My age:", myArr[1])

myArr.push('Wed', 2000)

console.log(myArr)

// ! อย่าลืมสอนวิธีดู doc แบบเร็ว ๆ ใน vscode ด้วย
console.log(myArr.slice(1, 3))
console.log(myArr.indexOf(22))
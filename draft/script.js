const myArr = ["Men", 22]

console.log("My name:", myArr[0])
console.log("My age:", myArr[1])

// ! ไม่พ่น error ออกมา เป็น undefined
console.log(myArr[10])


myArr.push('Wed')
myArr.push(2000)

console.log(myArr)


// ! อย่าลืมสอนวิธีดู doc แบบเร็ว ๆ
// * slice return array ใหม่ ไม่ได้แก้ array เดิมเหมือน push
const sliced = myArr.slice(1, 3)

console.log("sliced:", sliced)
console.log("my array:", myArr)

console.log(myArr.indexOf(22))


// * ชวนดู doc แบบเร็ว ๆ อีกที
// * ถามความแตกต่างกับ .push()
const newArr = myArr.concat(123, true, ["another array", "john"])

console.log("my array:", myArr)
console.log("new array:", newArr)



// * Exercise
// ? Create an array that contain 4 foods that you like. Then complete these following tasks.
// ? 1. Remove your least 2 favorite food from the array. Print it to the console.
// ? 2. Locate your most favorite food in the array using .indexOf(). Print its array index to the console.
// ? 3. Add your 3 favorite desserts or fruits into that array. Print the result to the console.
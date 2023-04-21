const myArr = ["Men", 22]

console.log("My name:", myArr[0])
console.log("My age:", myArr[1])

// ! undefined
console.log(myArr[10])


myArr.push('Wed')
myArr.push(2000)

console.log(myArr)


// ! สอนวิธีดู doc แบบเร็ว ๆ เปิดกลับไปสไลด์
// * ไม่ได้แก้ array เดิมเหมือนที่ผ่านมา
// * slice จะ return array ใหม่
const sliced = myArr.slice(1, 3)

console.log("sliced:", sliced) // * เผื่อเอา array ก้อนใหม่นี้ไปใช้ต่อ
console.log("my array:", myArr)

// * อันนี้ก็ return ค่ากลับมาเหมือนกัน จะเอาตัวแปรมารับเหมือน slice ข้างบนก็ได้
// * ให้ดู objective เป็นหลัก ว่าต้องการเอาค่านี้ไปใช้ต่อหรือไม่ -> ตัดสินใจว่าจะสร้างตัวแปรมารับหรือไม่
console.log(myArr.indexOf(22))


// * ชวนดู doc แบบเร็ว ๆ อีกที
// * ถามความแตกต่างกับ .push()
const newArr = myArr.concat(123, true, ["another array", "john"])

console.log("my array:", myArr)
console.log("new array:", newArr)



// * Exercise
// ? Create an array that contain 4 foods that you like. Then complete these following tasks.
// ? 1. Remove your least 2 favorite food from the array. Print it to the console.
// ? 2. Locate your most favorite food in the array. Print its array index to the console.
// ? 3. Add your 3 favorite desserts or fruits into that array. Print the result to the console.

// ? CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)
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
const myArr = ["Men", 22]

console.log("My name:", myArr[0])
console.log("My age:", myArr[1])

// ! ไม่พ่น error ออกมา เป็น undefined
console.log(myArr[10])


myArr.push('Wed', 2000)

console.log(myArr)

// ! อย่าลืมสอนวิธีดู doc แบบเร็ว ๆ ใน vscode ด้วย
console.log(myArr.slice(1, 3))
console.log(myArr.indexOf(22))

// ! ให้ดูด้วยว่ามันพ่น error ออกมาที่ console ยังไง
myArr = ["asd", 12, 12313]
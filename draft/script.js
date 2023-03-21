const list = [1, 2, 3, 4, 5];

const newList = list.map((value) => {
  return value * 2;
})

console.log(newList)


// ? มีใครบอกได้บ้าง ว่า forEach กับ map ต่างกันยังไง
// The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.
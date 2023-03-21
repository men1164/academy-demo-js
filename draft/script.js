const person = {
  name: "John",
  age: 20,
  pet: {
     kind: "Dog",
     age: 2,
  }
}

console.log('Name:', person.name)
console.log('Name:', person["age"])

console.log('Pet kind:', person.pet.kind)
console.log('Pet age:', person.pet.age)


// * Reference type
const person2 = person
person2.name  = "Men"

console.log(person)
console.log(person2)
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


// * Array of object: data from fetching data
const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer"
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer"
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing"
  },
]

// * Example with array method iterators
data.forEach((person) => {
  console.log("Name:", person.name)
  console.log("Age:", person.age)
  console.log("Job:", person.job)
})
// function
const greet = (name, callback) => {
  console.log('Hi, my name is ' + name);
  callback();
}

// callback function
const callMe = () => {
  console.log('hello from callback function');
}

// passing function as an argument
greet('John', callMe);


// another way to write callback function
greet('Men', () => {
  console.log('hello from another callback function')
})
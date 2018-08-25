const bananaDiv = document.getElementById("banana");
const greetingElement = document.getElementById("greeting")
bananaDiv.innerHTML = "Im a banana";
const lastName = "Walters"
const firstName = "Jasmine"
let counter = 0;
counter = counter + 1;
counter += 1;
counter++;

console.log("counter:",counter);

//greetingElement.innerHTML = "Hello my name is " + firstName + " " + lastName;

greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;

// object shorthand notation

let name = 'callan';
let age = '10000000000';

// let person = {
 //   name: name,
 //   age: age
//};

let person = {name, age};

console.log('person:', person.name);
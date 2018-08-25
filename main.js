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


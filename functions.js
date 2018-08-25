// input = animal ex. fish
//output = animal prduct ex. fish sticks

function nuggetizer(animal){
    return `${animal} stix`;
}

const nuggetizer2 = (animal) => {
    return `${animal} jerky`;
}

console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat'));
console.log('bear:', nuggetizer('bear'));

console.log('deer:', nuggetizer2('deer'));

const bearSticks = nuggetizer('bear');


const nomnom = (name, food) => {
    return `${name} devoured ${food}`;
}

console.log(nomnom('jasmine', bearSticks));

// function numberAdder that takes in a number and 
//return the number plus 3. 



const numberAdder = (x) => {
    const finalNumber = (x + 3);
    printToDom(`<h2>finalNumber</h2>`, 'allTheNumbers')
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
}

numberAdder(4);

printToDom('I am ready for lunch', 'feelings')
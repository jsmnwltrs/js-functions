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


var _ = require('lodash');
let lodash = _;
lodash.shuffle([]);

let arr = [7, 2 , 15, 4, 6];
console.log(arr);

let shuffled = _.shuffle(arr);
console.log(shuffled);




function add(a, b){
    return a + b;
}

console.log(add(3, 5));

const add2 = (a, b) => {
    return a + b;
}

console.log(add2(3, 5));

const add3 = (a, b) => a + b;

console.log(add3(3, 5));

const power = a => a*a;

console.log(power(3));

const seven = () => 7;

console.log(seven());

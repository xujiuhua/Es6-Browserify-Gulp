import {sum, square, variable, MyClass} from './import';

// 17
console.log(sum(10,7));

// 25
console.log(square(5));

let cred = {
    name: 'Johuer',
    age: 30
}

let x = new MyClass(cred);

//Johuer
console.log(x.getName());
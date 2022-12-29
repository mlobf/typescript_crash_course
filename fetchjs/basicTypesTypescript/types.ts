const today = new Date();
const person = {
    age: 20,
};
class Color {}
const blue: Object = new Color();

let apples: number = 4;
let banana: string = '3';
let pinneple: null = null;
let cheery: boolean = false;
let coco: undefined = undefined;
let now: Date = new Date();
// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 2, 3, 3, 4];
let truths: boolean[] = [true, false];

// Classes
class Car {}
let car: Car = new Car();

//Object Literal
let point: { x: number; y: number } = {
    x: 10,
    y: 11,
};

//Functions type anotation
// Annotation around functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When use annotations
// 1-) Functions that returns the 'any' type
// 2-)
const json = '{"x":10,"y":200}';
//const coordinates: any = JSON.parse(json);
const coordinates: { x: number; y: number } = JSON.parse(json); // Fixing the 'any' typing problem
//console.log(coordinates);
// When declare a variable on one line and initializate it later.
let words = ['red', 'green', 'blue'];
//let foundWord;
let foundWord: boolean;

for (let i: number = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
        //console.log(foundWord);
    }
}

//  3-) When Variable can not be inferred correctly
let numbers = [-19, -11, -23];
//let numbersAboveZero = false; // But if some number Its found, return thoose numbers them selfs.
let numbersAboveZero: boolean | number = false; // But if some number Its found, return thoose numbers them selfs.

for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numbersAboveZero = numbers[i];
        console.log(numbersAboveZero);
    }
}

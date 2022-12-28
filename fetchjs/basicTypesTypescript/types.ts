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
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

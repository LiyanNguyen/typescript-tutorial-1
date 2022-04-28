/*=========
Basic Types
=========*/
let id: number = 5;
let company: string = "Besto"
let isPublished: boolean = true;
let anyVar: any = "Hello World";
let age: number; // initialize a variable

//we can set :any type variables to any types similar to vanilla JS
anyVar = true;

// Type 'number' is not assignable to type 'string', we can't convert
// company = 10;

age = 50;

// Type 'boolean' is not assignable to type 'number'.
// age = true;

/*====
Arrays
=====*/
let IDs: number[] = [1, 2, 3, 4, 5]; //array that can only contain numbers

// Argument of type 'string' is not assignable to parameter of type 'number'
// IDs.push("This is a string");

let anyTypeArray: any[] = ["String", 5, false, 10, 7, "Again"];

/*====
Tuples
====*/
// you can specify the exact type inside a tuple
let person: [number, string, boolean] = [1, "Your", false];

//Tuple Array, an array that each element should contain an array of number and string
let employee: [number, string][];

employee = [
	[1, "Katherine"],
	[2, "Joseph"]
]

/*====
Unions
====*/
// we can allow a variable to hold more than 1 type
let uniqueID: number | string;

uniqueID = "1234-asdas-645-hhhh";
uniqueID = 1234123;


/*====
Enums
====*/
enum Direction1 {
	Up, //0 by default, numbers by default, starting from 0 increasing by 1
	Down,
	Left,
	Right
};

enum Direction2 {
	Up = "up", 
	Down = "down",
	Left = "left",
	Right = "right"
};

console.log(Direction1); //{0: 'Up', 1: 'Down', 2: 'Left', 3: 'Right', Up: 0, Down: 1, Left: 2, Right: 3}
console.log(Direction1.Up); //0

console.log(Direction2); // {Up: 'up', Down: 'down', Left: 'left', Right: 'right'}


/*=====
Objects
=====*/
const user: {id:number, name:string} = {
	id: 1,
	name: "John"
}

//you can also set the object types beforehand
type User = {
	id: number,
	name: string
	address: string
}

let newUser: User = {
	id: 1,
	name: "John Doe",
	address: "Somewhere in Earth"
}

/*============
Type Assertion
============*/
// telling the compiler that we want to treat an entity as a different type
let cid: any = 1;
let customerID = <number>cid;

let isOldCustomer = cid as boolean;

// Type 'boolean' is not assignable to type 'number'.
// customerID = true;

// Type 'number' is not assignable to type 'boolean'.
// isOldCustomer = 10;

cid = true;
isOldCustomer = false;

/*=======
Functions
=======*/
// by default, parameters will have an 'any' type
// this function takes in 2 paramters with number types and the expected return is a number type
let addNum = (num1:number, num2:number): number => {
	return num1 + num2;
}

// Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(addNum('5', 10)); //510

console.log(addNum(5, 10)) //15

//void function, similar to C/C++ and Java
function log(message: string | number): void {
	console.log(message);
}

log(69);
log('nice!');
// Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// log(false)

/*========
Interfaces
========*/
//when we are describing objects, its a good practice to use interface instead of types
interface UserInterface {
	readonly id: number, //readonly property
	name: string,
	age?: number //optional property
}

let UI1: UserInterface = {
	id: 69,
	name: "Johnnn",
	// age: 90 //we can add or remove this and will still be fine, cuz its an optional property
}

// Cannot assign to 'id' because it is a read-only property.
// UI1.id = 10; //originally 69, now we change to 10

console.log(UI1)

//types can be used with primitives and unions and tuples BUT NOT interface
type Point = number | string; //union
const p1: Point = 1;

// interface CANNOT be used on primitives, unions, and tuples
// interface PointInterface = number | string; //union
// const p2: PointInterface = 1;

/*=================
Function Interfaces
=================*/
interface mathFunction {
	(x:number, y: number): number
}

let addFunction: mathFunction = (x: number,y: number): number => {
	return x + y;
}

let subFunction: mathFunction = (x: number,y: number): number => {
	return x - y;
}

/*=====
Classes
=====*/
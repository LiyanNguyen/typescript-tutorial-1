"use strict";
let id = 5;
let company = "Besto";
let isPublished = true;
let anyVar = "Hello World";
let age;
anyVar = true;
age = 50;
let IDs = [1, 2, 3, 4, 5];
let anyTypeArray = ["String", 5, false, 10, 7, "Again"];
let person = [1, "Your", false];
let employee;
employee = [
    [1, "Katherine"],
    [2, "Joseph"]
];
let uniqueID;
uniqueID = "1234-asdas-645-hhhh";
uniqueID = 1234123;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
;
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
;
console.log(Direction1);
console.log(Direction1.Up);
console.log(Direction2);
const user = {
    id: 1,
    name: "John"
};
let newUser = {
    id: 1,
    name: "John Doe",
    address: "Somewhere in Earth"
};
let cid = 1;
let customerID = cid;
let isOldCustomer = cid;
cid = true;
isOldCustomer = false;
let addNum = (num1, num2) => {
    return num1 + num2;
};
console.log(addNum(5, 10));
function log(message) {
    console.log(message);
}
log(69);
log('nice!');
let UI1 = {
    id: 69,
    name: "Johnnn",
};
console.log(UI1);
const p1 = 1;
let addFunction = (x, y) => {
    return x + y;
};
let subFunction = (x, y) => {
    return x - y;
};
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is a registered user!`;
    }
}
const John = new Person(1, "John Doe", 24);
const Jordan = new Person(2, "Jordan Mike", 42);
console.log(John, Jordan);
console.log(John.register());
class Person2 {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is a registered user!`;
    }
}
let Ness = new Person2(69, "Nessa", 15);
console.log(Ness.register());
class ChildPerson extends Person2 {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
    register() {
        return `${this.name} is a registered user! and is a ${this.position}`;
    }
}
let Frenzy = new ChildPerson(15, "Shawn", 15, "Son");
console.log(Frenzy.register());
let getArray = (items) => {
    return new Array().concat(items);
};
let numArray = getArray([1, 2, 3, 4, 5, 6]);
let stringArray = getArray(['Brad', 'John', 'Paul', 'Mike', 'Spencer', 'David']);

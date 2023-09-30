// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId)

const bigNumber = 3256423443234423n

console.log(typeof bigNumber)

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiamn", "Thor", "naagraj"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)

// https://262.ecma-international.org/5.1/#sec-11.4.3

///--------------Intro to JavaScript Basics--------------///



//1.Print Hello World on screen 
console.log("Hello World");
//__________________________________________________//
//2.Declare variables of different data types
let name = "Mithra"; // String
console.log(`My name is ${name}.`);
//__________________________________________________//
let age = 22;    // Number
console.log(`I am ${age} years old.`);
//__________________________________________________//
let isStudent = true; // Boolean
console.log(`Am I a student? ${isStudent}`);
//__________________________________________________//
let hobbies = ["gardening", "editing", "coding"]; // Array
console.log(`My hobbies are: ${hobbies}.`);
//__________________________________________________//
let address = { 
    district: "Kadapa",
    state : "Andhra Pradesh" 
    }; // Object
console.log(`I live at ${address.district}, ${address.state}.`);
//__________________________________________________//
// 3. Undefined and Null
let x;  // undefined
console.log(`Value of x: ${x}`);

let y = null; // null
console.log(`Value of y: ${y}, `); // typeof null → "object" 
//__________________________________________________//
//4.Intro to BigInt
console.log(9999999999999999); // Output: 10000000000000000--it  goes beyond the limit of Number type
let bigIntNum = 9999999999999999n; // BigInt//Why do we add n at the end? n tells Javascript:This number is a BigInt type, not a regular number
console.log(`BigInt value: ${bigIntNum}`);
//__________________________________________________//

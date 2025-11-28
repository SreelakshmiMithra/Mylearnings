///------------------2..operators in JavaScript------------------------------///
//An operand is the value (or variable) on which an operator performs an operation.
//operators are special symbols that perform operations on operands.
//small example for operators
let a = 10;// operand
let b = 25; // operand
let sum = a + b; // + is operator
console.log(`Sum of ${a} and ${b} is: ${sum}`); // Output: Sum of 10 and 5 is: 15
//__________________________________________________//
//1.Arithmetic Operators
let num1 = 25;
let num2 = 5;
console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}`); // Addition
console.log(`Subtraction: ${num2} - ${num1} = ${num2 - num1}`);
console.log(`Multiplication: ${num1} * ${num2} = ${num1 * num2}`); // Multiplication
console.log(`Division: ${num1} / ${num2} = ${num1 / num2}`); // Division
console.log(`Modulus: ${num1} % ${num2} = ${num1 % num2}`); // Modulus
console.log(`Exponentiation: ${num1} ** ${num2} = ${num1 ** num2}`); // Exponentiation
console.log(`Increment: ++${num1} = ${++num1}`); // Increment
console.log(`Decrement: --${num2} = ${--num2}`); // Decrement
//__________________________________________________//
//2.Assignment Operators
let x = 10; // Assign
console.log(`Initial value of x: ${x}`);
x += 5; //add&assign → x = x + 5
console.log(`After x += 5: ${x}`);
x -= 3; // subtract&assign → x = x - 3
console.log(`After x -= 3: ${x}`);
x *= 2; // multiply&assign → x = x * 2
console.log(`After x *= 2: ${x}`);
x /= 4; // divide&assign → x = x / 4
console.log(`After x /= 4: ${x}`);  
x %= 3; // modulus&assign → x = x % 3
console.log(`After x %= 3: ${x}`);
x**= 2; // exponentiation&assign → x = x ** 2
console.log(`After x **= 2: ${x}`);
//__________________________________________________//
//3.Comparison Operators
let p = 15;
let q = 20;
console.log(`${p} == ${q}: ${p == q}`); // Equal to
console.log(`${p} != ${q}: ${p != q}`); // Not equal to
console.log(`${p} === ${q}: ${p === q}`); // Strict equal to
console.log(`${p} !== ${q}: ${p !== q}`); // Strict not equal to
console.log(`${p} > ${q}: ${p > q}`); // Greater than
console.log(`${p} < ${q}: ${p < q}`); // Less than
console.log(`${p} >= ${q}: ${p >= q}`); // Greater than or equal to
console.log(`${p} <= ${q}: ${p <= q}`); // Less than or equal to
//__________________________________________________//
//4.Logical Operators
let bool1 = true;
let bool2 = false;
console.log(`${bool1} && ${bool2}: ${bool1 && bool2}`); // Logical AND
console.log(`${bool1} || ${bool2}: ${bool1 || bool2}`); // Logical OR
console.log(`!${bool1}: ${!bool1}`); // Logical NOT
//__________________________________________________//
//5.String Operators
let str1 = "Hello, ";
let str2 = "World!";
let greeting = str1 + str2; // Concatenation
console.log(`Greeting: ${greeting}`);   
//appending using += operator
let name = "Mithra";
name += " Badiginchala";//Appends a string to an existing string
console.log(name);
//__________________________________________________//
//6.Ternary Operator
let age = 18;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(`Age: ${age} - ${eligibility}`);
//__________________________________________________//

//7.Typeof Operator
let var1 = 42; // Number
let var2 = "JavaScript"; // String
let var3 = true;    // Boolean
console.log(`Type of var1: ${typeof var1}`);
console.log(`Type of var2: ${typeof var2}`);
console.log(`Type of var3: ${typeof var3}`);
//__________________________________________________//

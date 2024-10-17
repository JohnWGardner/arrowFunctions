/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function test(a ,b){
     return a+b;
}
let sum = test(2, 4);
console.log(sum);

// Arrow Function With Parameters

const test1 = (a ,b) => {return a+b;}
let sum1 = test1(2, 5);
console.log(sum1);

// Single Line Arrow Function With Parameters
// const test2 = (a ,b) => (a+b); //also valid
const test2 = (a ,b) => a+b;
let sum2 = test1(2, 6);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('world');

const saySomething1 = () => console.log('hello');
saySomething1();

// Returning Multiple Lines
const saySomething2 = () => (
`<p>
    this is a multiple line string
</p>`
)

console.log(saySomething2());
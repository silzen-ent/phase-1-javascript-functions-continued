// code your solution here
// function razzles(lawyer = 'Billy', target = "'em") {
//     console.log(`${'Angela'} razzle-dazzles ${'Alan'}!`)
//     return `${lawyer} razzle-dazzles ${target}!`;
    
// }
// console.log(razzles());
// console.log(razzles('Kyle', 'Daisy'));

// 1st Test

function saturdayFun(dfault = "roller-skate") {
    console.log(`This Saturday, I want to ${dfault}`)
    return `This Saturday, I want to ${dfault}!`
}
console.log(saturdayFun("skateboard")); 

// 2nd Test

function mondayWork(activity = "go to the office") {
    console.log(`This Monday, I will ${activity}.`)
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork("skip class")); 




// Practicing functions & function expressions (IIFE) w/ examples below: 

function outer(greeting, msg = "It's a fine day to learn"){
    const innerFunction = function (name, language = "Python"){
        return `${greeting}, ${name}! ${msg} ${language}`;
    }
    // return innerFunction ("student", "Javascript"); 
    return innerFunction
}
// console.log(outer("Hello")); 
console.log(outer('Hello')('Alan', 'English')); 


const storedFunction = outer("Hello");
console.log(storedFunction("student", "Javascript"));


// This is a basic IIFE example: 
(function (baseNumber) {
    console.log(baseNumber + 3)
    return baseNumber + 3; 
})(2); //=> (3 + 2 = 5)

// This is an example of an anonymous IIFE (immediately invoked function expression) by using a grouping operator (): 
(function() {
    console.log("This is an example of a function expression, which is yet more razzling.")
})();

    // Here's an example of a named IIFE that also runs right away by using a grouping operator (): 
    (faveNumber = function (num = 3) {
        console.log("My favorite number is " + num)
    })(); //=> The last ()'s executes the function expression b/c we wrapped it with ()'s. If we hadn't wrapped it, it would simply be a named function expression. 

    // We can also call this:
    faveNumber(5); //=> I do not have to console.log this to see 5 in the console. 


// Example of using Scope Chain and inside functions
function demoChain(name){
    const part1 = "hi";
    return function(){
        const part2 = "there";
        return function(){
            console.log(`${part1.toUpperCase()} ${part2} ${name}`)
        }
    }
}
demoChain("Alan The Great")()();




// 3rd Test

function wrapAdjective(style = "*") {
    return function(adjective = "special") {
        return `You are ${style}${adjective}${style}!`; 
    }
}

console.log(wrapAdjective()("a G")); 


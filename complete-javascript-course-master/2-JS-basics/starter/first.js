/**************************
 *  Variables and data types
 */

/*ar firstName = 'John';
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

// Variable naming rules
//    1. Must begin with _, $, or letter
//    2. No punctuation or "reserved" words like function, if, while, etc.

/*
var mycatch;
console.log(mycatch)
*/
/* ======================================
    Variable mutation and type coercion
====================================== */

var firstName = 'John';
var age = "28";
 
// Type coercion (dynamically shifting from one data type to another)
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher'
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + 
'. Is he married? ' + isMarried);

// Variable Mutation (changing an existing variable's value and data type based on last stated)
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('Hey, chump. What\'s your last name?');
var firstName = prompt('Okay\, what\'s your FIRST name?');
document.write('Hey\, there! ' + firstName + ' ' + lastName);
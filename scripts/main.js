let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src' ,'images/firefox3.png');
    } else {
        myImage.setAttribute('src' , 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name' ,myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}



// This is a single line comment with no breaks

/*
Everything in between is a comment.
*/

/*

Variables- are containers that store values.
You start by delcaring a variable with the var (less recommended,
dive deeper for the explanation) of the let keyword, followed
by the name you give the variable:
Example- 
let myVariable;
myVariable = 'Bob';
or
let myVariable = 'Bob';

String - This is a sequence of text known as a string.
To signify that the value is a string, enclose it in a single 
quote marks. Example- let myVariable = 'Bob';

Number- This is a number. Numbers don't have 
quote marks around them. Example- let myVariable = 10;

Boolean- This is a True/False value.
The words true and false are special keyworkds
that don't need quote marks. Example- let myVariable = true;

Array- This is a structure that allows you to store 
values in a single reference.
Example-
let myVariable = [1,'Bob','Steve',10];
Refer to each member of the array like this:
myVariable[0], myVariable[1], etc.

Object- This can be anything.
Everything in JavaScript is an object and can be stored 
in a variable. Keep this in mind as you learn.
Example- let myVariable = document.querySelector('h1');
All of the above examples too.

Operator- is a mathematical symbol that produces a
result based on two values (or variables). In the
following table, you can see some of the simplest 
operators, along with some examples to try in the 
JavaScript console.

Addition- Add teo numbers together or 
comnbine two strings.

Subtraction, Multiplication, Division- These do what
you's expect them to do in basic math.
Multiply in JS is an asterisk.

Assignment- As you've seen already: this assigns
a value to a variable.

Equality- This performs a test to see if two values 
are equal. It returns a true/false (Boolean) result.

Not, Does-not-equal- This returns the logically opposite
value of what it proceeds. It turns a true into a false,
etc.. When it is used alongside the Equality operator,
the negation operator tests whether two values are not equal.

Conditionals- Code structures used to test if an expression 
returns true or not. A very common fom of conditionals is the 
if ... else statement.

Functions- are a way of packaging functionality that you wish
to reuse. It's possible to define a body of code as a function
that executes when you call the functions name in your
code. This is a good alternative to repeatedly writing the same
code. Tou already seen some uses of functional previously.

Events- Real interactivity on a website requires event handlers.
These are code structures that listen for activity in the browser,
and run code in response.

Null- is a special value in JavaScript thart refers to the absence
of a value.

Scoping- variables defined inside functiuons are only available 
inside those functions. This is called variable scoping.

*/
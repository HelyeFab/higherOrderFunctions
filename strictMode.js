// Entire file -> beginning of your file
"use strict";

// single functions -> first line  of your function
function myFunction() {
    "use strict";
    let y = 3.14;
}

// converting mistakes into errors
function myFunction() {
    "use strict";
   y = 3.14; //-> This will produce an error since in SM you first have to declare your variable 
   
}

//  in SM you cannot delete a variable

let y = 3.14;
delete y; 

var obj = {};

Object.defineProperty(obj, "x", { value: 0, writable: false });

obj.x = 3.14; // This will throw a feedback error in SM since we are trying to write to a not writable property

function sum(a, a, c) { // in strict mode this will throw an error because we are using the same parameter twice
    'use strict';
    return a + b + c; 
    
}


eval('var x;') //-> in SM doesn't introduce the variable in the global scope but only uses it for the code that is being evaluated.

// securing Javasctipt

// in SM in browsers it's no longer possible to reference the window object throught this. inside of strict mode functions
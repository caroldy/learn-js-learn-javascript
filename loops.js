// Variable declaration and assignment
var message = "Hello, Visual Studio!";

// Conditional statement
if (message.length > 20) 
    {
  console.log("The message is longer than 20 characters.");//Display this message
    } 
else 
{
  console.log("The message is not longer than 20 characters.");//else display this message
}

// Looping statement
for (var i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

// Function declaration and invocation
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("carol mwanzia");

// Object creation using object literal notation
var person = {
  name: "carol mwanzia",
  age: 95,
  isStudent: true
};

// Array creation and iteration
var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Error handling with try-catch statement
try {
  // Code that might throw an error
  var result = 10 / 0;
  console.log(result);
} catch (error) {
  // Handling the error
  console.log("An error occurred: " + error.message);
}






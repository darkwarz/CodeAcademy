// Add your code below this line!
var xhr = new XMLHttpRequest();
xhr.open("GET","https://www.codecademy.com/",false);
// Add your code above this line!
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);


// Requests
// All right! Let's see if you can make that request to codecademy.com all on your lonesome.

// Instructions
// Go ahead and do three things:

// Create a variable called xhr and set it equal to new XMLHttpRequest().
// Call open xhr and pass it three arguments: "GET" (the type of request you'd like to make), "https://www.codecademy.com/" (the URL), and false (this means the exercise will wait until it gets a response from the server).
// Call .send() on xhr. We've already taken care of the console.log()s for you!
// ?


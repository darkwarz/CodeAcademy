var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
// Add your code below!
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText) = "OK";

// Making a Request
// You saw a request in the first exercise. Now it's time for you to make your own! (Don't worry, we'll help.)

// On line 1, we've created the xhr variable, which stands for XML HTTP Request. This is how we make an HTTP request!

// On line 2, we make the actual request to Codecademy.com.

// We haven't sent our request, though, and we need to console.log both the xhr.status (that was that "200" from before) and the xhr.statusText (it should be "OK").

// For that, we'll need your help!

// Instructions
// On line 4, call the .send() method on xhr. This is what sends the request!

// On lines 5 – 6, console.log the xhr.status and xhr.statusText attributes so we can see if Codecademy got our request okay.

// ?

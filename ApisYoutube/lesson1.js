var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);

// You've Already Been Introduced
// The good news is that if you've gotten this far (that is, to the Codecademy website), you've met HTTP before! It's that little bit before the "www" in a website's address. Some browsers might hide it from you, but Codecademy's full address is:

// https://www.codecademy.com/
// The HTTP stands for HyperText Transfer Protocol. HyperText is text with links in it (like this!) and a transfer protocol is a fancy way of saying "rules for getting something from one place to another." In this case, the rules are for transferring web pages to your browser.

// Instructions
// Check out the code in the editor. This is JavaScript code that requests information from Codecademy! Some of it may be new to you, but we'll explain it soon. Click Save & Submit Code to see it in action!

// ?

var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

var json = JSON.parse(demo);
console.log(json);


// Parsing JSON
// JSON (which stands for Java Script Object Notation) is an alternative to XML. It gets its name from the fact that its data format resembles JavaScript objects, and it is often more succinct than the equivalent XML. For instance, our same <pet> Jeffrey would look like this in JSON:

// {
//   "pets": {
//     "name": "Jeffrey",
//     "species": "Giraffe"
//   }
// }
// Look, ma! No tags!

// Instructions
// Here we've created a JSON object in demo, which represents the kind of information you might get back from an HTTP request. Reading from demo is just like reading JSON sent by a server.

// Click Save & Submit Code to continue!
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);




// Parsing XML
// XML (which stands for E xtensible Markup Language) is very similar to HTML—it uses tags between angle brackets. The difference is that XML allows you to use tags that you make up, rather than tags that the W3C decided on. For instance, you could create an API that returns information about a pet:

// <pet>
//   <name>Jeffrey</name>
//   <species>Giraffe</species>
// </pet>
// As long as you document the structure of your API's response, other people can use your API to get information about <pet>s.

// Instructions
// Check out the code in the editor. It's very similar to our earlier request, but specifically asks for an XML document in return. Click Save & Submit Code to continue.
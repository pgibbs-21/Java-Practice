// document.body.children[1].children[0].href = 'https://google.com';

// alert();
// window.document;

// let anchorElement = document.getElementById("external-link");
// anchorElement.href = "https://google.com";

// let anchorElement = document.querySelector("#external-id");
// anchorElement.href = "https://wikipedia.com";


// ADD AN ELEMENT
// 1. Create the new element 

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com'
newAnchorElement.textContent = 'This leads to Google!'

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent elemnet content

firstParagraph.append(newAnchorElement);

//REMOVE ELEMENETS.
// 1. Select Element that should be remove

let firstH1Element = document.querySelector('h1');

// 2. Remove that element.

firstH1Element.remove();

// MOVE ELEMETS

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

console.log (firstParagraph.innerHTML)

firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>'

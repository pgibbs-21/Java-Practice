// Practice what you learned!




// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"

// console.dir(window);
let firstButton = document.body.children[1].nextElementSibling.children[4];

// //    - Select the second button by using an "id"

let secondButton = document.getElementById('second-button');




// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored

// function firstButtonClick () {
//     console.dir(firstButton);
// };

// firstButton.addEventListener('click', firstButtonClick)

//    - Output the second button WITHOUT using the variable in which it's stored

// function secondButtonClick (event) {
//     console.dir(event.target);
// }

// secondButton.addEventListener ('click', secondButtonClick)


// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements

let firstParagraph = document.body.children[1].nextElementSibling.children[1]

let thirdParagraph = document.body.children[1].nextElementSibling.children[3]

// console.log(firstParagraph)

//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!



// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)

function firstButtonClick (){
thirdParagraph.remove();
};

firstButton.addEventListener ('click', firstButtonClick);

//    - The second button changes the background color of the first paragraph to blue

function secondButtonClick (){
    firstParagraph.style.backgroundColor = 'rgb(0,0,255)'
};

secondButton.addEventListener ('click', secondButtonClick);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!


// Make Blue
function secondButtonClick () {
firstParagraph.classList.add('changes');
};

// Remove 1st Paragraph
function firstButtonClick () {
 thirdParagraph.classList.add('change');
};
// Access the user inut and the output

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

// Highlight The Links

const highlightLinksButtton = document.querySelector("#highlight-links button");

function highlightAllLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtton.addEventListener("click", highlightAllLinks);

// Display User Data

const dummyUserData = {
  firstName: "Pat",
  lastName: "Gibbs",
  age: "30",
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const userDataOutputElement = document.querySelector("#output-user-data");

  userDataOutputElement.innerHTML = '';

  for (const propertyName in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    const outputText =
      propertyName.toUpperCase() + ": " + dummyUserData[propertyName];
    newUserDataListItemElement.textContent = outputText;
    userDataOutputElement.append(newUserDataListItemElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

// Statistics Roll The Dice Example

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice () {
    return Math.floor(Math.random() * 6 + 1); //Math.floor(): 5.6666666 => 5
};

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';


    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while(!hasRolledTargetNumber) {
      const rolledNumber = rollDice();
    //   if (rolledNumber == enteredNumber)  
    //     hasRolledTargetNumber = true;
    // }
    numberOfRolls ++
    const newRollListElement = document.createElement ('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListElement.textContent = outputText;
    diceRollsListElement.append(newRollListElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
};



rollDiceButtonElement.addEventListener ('click', deriveNumberOfDiceRolls);

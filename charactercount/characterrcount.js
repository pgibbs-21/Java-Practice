const inputField = document.querySelector('input');
const characterCountSpan = document.querySelector('p span');

inputField.addEventListener("input", counter);

function counter(event) {
  // Call the length of the String
  const characterCount = event.target.value.length;

  // Get the Countdown
  const countDown = 60 - characterCount;

  // Display the number of characters left
  characterCountSpan.innerText = countDown;

  if (countDown === 0) {
    inputField.classList.add("error");
    characterCountSpan.classList.add("error");
  } else if (countDown <= 10) {
    inputField.classList.add("warning");
    characterCountSpan.classList.add("warning");
    inputField.classList.remove('error')
    characterCount.classList.remove('error')
  } else {
    inputField.classList.remove("error", "warning");
    characterCountSpan.classList.remove("error", "warning");
  }
}

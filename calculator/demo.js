let submitButton = document.querySelector("#button");

submitButton.addEventListener("click", calc);

function calc() {
  let calculate;
  let a = parseInt(document.querySelector("#value1").value);
  let b = parseInt(document.querySelector("#value2").value);
  let op = document.querySelector("#operator").value;

  if (op == "add") {
    calculate = a + b;
  } else if (op == "min") {
    calculate = a - b;
  } else if (op == "div") {
    calculate = a / b;
  } else if (op == "mul") {
    calculate = a * b;
  }

  let calcResults = document.querySelector("#results");
  calcResults.innerHTML = calculate;
}

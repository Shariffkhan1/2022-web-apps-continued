

function addition() {
  var add1 = Number(document.getElementById("add1").value);
  var add2 = Number(document.getElementById("add2").value);
  const addDisplay = document.getElementById("addDisplay");

  addDisplay.innerHTML = `${add1+add2}`;
}

function subtraction() {
  var subtract1 = Number(document.getElementById("subtract1").value);
  var subtract2 = Number(document.getElementById("subtract2").value);
  const subtractDisplay = document.getElementById("subtractDisplay");

  subtractDisplay.innerHTML = `${subtract1-subtract2}`;
}

function multiplication() {
  var multiply1 = Number(document.getElementById("multiply1").value);
  var multiply2 = Number(document.getElementById("multiply2").value);
  const multiplyDisplay = document.getElementById("multiplyDisplay");

  multiplyDisplay.innerHTML = `${multiply1*multiply2}`;
}

function division() {
  var divide1 = Number(document.getElementById("divide1").value);
  var divide2 = Number(document.getElementById("divide2").value);
  const divideDisplay = document.getElementById("divideDisplay");

  divideDisplay.innerHTML = `${divide1/divide2}`;
}
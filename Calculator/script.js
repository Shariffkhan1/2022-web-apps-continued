function doMathOperation() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const operator = (document.getElementById("operator").value);
  const display = document.getElementById("display");

  switch(operator) {
    case "+": display.innerHTML = `The answer is: ${num1+num2}`;
    break;
    case "-": display.innerHTML = `The answer is: ${num1-num2}`;
    break;
    case "*": display.innerHTML = `The answer is: ${num1*num2}`;
    break;
    case "/": display.innerHTML = `The answer is: ${num1/num2}`;
    break;
    default : display.innerHTML = `Please enter correct operator!`;
  }
}
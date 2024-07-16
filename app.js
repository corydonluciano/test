const result = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
let action = "+";
plus.onclick = function () {
  action = "+";
};
minus.onclick = function () {
  action = "-";
};
function printResult(res) {
  if (res < 0) {
    result.style.color = "red";
  } else {
    result.style.color = "green";
  }
  result.textContent = res;
}
function calculateNumbers(inp1, inp2, act) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  if (act == "+") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
}
submitBtn.onclick = function () {
  const sum = calculateNumbers(input1, input2, action);
  printResult(sum);
};

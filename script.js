function add(a, b) {
  return (a * 1 + b * 1);
}
function subtract(a ,b) {
  return (a-b);
}
function multiply(a, b) {
  return (a*b);
}
function divide(a, b) {
  let answer = (b == 0) ? "Doh! Can't divide by 0!" : (a/b);
  return answer;
}
function operate(op, a, b) {
  let answer = (op == "add") ? add(a,b) : (op == "subtract") ? subtract(a,b) : (op == "multiply") ? multiply(a,b) : (op == "divide") ? divide(a,b) : console.log("op error");
  return (Math.round(answer * 1000000) / 1000000) ;
}


let numBtns = document.getElementsByClassName("number");
let opBtns = document.getElementsByClassName("operator");
let output = document.getElementById("output");
let clrBtn = document.getElementById("clear");
let eqlBtn = document.getElementById("equals");
let bkBtn = document.getElementById("backspace");
let lastClick = "";
let valueOne;
let valueTwo;

for (i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener("click", function(e) {
    if (e.target.innerHTML == "." && output.innerHTML.includes(".")) {
      if (lastClick == "eqlBtn" || lastClick == "opBtns") {
        output.innerHTML = "";
      } else {
      return;
    }}
    if (lastClick == "eqlBtn" || lastClick == "opBtns") {
      output.innerHTML = "";
      lastClick = ""
    }
    output.innerHTML += e.target.innerHTML;
  });
}

let opSelection;
for (i = 0; i < opBtns.length; i++) {
  opBtns[i].addEventListener("click", function(e) {
    if (lastClick == "opBtns") {
      opSelection = e.target.id;
    } else if (valueOne == undefined || lastClick == "eqlBtn") {
    valueOne = output.innerHTML;
    opSelection = e.target.id;
    console.log(opSelection);
    } else {
      valueTwo = output.innerHTML;
      let value = operate(opSelection, valueOne, valueTwo);
      output.innerHTML = value;
      valueOne = value;
      opSelection = e.target.id;
    }
    lastClick = "opBtns";
  });
}

clrBtn.addEventListener("click", function() {
  location.reload();
});
eqlBtn.addEventListener("click", function() {
  if (valueOne == undefined) {
    return;
  } else {
    valueTwo = output.innerHTML;
    let value = operate(opSelection, valueOne, valueTwo);
    output.innerHTML = value;
    valueOne = valueTwo = undefined;
    lastClick = "eqlBtn";
  }
});
bkBtn.addEventListener("click", function() {
  output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1);
})
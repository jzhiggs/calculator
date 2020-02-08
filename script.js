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
  let answer = (op == "+") ? add(a,b) : (op == "-") ? subtract(a,b) : (op == "*") ? multiply(a,b) : (op == "/") ? divide(a,b) : console.log("op error");
  return (Math.round(answer * 1000000) / 1000000) ;
}


let numBtns = document.getElementsByClassName("number");
let opBtns = document.getElementsByClassName("operator");
let output = document.getElementById("output");
let clrBtn = document.getElementById("clear");
let eqlBtn = document.getElementById("equals");
let bkBtn = document.getElementById("backspace");
let buttons = document.getElementsByTagName("button");
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
    e.target.classList.add('pushed');
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
    e.target.classList.add('pushed');

  });
}

clrBtn.addEventListener("click", function() {
  clrBtn.classList.add('pushed');
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
  eqlBtn.classList.add('pushed');
});
bkBtn.addEventListener("click", function() {
  output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1);
  bkBtn.classList.add('pushed');

})
window.addEventListener("keydown", function(e) {
  let code = e.keyCode;
  let key = e.key
  if (key == "1" || key == "2" || key == "3" || key == "4" || key == "5" || key == "6" || key == "7" || key == "8" || key == "9" || key == "0") {
    if (lastClick == "eqlBtn" || lastClick == "opBtns") {
      output.innerHTML = "";
      lastClick = ""
    }
    output.innerHTML += key;  
  }
  if (code == 190) {
    if (output.innerHTML.includes(".")) {
      if (lastClick == "eqlBtn" || lastClick == "opBtns") {
        output.innerHTML = "";
      } else {
      return;
      } 
    } output.innerHTML += key;
  }
  if (key == "+" || key == "-" || key == "/" || key == "*" || key == "x") {
    if (key == "x") key = "*";
    if (lastClick == "opBtns") {
      opSelection = key;
    } else if (valueOne == undefined || lastClick == "eqlBtn") {
    valueOne = output.innerHTML;
    opSelection = key;
    } else {
      valueTwo = output.innerHTML;
      let value = operate(opSelection, valueOne, valueTwo);
      output.innerHTML = value;
      valueOne = value;
      opSelection = key;
    }
    lastClick = "opBtns";

  }
  if (key == "=" || code == 13) {
    if (valueOne == undefined) {
      return;
    } else {
      valueTwo = output.innerHTML;
      let value = operate(opSelection, valueOne, valueTwo);
      output.innerHTML = value;
      valueOne = valueTwo = undefined;
      lastClick = "eqlBtn";
    }
  }
  if (code == 8) {
    output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1);
  }
  if (key == "c" || key == "Escape") {
    location.reload();
  }
  let swTrg;
  switch (key) {
    case "1":
      swTrg = document.getElementById('1');
      break;
    case "2":
      swTrg = document.getElementById('2');
      break;
    case "3":
      swTrg = document.getElementById('3');
      break;
    case "4":
      swTrg = document.getElementById('4');
      break;
    case "5":
      swTrg = document.getElementById('5');
      break;
    case "6":
      swTrg = document.getElementById('6');
      break;
    case "7":
      swTrg = document.getElementById('7');
      break;
    case "8":
      swTrg = document.getElementById('8');
      break;
    case "9":
      swTrg = document.getElementById('9');
      break;
    case "0":
      swTrg = document.getElementById('0');
      break;
    case ".":
      swTrg = document.getElementById('.');
      break;
    case "/":
      swTrg = document.getElementById('/');
      break;
    case "*":
      swTrg = document.getElementById('*');
      break;
    case "x":
      swTrg = document.getElementById('*');
      break;
    case "-":
      swTrg = document.getElementById('-');
      break;
    case "+":
      swTrg = document.getElementById('+');
      break;
    case "=":
      swTrg = document.getElementById('equals');
      break;
    case "Enter":
      swTrg = document.getElementById('equals');
      break;
    case "Backspace":
      swTrg = document.getElementById('backspace');
      break;
    case "c":
      swTrg = document.getElementById('clear');
      break;
    case "Escape":
      swTrg = document.getElementById('clear');
      break;
    default:
      console.log("error");
  } swTrg.classList.add('pushed');
});
btnArray = Array.from(buttons);
btnArray.forEach(button => button.addEventListener
("transitionend", (e) => e.target.classList.remove('pushed')));
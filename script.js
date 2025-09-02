const equalBtn = document.getElementById("equal");//створили параметр для знаходження кнопки з id =
const clearBtn = document.getElementById("clear");
const operators = ["+", "-", "*", "/"];

document.getElementById("result").style.visibility = "hidden";
 //приховати поле результат
equalBtn.addEventListener("click", function() {
  document.getElementById("result").style.visibility = "visible";
});

clearBtn.addEventListener("click", function() {  //налаштування видалення при натисканні на кнопку С
  document.getElementById("display").value = "";
  document.getElementById("result").value = "";
  document.getElementById("result").style.visibility = "hidden";
});

/* function addOne() {
  document.getElementById("display").value += "1";
}
// виводимо послідовно 1
Btn1.addEventListener("click", addOne);
document.addEventListener("keydown", function(event) {
  if(event.key === "1") {
    addOne();
  }
});*/
function addNum(num){
    document.getElementById("display").value += num;
}

for (let i = 0; i < 10; i++) {
  document.getElementById("btn" + i).addEventListener("click", function() {
  addNum(i);
  })
}

document.addEventListener("keydown", function(event){
  if (event.key >= "0" && event.key <= "9") {
  addNum(event.key);}
})

//+
/*document.getElementById("sum").addEventListener("click", function() {
  addNum("+");
})
document.addEventListener("keydown", function(event){
  if (event.key === "+") {
  addNum(event.key);}
})*/

function addOperator(op) {
  const display = document.getElementById("display");
  const lastChar = display.value.slice(-1); //параметр для останнього символа
  if (display.value === "" || operators.includes(lastChar)) {
    return; //нічого не робимо
  }
  display.value += op;
}

document.getElementById("sum").addEventListener("click", function() {
  addOperator("+");
})
document.addEventListener("keydown", function(event){
  if (event.key === "+") {
  addOperator("+");}
})

document.getElementById("mult").addEventListener("click", function() {
  addOperator("*");
})
document.addEventListener("keydown", function(event){
  if (event.key === "*") {
  addOperator("*");}
})

function addMin(minus) {
  const display = document.getElementById("display");
  const lastChar = display.value.slice(-1); //параметр для останнього символа
  if (lastChar ==="-") {
    return; //нічого не робимо
  }
  display.value += minus;
}

document.getElementById("res").addEventListener("click", function() {
  addMin("-");
})
document.addEventListener("keydown", function(event){
  if (event.key === "-") {
  addMin("-");}
})

document.getElementById("divis").addEventListener("click", function() {
  addOperator("/");
})
document.addEventListener("keydown", function(event){
  if (event.key === "/") {
  addOperator("/");}
})

function addDot() {
  const display = document.getElementById("display");
  const value = display.value;
  // Беремо останнє число після оператора або початкове
  const lastNumber = value.split(/[\+\-\*\/]/).pop();
  if (lastNumber.includes(".")) {
    return;
  }
  // Если поле пустое или последний символ оператор — ставим "0."
  if (value === "" || operators.includes(value.slice(-1))) {
    display.value += "0.";
  } else {
    display.value += ".";
  }
}

document.getElementById("dot").addEventListener("click", addDot);
document.addEventListener("keydown", function(event){
  if (event.key === "." || event.key === ",") {
    addDot();
  }
});

//Backspace
document.addEventListener("keydown", function(event){
  if (event.key === "Backspace") {
    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
  }
});

equalBtn.addEventListener("click", function(){
  let val = document.getElementById("display").value;
  const result = document.getElementById("result");

  if(operators.includes(val.slice(-1))){
    val = val.slice(0, -1);
  }

  if(val === ""){
    return;
  }

  try {
  // Считаем выражение
  const value = eval(val);
  result.value = value;
  } catch (e) {
  result.value = "Ошибка";
  }
})
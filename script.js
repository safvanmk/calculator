
//1 display number

function displayNum(num) {
  result.value += num;
}

//2 clear text box (AC)

function clearNum() {
  result.value = '';
}

//3 Evaluate expression

function evaluateNum() {

  // exp = result.value;
  // output = eval(exp);
  // result.value = output;

  result.value = eval(result.value)
}

// 4 remove last number

function clearOne() {
  result.value = result.value.slice(0,-1)
}



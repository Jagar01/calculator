let varCount = 1;
let var1 = [];
let operatorVar = [];

function display(value) {
  document.getElementById('display').innerText += value;
}

function resetDisplay() {
  document.getElementById('display').innerText = '';
  varCount = 1;
  var1 = [];
  operatorVar = [];
}

function numberInput(value) {
  display(value);
  if (var1[varCount-1] === undefined) {
    var1[varCount-1] = '';
  }
  var1[varCount-1] += value.toString();
}


function operator(value) {
  display(value);
  operatorVar.push(value);
  varCount++;
}

function calculateFinal() {
  operatorVar.push('');
  let finalString = '';
  for (let i = 0; i < var1.length; i++) {
    finalString += var1[i] + operatorVar[i];
  }

  let result;
  try {
    result = eval(finalString);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error('Invalid calculation');
    }
    document.getElementById('display').innerText = result;
  } catch (error) {
    document.getElementById('display').innerText = 'Error';
  }

  varCount = 1;
  var1 = [];
  var1[0] = result.toString();
  operatorVar = [];
}

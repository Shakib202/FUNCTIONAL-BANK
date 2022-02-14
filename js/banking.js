function doubleIt(num){
  const result = num * 2;
  return result;
}
const fiveDouble = doubleIt(5);
const severDouble = doubleIt(7);

function getInputValue(inputId){
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input field
  inputField.value = ''; 
  return amountValue;
}

function updateTotalField(totalFieldId, amount){
  debugger;
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText= previousTotal + amount;
}

document.getElementById('deposit-button').addEventListener('click', function(){
  const depositAmount = getInputValue('deposit-input');
  // get and update deposit total
  updateTotalField('deposit-total', depositAmount);
  // update balance
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal + depositAmount;
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
  const withdrawAmount = getInputValue('withdraw-input');
  // get and update withdraw total
  updateTotalField('withdraw-total' ,withdrawAmount);

  // update balance after withdraw
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

})
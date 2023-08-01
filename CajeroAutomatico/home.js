const nameDiv = document.getElementById("user-info");
const balanceDiv = document.getElementById("balance");
const accountDiv = document.getElementById("number-account");
const depositButton = document.getElementById("deposit-button");
const withdrawButton = document.getElementById("withdraw-button");
const depositAmount = document.getElementById("deposit-amount");
const withdrawAmount = document.getElementById("withdraw-amount");
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

nameDiv.innerHTML = `<span>${loggedUser.name}</span>`;
balanceDiv.innerHTML = `<span> $ ${loggedUser.balance} USD</span>`;
accountDiv.innerHTML = `<span> Cuenta # ${loggedUser.account}</span>`;

console.log(loggedUser);

withdrawButton.addEventListener("click", function (event) {
  event.preventDefault();

  let withdraw = withdrawAmount.value;
  let newBalance = loggedUser.balance - withdraw; 

  if(newBalance < 10){
    alert("No puedes tener menos de $10 en tu cuenta, lo sentimos")
  }
  else{
    loggedUser.balance = newBalance;
    balanceDiv.innerHTML = `<span> $ ${newBalance} USD</span>`;

  }
});

depositButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    let deposit = depositAmount.value;
    let newBalanceDep = parseFloat(loggedUser.balance) + parseFloat(deposit); 
  
    if(newBalanceDep > 990){
      alert("No puedes tener más de $990 en tu cuenta, lo sentimos")
    }
    else{
      loggedUser.balance = newBalanceDep;
      balanceDiv.innerHTML = `<span> $ ${newBalanceDep} USD</span>`;
  
    }
  });
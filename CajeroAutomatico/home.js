const nameDiv = document.getElementById("user-info");
const balanceDiv =document.getElementById("balance");
const accountDiv =document.getElementById("number-account");

const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));


console.log(nameDiv);
    nameDiv.innerHTML = `<span>${loggedUser.name}</span>`
console.log(balanceDiv);
    balanceDiv.innerHTML = `<span> $ ${loggedUser.balance} USD</span>`;

    accountDiv.innerHTML = `<span> Cuenta # ${loggedUser.account}</span>`


    console.log(loggedUser);
const buttonLogIn = document.getElementById("button-login");
const userInput = document.getElementById("input-user");
const passwordInput = document.getElementById("input-password");


buttonLogIn.addEventListener("click", function(event) {

   event.preventDefault(); 
  
  let user = userInput.value;
  let password = passwordInput.value;

  window.location.href = "./home.html";
  

});


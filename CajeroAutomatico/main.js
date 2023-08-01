const userInput = document.getElementById("input-user");
const passwordInput = document.getElementById("input-password");
const buttonLogIn = document.getElementById("button-login");

const users = [
  {
    username: "VALENTINAMOR11",
    password: "1234",
    name: "Valentina Moreno",
    balance: 120,
    account: "1234 4567 7890",
  },
  {
    username: "JUANDIEG27",
    password: "1234",
    name: "Juan Diego Sanchez",
    balance: 70,
    account: "2356 1478 1523",
  },
  {
    username: "NMIRANDAA",
    password: "1234",
    name: "Nelsy Miranda",
    balance: 800,
    account: "2536 8965 7854",
  },
];

  buttonLogIn.addEventListener("click", function (event) {
    event.preventDefault();
    let username = userInput.value;
    let password = passwordInput.value;

    let loggedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (loggedUser) {
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      window.location.href = "./home.html";
    } else {
      alert("El usuario o la contraseña son incorrectos");
    }
  });

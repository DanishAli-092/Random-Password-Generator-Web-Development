const PasswordBox = document.getElementById("Password");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWSYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*(){}_?~";

const allchar = upperCase + lowerCase + number + symbol;

function createpassword() {
    let Password = "";
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += number[Math.floor(Math.random() * number.length)];
    Password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > Password.length) {
        Password += allchar[Math.floor(Math.random() * allchar.length)];
    }

    PasswordBox.value = Password;
}

function copypassword() {
    PasswordBox.select();
    document.execCommand("copy");
}

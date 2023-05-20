const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


let generatePassword = document.getElementById("generate-btn")
let leftPass = document.getElementById("leftpass")
let rightPass = document.getElementById("rightpass")


generatePassword.addEventListener("click", function() {
    leftPass.textContent = "";
    rightPass.textContent = "";
    leftPass.textContent = generateRandomPass();
    rightPass.textContent = generateRandomPass();

})

let passwordLimit = 15;
function generateRandomPass(){
    let myPass = "";
    for(let i = 0; i < passwordLimit; i++) {
        let randomNum = Math.floor(Math.random() * characters.length);
        myPass += characters[randomNum];
    }
    return myPass;
}
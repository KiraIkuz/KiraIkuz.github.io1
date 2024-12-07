let userHealth = 100;
let computerHealth = 100;

function selectOption(option) {
    localStorage.setItem("selectedOption", option);

    window.location.href = "FinalFight.html";
}
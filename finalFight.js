const selectedOption = localStorage.getItem("selectedOption");

let userHealth = localStorage.getItem("userHealth") || 100;
let computerHealth = localStorage.getItem("computerHealth") || 100;

let attackPoints;
if (selectedOption === "option1") {
    attackPoints = 10;
}
else if (selectedOption === "option2") {
    attackPoints = 20;
}
else if (selectedOption === "option3") {
    attackPoints = 30;
}

const values = ["10", "20", "30"];
function getRandomValue() {
    return values[Math.floor(Math.random() * values.length)]
}

const computerChoice = getRandomValue();
console.log("Computer chose: ", computerChoice);

computerHealth -= attackPoints;
localStorage.setItem("computerHealth", computerHealth);

userHealth -= computerChoice;
localStorage.setItem("userHealth", userHealth);

if (userHealth <= 0 || computerHealth <= 0) {
    window.location.href = "finalResult.html";
}
else {
    document.body.innerHTML += `<h1 style="background-color: cyan; width: auto; font-weight: bolder;">You chose Attack for ${attackPoints} damage!</h1>`;
    document.body.innerHTML += `<h2 style="background-color: black; width: auto; font-weight: bolder;">The Computer chose Attack for ${computerChoice} damage!</h2>`
    document.body.innerHTML += `<p style="background-color: black; width: auto; font-weight: bolder;">Computer's Health: ${computerHealth}</p>`;
    document.body.innerHTML += `<p style="background-color: cyan; width: auto; font-weight: bolder;">User's Health: ${userHealth}</p>`;

    const proceedButton = document.createElement("button");

    proceedButton.textContent = "Next Round";
    proceedButton.classList.add("proceed-button");
    proceedButton.onclick = function() {
            window.location.href = "FinalProjectP1.html";
    };

    document.body.appendChild(proceedButton);
}

const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Battle";
    restartButton.classList.add("restart-button");
    restartButton.onclick = function() {
        localStorage.removeItem("selectedOption");
        localStorage.removeItem("computerChoice");
        localStorage.removeItem("userHealth");
        localStorage.removeItem("computerHealth");
        window.location.href = "FinalProjectP1.html";
    };

    document.body.appendChild(restartButton);
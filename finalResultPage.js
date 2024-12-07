let userHealth = localStorage.getItem("userHealth") || 100; 
let computerHealth = localStorage.getItem("computerHealth") || 100;

document.body.innerHTML += `<p>User's health: ${userHealth}</p>`;
document.body.innerHTML += `<p>Computer's health: ${computerHealth}</p>`;

if (userHealth <= 0) {
    document.body.innerHTML += "<h2>Computer wins!</h2>";
}
else if (computerHealth <= 0) {
    document.body.innerHTML += "<h2>You win!</h2>";
}
else {
    document.body.innerHTML += "<h2>It's a tie!</h2>";
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
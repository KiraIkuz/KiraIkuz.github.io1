let userHealth = localStorage.getItem("userHealth") || 100; 
let computerHealth = localStorage.getItem("computerHealth") || 100;

document.body.innerHTML += `<p style="background-color: cyan;">User's health: ${userHealth}</p>`;
document.body.innerHTML += `<p style="background-color: cyan;">Computer's health: ${computerHealth}</p>`;

if (userHealth <= 0 && computerHealth <=0) {
    document.body.innerHTML += '<h2 style="background-color: yellow";>Its a tie!</h2>';
}
else if (computerHealth <= 0) {
    document.body.innerHTML += '<h2 style="background-color: cyan; font-weight: 500;">You win!</h2>';
}
else {
    document.body.innerHTML += '<h2 style="background-color: black";>Computer Wins!</h2>';
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

fetch('(https://github.com/KiraIkuz/KiraIkuz.github.io1)')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
function choose_difficulty() {
    const valid_difficulty = ["easy", "medium", "hard"];
    const game_difficulty = prompt("Choose game difficulty: easy, medium, hard", "easy").toLowerCase();
    if (!valid_difficulty.includes(game_difficulty)) {
        alert("Invalid difficulty level, game difficulty has been set to easy");
        return "easy";
    } else {
        alert("You have chosen " + game_difficulty + " difficulty level");
        return game_difficulty;
    }
}

function generate_number(game_difficulty) {
    const bodyEl = document.body;
    switch (game_difficulty) {
        case "easy":
            bodyEl.style.backgroundImage = "url(images/easy.jpg)";
            return Math.floor(Math.random() * 10);
        case "medium":
            bodyEl.style.backgroundImage = "url(images/medium.jpg)";
            return Math.floor(Math.random() * 20);
        case "hard":
            bodyEl.style.backgroundImage = "url(images/hard.jpg)";
            return Math.floor(Math.random() * 50);
    }
}

async function main() {
    const game_difficulty = choose_difficulty();
    const randomNumber = generate_number(game_difficulty);

    // Wait for the background image to render
    await new Promise(resolve => setTimeout(resolve, 100));

    let lives = 3;
    let guess;
    while (lives != 0) {
        guess = parseInt(prompt("Guess the number", "0"));
        if (isNaN(guess)) {
            alert("Please enter a valid number.");
            continue;
        }
        if (guess == randomNumber) {
            alert("Congratulations, you have guessed the number correctly");
            break;
        } else if (guess < randomNumber) {
            lives--;
            alert(`You have ${lives} lives left, guess higher`);
        } else if (guess > randomNumber) {
            lives--;
            alert(`You have ${lives} lives left, guess lower`);
        }
    }
    if (lives == 0) {
        alert(`You have run out of lives, the number was ${randomNumber}`);
    }
    let retry = prompt("Would you like to play again? yes/no", "no").toLowerCase();
    if (retry == "yes") {
        main();
    }
}

main();
const imp_dates = [
    "Laid down on July 16, 1934",
    "Launched on October 3, 1936",
    "Commissioned on May 12, 1938",
    "Decommissioned on February 17, 1947"
];
const battle_stars = 20;

const important_dates_button = document.querySelector("#important-dates-button");
const important_dates_result = document.querySelector("#important-dates-results");
const battle_checker_input = document.querySelector("#battle-checker-input");
const battle_checker_button = document.querySelector("#battle-checker-button");
const battle_checker_result = document.querySelector("#battle-checker-results");
const battle_star_guesser_input = document.querySelector("#battle-star-guesser-input");
const battle_star_guesser_button = document.querySelector("#battle-star-guesser-button");
const battle_star_guesser_result = document.querySelector("#battle-star-guesser-results");

function random_dates() {
    const index = Math.floor(Math.random() * imp_dates.length);
    important_dates_result.textContent = imp_dates[index];
}

// Battle Checker Function
function battle_checker(input) {
    const battles = [
        "Pearl Harbor", "Midway", "Guadacanal", "Eastern Solomons",
        "Santa Cruz", "Rennell Islands", "Makin", "Kwajalein",
        "Hollandia", "Saipan", "Philippine Sea", "Great Marianas Turkey Shoot",
        "Peleliu", "Leyte Gulf", "Iwo Jima", "Okinawa"
    ];
    return battles.includes(input)
        ? "The USS Enterprise fought at that battle"
        : "The USS Enterprise did not fight at that battle";
}

// Battle Star Guesser Function
function battle_star_guesser(num) {
    if (num > battle_stars) {
        return "Sorry. That number is too high.";
    } else if (num < battle_stars) {
        return "Sorry. That number is too low.";
    } else {
        return "Congratulations! You guessed correctly. The USS Enterprise did indeed receive 20 battle stars during her service in World War II.";
    }
}

// Phone Validation Function
function validatePhone(num) {
    return String(num).length === 10
        ? "Thank you for entering a valid phone number."
        : "Please enter a valid phone number.";
}

// Event Listeners
important_dates_button.addEventListener("click", random_dates);

battle_checker_button.addEventListener("click", () => {
    const battleInput = battle_checker_input.value.trim();
    if (!battleInput) {
        battle_checker_result.textContent = "Please enter a valid battle.";
        return;
    }
    battle_checker_result.textContent = battle_checker(battleInput);
    battle_checker_input.value = "";
});

battle_star_guesser_button.addEventListener("click", () => {
    const inputInt = Number(battle_star_guesser_input.value.trim());

    if (!Number.isInteger(inputInt)) {
        battle_star_guesser_result.textContent = "Please enter a valid whole number.";
        return;
    }
    battle_star_guesser_result.textContent = battle_star_guesser(inputInt);
    battle_star_guesser_input.value = "";
});
  

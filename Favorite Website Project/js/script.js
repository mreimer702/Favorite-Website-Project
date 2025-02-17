// important dates random generator function
const imp_dates = ["Laid down on July 16, 1934", "Launched on October 3, 1936", "Commissioned on May 12, 1938", "Decommissioned on February 17, 1947"]
const battle_stars = 20;

function random_dates() {
    const index = Math.floor(Math.random() * imp_dates.length);
  return imp_dates[index];
} 

// battle checker function
function battle_checker (input) {
    switch (input) {
        case "Pearl Harbor":
        case "Midway":
        case "Guadacanal":
        case "Eastern Solomons":
        case "Santa Cruz":
        case "Rennell Islands":
        case "Makin":
        case "Kwajalein":
        case "Hollandia":
        case "Saipan":
        case "Philippine Sea":
        case "Great Marianas Turkey Shoot":
        case "Peleliu":
        case "Leyte Gulf":
        case "Iwo Jima":
        case "Okinawa":
        return "The USS Enterprise fought at that battle";
        default:
        return "The USS Enterprise did not fight at that battle";
    }
}

// battle star guesser function
function battle_star_guesser (num) {
    if (num > battle_stars){
        return "Sorry. That number is too high."
    } else if (num < battle_stars){
        return "Sorry. That number is too low."
    } else {
        return "Congratluations. You guessed correctly. The USS Entperrise did indeed recieve 20 battle stars during her service in World War II."
    }
}

// phone validation function
function validatePhone(num) {
    let long =  String(num).length;
    if(long === 10){
       return "Thank you for entering a valid phone number."
    } else {
        return "Please enter a valid phone number."
   }
  }


  
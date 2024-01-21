// Randomize image displayed
const images = ["./images/MeInKashmir.jpg"];
var randImgNum = Math.floor(Math.random() * images.length);
document.getElementById("frontImage").src = images[randImgNum];

// Randomizer personal description
const descriptions = ["Early to rise, early to bed. Makes a man healthy, but socially dead",
						"Vaguely European", "My favorite kind of velocity is a non fatal velocity", 
						"Tales from the front of a school bus", "Person by day, asleep by night", 
						"Born to be mild", "Built for leisure, not for speed", "Person by day, asleep by night",
						"Was once number one in the world for Phineas and Ferb trivia", "2006 person of the year - Time magazine",
						"Definitively the opposite of ruthless", "Y-list celebrity", "Professional amateur", "On the cutting edge of walking",
						"Arsh Siddiqui's primary resource for verifying his job qualifications", "An actual failed writer", 
						"One of the internet's websites of all time", "Almost the winner of a science fair in 2019"];
var randNum = Math.floor(Math.random() * descriptions.length);
document.getElementById("description").innerHTML = descriptions[randNum];
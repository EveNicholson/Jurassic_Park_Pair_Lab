const Dinosaur = require("./models/dinosaur.js");


const Park = require("./models/park.js");
const park1 = new Park("Jurassic Park", 100);
const dinosaur1 = new Dinosaur("t-rex", "people", 50);
const dinosaur2 = new Dinosaur("velociraptor", "chickens", 20);
const dinosaur3 = new Dinosaur("pterodactyl", "bugs", 5);

park1.addDinosaur(dinosaur1);
park1.addDinosaur(dinosaur2);
park1.addDinosaur(dinosaur3);


park1.removeDinosaur(dinosaur2);
console.log("Park after removing dinosaur:", park1);

const mostPopularDino = park1.findMostPopularDino();
console.log("Most popular dinosaur:", mostPopularDino);

const foundDino = park1.findDinosaurBySpecies("pterodactyl");
if (foundDino) {
  console.log("Found dinosaur:", foundDino);
} else {
  console.log("Dinosaur not found.");
}

console.log("Total daily visitors:", park1.calculateDailyVisitors());

console.log("Total annual visitors:", park1.calculateAnnualVisitors());

console.log("Total annual revenue:", park1.calculateAnnualRevenue());

park1.removeBySpecies("Velociraptor"); 
console.log("After removing by species:", park1);
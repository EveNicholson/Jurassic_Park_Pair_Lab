class Park {

  constructor(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
  }

  addDinosaur(dinosaur) {
    this.dinosaurs.push(dinosaur);
  }

  removeDinosaur(dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur);
    if (index !== -1) {
      this.dinosaurs.splice(index, 1);
    }
  }
  findMostPopularDino() {
    let max = 0;
    let popularDino = null; 

    for (let i = 0; i < this.dinosaurs.length; i++) {
      if (this.dinosaurs[i].guestsAttractedPerDay > max) {
        max = this.dinosaurs[i].guestsAttractedPerDay;
        popularDino = this.dinosaurs[i];
      }
    }
    return popularDino;
}

findDinosaurBySpecies(species) {
  return this.dinosaurs.find(dinosaur => dinosaur.species === species) || null;
}

calculateDailyVisitors() {
  return this.dinosaurs.reduce((totalVisitors, dino) => totalVisitors + dino.guestsAttractedPerDay, 0);
}


calculateAnnualVisitors() {
  const dailyVisitors = this.calculateDailyVisitors();
  const daysInYear = 365; 
  return dailyVisitors * daysInYear;
}

calculateAnnualRevenue() {
  const annualVisitors = this.calculateAnnualVisitors();
  return annualVisitors * this.ticketPrice;
}


}

module.exports = Park;

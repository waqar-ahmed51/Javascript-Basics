const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();
// In above example this keyword not work because in arrow function it referes to the global scope object
// change function to simple function or remove this keyword and replace with the object name
// Like this =  robot.energyLevel

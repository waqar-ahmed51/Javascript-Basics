// Write your fasterShip object literal below
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  };

  // Accessing the variable
  let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below
  let crewCount=spaceship.numCrew;
  let planetArray=spaceship.flightPath;


  // Accessing the object values by square brackets specially for the keys having spaces or numbers in it
  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  console.log(spaceship[propName]);
  
  // Write your code below
  let isActive=spaceship['Active Mission'];
  
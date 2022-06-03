//Concise Body Arrow Functions
//JavaScript also provides several ways to refactor arrow function syntax.

// So if we have a function:
const squareNum = (num) => {
    return num * num;
  };

// We can refactor the function to:
const squareNum2 = num => num * num;


//Example 2
const plantNeedsWater = (day) => {
    return day === 'Wednesday' ? true : false;
  };

  const plantNeedsWaters = day => day === 'Wednesday' ? true : false;



  //Blocked Scope of the variable
  const logVisibleLightWaves=()=>{
    const lightWaves='Moonlight';
    console.log(lightWaves);
  }
  
  logVisibleLightWaves();
  
  console.log(lightWaves);


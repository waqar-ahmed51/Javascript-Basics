const monsterFactory = (name, age) => {
    return { 
      name: name,
      age: age
    }
  };

  // TO this in shortcut
  const monsterFactory2 = (name, age) => {
    return { 
      name,
      age 
    }
  };


  // In shortcut the factory function will be - this is known as destructing
  function robotFactory(model, mobile){
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)
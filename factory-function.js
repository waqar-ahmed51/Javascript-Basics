//A real world factory manufactures multiple copies of an item quickly and on a massive scale.
//We don’t have to create an object literal every time we need a new monster.

const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
  };


const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'


// Another example
const robotFactory = (model, mobile) => {
    return { 
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      } 
    }
  };
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep(); 
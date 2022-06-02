//https://www.codecademy.com/courses/introduction-to-javascript/projects/race-day

let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 19;

if(age>=18 && registeredEarly){
  raceNumber+=1000;
}

if (age>18 && registeredEarly) {
  console.log(`Race at 9:30 am and race number is ${raceNumber}`);
}else if(age>18 && !registeredEarly){
  console.log(`Race at 11:00 am and race number is ${raceNumber}`);
}else if(age<18){
  console.log(`Race at 12:30 am and race number is ${raceNumber}`);
}else{
  console.log(`You should visit registration desk.`);
}
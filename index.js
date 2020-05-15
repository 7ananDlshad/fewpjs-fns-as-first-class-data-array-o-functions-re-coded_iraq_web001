function wakeDog(dogName, dogBreed) {
console.log(`Wake ${dogName} the ${dogBreed}`);
let msg = `Wake ${dogName} the ${dogBreed}`;
return msg;
}

function leashDog(dogName, dogBreed) {
console.log(`Leash ${dogName} the ${dogBreed}`);
let msg = `Leash ${dogName} the ${dogBreed}`;
return msg;
}

function walkToPark(dogName, dogBreed) {
console.log(`Wake to the park with ${dogName} the ${dogBreed}`);
let msg = `Wake to the park with ${dogName} the ${dogBreed}`;
return msg;
}

function throwFrisbee(dogName, dogBreed) {
console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
let msg = `Throw the frisbee for ${dogName} the ${dogBreed}`;
return msg;
}

function walkHome(dogName, dogBreed) {
console.log(`Wake home with ${dogName} the ${dogBreed}`);
let msg = `Wake home with ${dogName} the ${dogBreed}`;
return msg;
}

function unleashDog(dogName, dogBreed) {
console.log(`Unleash ${dogName} the ${dogBreed}`);
let msg = `Unleash ${dogName} the ${dogBreed}`;
return msg;
}

const routine =[wakeDog, leashDog, walkToPark, throwFrisbee, wakeHome,unleashDog];

function exerciseDog(dogName, dogBreed,routine){
  for(let i=0; i<routine.length; i++){
    let result= routine[i](dogName,dogBreed);
  }
  return result;
}
exerciseDog('Byron','poodle',routine);

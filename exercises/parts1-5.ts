// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
let spacecraftName: string = 'Determination';
let speedMph: number = 17500;
let kilomitersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;
let daysToMars: number = 0

// Part 2: Print Days to Mars
 console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);


// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * milesPerKilometer;
    let hours: number = milesAway / speedMph;
    return hours / 24;
 }


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.




// Part 4: Create a Spacecraft Class

// Create an instance of the class here:

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.

import { SpaceLocation } from './SpaceLocation';

class Spacecraft {
   milesPerKilometer: number = 0.621;
   name: string;
   speedMph: number;

   constructor(name: string, speedMph: number) {
      this.name = name;
      this.speedMph = speedMph;
   }

   getDaysToLocation(kilometersAway: number): number {
      let milesAway: number = kilometersAway * this.milesPerKilometer;
      let hours: number = milesAway / this.speedMph;
      return hours / 24;
   }

   printDaysToLocation(location: SpaceLocation) {
      console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
   }
}

// Add the printDaysToLocation function to the Spacecraft class.
//spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
//spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));

    
 

// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:

import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    massKg: number;

    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

//Returns the sum of all items using each item's massKg property
    sumMass( items: Payload[] ): number {
      let sum: number = 0;
      for (let i=0; i < items.length; i++) {
          sum += items[i].massKg;
      }
    return sum;
    }

    //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    currentMassKg(): number {
      return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    canAdd(item: Payload): boolean {
      return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }
 
    // Uses this.canAdd() to see if another item can be added
    // If true, adds cargo to this.cargoItems and returns true
    // If false, returns false 
    addCargo(cargo: Cargo): boolean {
     if (this.canAdd(cargo)) {
         this.cargoItems.push(cargo);
         return true;
      } else {
         return false;
      }
    }

    // Uses this.canAdd() to see if another astronaut can be added
    // If true, adds astronaut to this.astronauts and returns true
    // If false, returns false
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}

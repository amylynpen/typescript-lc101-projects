"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilomitersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
var daysToMars = 0;
// Part 2: Print Days to Mars
console.log(spacecraftName + " would take " + daysToMars + " days to get to Mars.");
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hours = milesAway / speedMph;
    return hours / 24;
}
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Add the printDaysToLocation function to the Spacecraft class.
//spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
//spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:

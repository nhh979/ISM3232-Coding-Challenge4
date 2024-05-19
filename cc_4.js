// Hoang Nguyen
// U12840485

class Car{
    // Create the instances of the Car class with 'make' and 'speed' properties
    constructor (make, speed){
        this.make = make;
        this.speed = speed;       
    }

    // Create the accelerate method 
    accelerate (){
        // Increase the speed by 10 each time it is called
        this.speed += 10;

        // Display the message
        console.log(`The speed of the ${this.make} after accelerating is ${this.speed} km/h.`);
    }

    // Create the brake method 
    brake () {
        // Decrease the speed by 5 each time it is called
        this.speed -= 5;

        // Display the message
        console.log(`The speed of the ${this.make} after braking is ${this.speed} km/h.`);
    }
}

// Create an inheritance class EV
class EV extends Car {
    constructor (make, speed, charge){
        super (make, speed);   // Parent class constructor with properties 'make' and 'speed
        this.charge = charge;  // Initiate the instance of the EV class with property 'charge
    }

    // Create a method to update the "charge" property to the new value
    chargeBattery (chargeTo) {
        this.charge = chargeTo;  // Update the charge to a different value
    }

    accelerate () {
        this.speed += 20;    // Increase the speed by 20 
        this.charge -= 1;   // Decrease the charge by 1

        // Display the message
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%.`);
    }
}

let tesla = new EV("Tesla", 120, 23)

console.log(`A ${tesla.make} starting at ${tesla.speed} km/h with a battery charge of ${tesla.charge}%.`);
tesla.chargeBattery(10)
console.log(`New battery charge: ${tesla.charge}%.`);
tesla.accelerate();
tesla.brake();
tesla.accelerate();
tesla.accelerate();

// The battery charge decreases by 1% each acceleration. At some points, the charge could reach 0%, so further acceleration would not
// theoretically possible. We need to consider the case when the charge is 0% to ensure that there would be no negative value for charge, and 
// accelerattion is not allowed.

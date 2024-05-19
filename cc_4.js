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
}


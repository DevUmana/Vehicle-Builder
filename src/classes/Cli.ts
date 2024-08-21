// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  vehicles: (Truck | Motorbike | Car)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;
  // constructor to initialize the vehicles array
  constructor(vehicles: (Truck | Motorbike | Car)[]) {
    this.vehicles = vehicles;
  }
  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "selectedVehicleVin",
          message: "Select a vehicle to perform an action on",
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "vehicleType",
          message: "Select a vehicle type",
          choices: ["Car", "Truck", "Motorbike"],
        },
      ])
      .then((answers) => {
        // Updated to Switch statement
        switch (answers.vehicleType) {
          case "Car":
            // create a car
            this.createCar();
            break;
          case "Truck":
            // create a truck
            this.createTruck();
            break;
          case "Motorbike":
            // create a motorbike
            this.createMotorbike();
            break;
          default:
            break;
        }
      });
  }

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: "input",
          name: "color",
          message: "Enter Color",
          validate: this.checkInput,
        },
        {
          type: "input",
          name: "make",
          message: "Enter Make",
          validate: this.checkInput,
        },
        {
          type: "input",
          name: "model",
          message: "Enter Model",
          validate: this.checkInput,
        },
        {
          type: "input",
          name: "year",
          message: "Enter Year",
          validate: this.checkNumber,
        },
        {
          type: "input",
          name: "weight",
          message: "Enter Weight",
          validate: this.checkNumber,
        },
        {
          type: "input",
          name: "topSpeed",
          message: "Enter Top Speed",
          validate: this.checkNumber,
        },
      ])
      .then((answers) => {
        const car = new Car(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: "input",
          name: "color",
          message: "Enter Color",
          validate: this.checkInput,
        },
        {
          type: "input",
          name: "make",
          message: "Enter Make",
          validate: this.checkInput,
        },
        {
          type: "input",
          name: "model",
          message: "Enter Model",
          validate: this.checkInput,
        },
        {
          type: "input",
          name: "year",
          message: "Enter Year",
          validate: this.checkNumber,
        },
        {
          type: "input",
          name: "weight",
          message: "Enter Weight",
          validate: this.checkNumber,
        },
        {
          type: "input",
          name: "topSpeed",
          message: "Enter Top Speed",
          validate: this.checkNumber,
        },
        {
          type: "input",
          name: "towingCapacity",
          message: "Enter Towing Capacity",
          validate: this.checkNumber,
        },
      ])
      .then((answers) => {
        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [],
          parseInt(answers.towingCapacity)
        );
        this.vehicles.push(truck);
        this.selectedVehicleVin = truck.vin;
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: "input",
          name: "color",
          message: "Enter Color",
          validate: this.checkInput,
        },
        {
          type: "input",
          name: "make",
          message: "Enter Make",
          validate: this.checkInput,
        },
        {
          type: "input",
          name: "model",
          message: "Enter Model",
          validate: this.checkInput,
        },
        {
          type: "input",
          name: "year",
          message: "Enter Year",
          validate: this.checkNumber,
        },
        {
          type: "input",
          name: "weight",
          message: "Enter Weight",
          validate: this.checkNumber,
        },
        {
          type: "input",
          name: "topSpeed",
          message: "Enter Top Speed",
          validate: this.checkNumber,
        },
        {
          type: "input",
          name: "frontWheelDiameter",
          message: "Enter Front Wheel Diameter",
          validate: this.checkNumber,
        },
        {
          type: "input",
          name: "frontWheelBrand",
          message: "Enter Front Wheel Brand",
          validate: this.checkInput,
        },
        {
          type: "input",
          name: "rearWheelDiameter",
          message: "Enter Rear Wheel Diameter",
          validate: this.checkNumber,
        },
        {
          type: "input",
          name: "rearWheelBrand",
          message: "Enter Rear Wheel Brand",
          validate: this.checkInput,
        },
      ])
      .then((answers) => {
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [
            new Wheel(
              parseInt(answers.frontWheelDiameter),
              answers.frontWheelBrand
            ),
            new Wheel(
              parseInt(answers.rearWheelDiameter),
              answers.rearWheelBrand
            ),
          ]
        );
        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
        this.performActions();
      });
  }

  // method to find a vehicle to tow
  findVehicleToTow(truck: Truck): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "vehicleToTow",
          message: "Select a vehicle to tow",
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers) => {
        // check if the selected vehicle is the truck else tow the selected vehicle
        if (answers.vehicleToTow === truck) {
          console.log("Th truck cannot tow itself");
          this.performActions();
        } else {
          truck.tow(answers.vehicleToTow);
          this.performActions();
        }
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: "Select an action",
          choices: [
            "Print details",
            "Start vehicle",
            "Accelerate 5 MPH",
            "Decelerate 5 MPH",
            "Stop vehicle",
            "Turn right",
            "Turn left",
            "Reverse",
            "Select or create another vehicle",
            "Tow A Vehicle",
            "Pop A Wheelie",
            "Exit",
          ],
        },
      ])
      .then((answers) => {
        // perform the selected action
        // Updated to Switch statement
        switch (answers.action) {
          case "Print details":
            // find the selected vehicle and print its details
            for (let i = 0; i < this.vehicles.length; i++) {
              if (this.vehicles[i].vin === this.selectedVehicleVin) {
                this.vehicles[i].printDetails();
              }
            }
            break;
          case "Start vehicle":
            // find the selected vehicle and start it
            for (let i = 0; i < this.vehicles.length; i++) {
              if (this.vehicles[i].vin === this.selectedVehicleVin) {
                this.vehicles[i].start();
              }
            }
            break;
          case "Accelerate 5 MPH":
            // find the selected vehicle and accelerate it by 5 MPH
            for (let i = 0; i < this.vehicles.length; i++) {
              if (this.vehicles[i].vin === this.selectedVehicleVin) {
                if (this.vehicles[i].currentSpeed < this.vehicles[i].topSpeed) {
                  this.vehicles[i].accelerate(5);
                } else {
                  console.log("Vehicle has reached its top speed");
                }
              }
            }
            break;
          case "Decelerate 5 MPH":
            // find the selected vehicle and decelerate it by 5 MPH
            for (let i = 0; i < this.vehicles.length; i++) {
              if (this.vehicles[i].vin === this.selectedVehicleVin) {
                if (this.vehicles[i].currentSpeed > 0) {
                  this.vehicles[i].decelerate(5);
                } else {
                  console.log("Vehicle has reached a stop");
                }
              }
            }
            break;
          case "Stop vehicle":
            // find the selected vehicle and stop it
            for (let i = 0; i < this.vehicles.length; i++) {
              if (this.vehicles[i].vin === this.selectedVehicleVin) {
                this.vehicles[i].stop();
              }
            }
            break;
          case "Turn right":
            // find the selected vehicle and turn it right
            for (let i = 0; i < this.vehicles.length; i++) {
              if (this.vehicles[i].vin === this.selectedVehicleVin) {
                this.vehicles[i].turn("right");
              }
            }
            break;
          case "Turn left":
            // find the selected vehicle and turn it left
            for (let i = 0; i < this.vehicles.length; i++) {
              if (this.vehicles[i].vin === this.selectedVehicleVin) {
                this.vehicles[i].turn("left");
              }
            }
            break;
          case "Reverse":
            // find the selected vehicle and reverse it
            for (let i = 0; i < this.vehicles.length; i++) {
              if (this.vehicles[i].vin === this.selectedVehicleVin) {
                this.vehicles[i].reverse();
              }
            }
            break;
          case "Tow A Vehicle":
            // find the selected vehicle and check if it is a truck before calling the findVehicleToTow method
            for (let i = 0; i < this.vehicles.length; i++) {
              if (this.vehicles[i].vin === this.selectedVehicleVin) {
                if (this.vehicles[i] instanceof Truck) {
                  const truck = this.vehicles[i] as Truck;
                  this.findVehicleToTow(truck);
                  return;
                } else {
                  console.log("Only trucks can tow other vehicles");
                }
              }
            }
            break;
          case "Pop A Wheelie":
            // find the selected vehicle and check if it is a motorbike before calling the wheelie method
            for (let i = 0; i < this.vehicles.length; i++) {
              if (this.vehicles[i].vin === this.selectedVehicleVin) {
                if (this.vehicles[i] instanceof Motorbike) {
                  const motorbike = this.vehicles[i] as Motorbike;
                  motorbike.wheelie();
                } else {
                  console.log("Only motorbikes can pop a wheelie");
                }
              }
            }
            break;
          case "Select or create another vehicle":
            // start the cli to return to the initial prompt if the user wants to select or create another vehicle
            this.startCli();
            return;
          default:
            // exit the cli if the user selects exit
            this.exit = true;
            break;
        }
        if (!this.exit) {
          // if the user does not want to exit, perform actions on the selected vehicle
          this.performActions();
        }
      });
  }

  // create a function that checks the input is valid string and let the user know if it is not
  checkInput(input: string): boolean {
    if (input === "") {
      console.log("Please enter a valid input");
      return false;
    }
    return true;
  }

  // create a function that checks the input is valid number and let the user know if it is not
  checkNumber(input: string): boolean {
    if (isNaN(parseInt(input))) {
      console.log("Please enter a valid number");
      return false;
    }
    return true;
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "CreateOrSelect",
          message:
            "Would you like to create a new vehicle or perform an action on an existing vehicle?",
          choices: ["Create a new vehicle", "Select an existing vehicle"],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === "Create a new vehicle") {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;

# Vehicle Builder

## Description

This Vehicle Builder application allows users to design and customize vehicles by selecting various components and features. Users can choose from different vehicle types (e.g., cars, trucks, motorbike) and then customize aspects such as the make, model, paint color, weight, and wheels. An interactive application designed for car enthusiasts, allowing you to drive your customized car, tow them or pop a wheelie!

[![MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. Save the repository code to your computer
2. Install npm on your computer
3. Install both npm inquirer and typescript
4. init npm i
5. Invoke using npm start

## Usage

Application Walkthrough [https://drive.google.com/file/d/1NMD1267xdF1DHTcxevFdzIsxkYGni2Pw/view](https://drive.google.com/file/d/1NMD1267xdF1DHTcxevFdzIsxkYGni2Pw/view)

## License

MIT License

Copyright (c) 2024 David Umana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

I am open to any feedback and improvements that others may have!

## Tests

- AC 1 will first be presented with two options, Create or select an existing vehicle
- AC 2 Creating a new vehicle will allow the user to create either a Car, Truck or Motorbike
- AC 3 Creating a new vehicle will prompt the user for a few question (Color, Make, Model, Year, Weight, Top Speed)
- AC 4 Creating a new truck will have an additional question (Towing capacity)
- AC 5 Selecting an existing vehicle will display a list to select from
- AC 6 Select an Action menu, will display a list of different options
- AC 6.1 Print Detail will display the detail of the selected car
- AC 6.2.1 Start Vehicle, Needed to perform other options
- AC 6.2.2 Accelerate 5 MPH, Increase the current speed by 5, one it reaches top speed vehicle will no longer increase
- AC 6.2.3 Decelerate 5 MPH, Decrease the current speed by 5, once it reaches 0 the vehicle is stopped
- AC 6.2.4 Stop vehicle, Will set the current speed to 0 and change the start flag to false
- AC 6.2.5 Turn Left or Turn Right, will turn the vehicle
- AC 6.2.6 Reverse, will reverse the vehicle
- AC 6.3 Select or create another vehicle, will take the user to the first options
- AC 6.4 Tow A Vehicle, will allow for a truck to tow another vehicle thats under their towing capacity
- AC 6.5 Pop A Wheelie, will allow for a motorbike to pop a wheelie
- AC 6.6 Exit, will quit the application

## Authors and acknowledgment

Badge information was pulled from [https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## Questions

For any questions, please contact me using the information below:

GitHub: [DevUmana](https://github.com/DevUmana)

Email: [dumana92@gmail.com](mailto:dumana92@gmail.com)

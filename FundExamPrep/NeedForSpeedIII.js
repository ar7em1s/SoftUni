function needforSpeed(input) {
    let n = Number(input.shift());
    let carInv = {};

    for (let i = 0; i < n; i++) {
        let carData = input.shift();
        let [name, mileage, fuel] = carData.split('|'); 
        
        let car = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        }
        carInv[name] = car;
    }
    
    while (input[0] != 'Stop') {
        let line = input.shift();
        let tokens = line.split(' : ');
        let command = tokens[0];
        let name = tokens[1];
        let car = carInv[name];

        switch (command) {
            case 'Drive': // {car} : {distance} : {fuel}
            let distance = Number(tokens[2]);
            let consumedFuel = Number(tokens[3]);
            if (consumedFuel > car.fuel) {
                console.log("Not enough fuel to make that ride");
            } else {
                car.fuel -= consumedFuel;
                car.mileage += distance;
                console.log(`${name} driven for ${distance} kilometers. ${consumedFuel} liters of fuel consumed.`);
                if (car.mileage >= 100000) {
                    console.log(`Time to sell the ${name}!`);
                    delete carInv[name];
                }
            }
            break;

            case 'Refuel': // {car} : {fuel}
            let refuel = Number(tokens[2]);
            if (car.fuel + refuel >= 75) {
                refuel = 75 - car.fuel;
            } 
            car.fuel += refuel;
            console.log(`${name} refueled with ${refuel} liters`);

            break;
            case 'Revert': // {car} : {kilometers}
            let revertedKm = Number(tokens[2]);
            if (revertedKm <= 10000) {
                car.mileage = 10000;
            } else {
                car.mileage -= revertedKm;
                console.log(`${name} mileage decreased by ${revertedKm} kilometers`);
            }
            break;

        }

    }
    for (let name in carInv) {
        let car = carInv[name];
        console.log(`${name} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`);
      }
}

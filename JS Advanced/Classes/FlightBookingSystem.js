class FlightBookingSystem {
  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flights = [];
    this.bookings = [];
    this.bookingsCount = 0;
  }

  addFlight(flightNumber, destination, departureTime, price) {
    const data = this.flights.find((p) => p.flightNumber == flightNumber);

    if (!data) {
      this.flights.push({
        flightNumber,
        destination,
        departureTime,
        price: Number(price),
      });
      return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    } else {
      return `Flight ${flightNumber} to ${destination} is already available.`;
    }
  }

  bookFlight(passengerName, flightNumber) {
    const data = this.flights.find((p) => p.flightNumber == flightNumber);

    if (data) {
      this.bookingsCount++;
      this.bookings.push({
        passengerName,
        flightNumber,
      });
      return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    } else {
      return `Flight ${flightNumber} is not available for booking.`;
    }
  }

  cancelBooking(passengerName, flightNumber) {
    const data = this.bookings.find(
      (p) => p.flightNumber == flightNumber && p.passengerName == passengerName
    );
    if (data) {
      this.bookingsCount--;
      this.bookings.filter((flight) => flight.flightNumber == flightNumber);
      return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    } else {
      throw new Error(
        `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
      );
    }
  }

  showBookings(criteria) {
    if (this.bookingsCount !== 0 ) {
      switch (criteria) {
        case "all":
          let allFirstPart = `All bookings(${this.bookingsCount}):\n`;
          return (allFirstPart += this.bookings
            .map(
              (item) =>
                `${item.passengerName} booked for flight ${item.flightNumber}.`
            )
            .join("\n"));

        case "cheap":
          let cheapFirstPart = `Cheap bookings:\n`;
          let cheapBookings = this.bookings.filter((booking) => {
            let flight = this.flights.find(
              (f) => f.flightNumber === booking.flightNumber
            );
            return flight && flight.price <= 100;
          });
          if (cheapBookings.length > 0) {
            return (
              cheapFirstPart +
              cheapBookings
                .map(
                  (booking) =>
                    `${booking.passengerName} booked for flight ${booking.flightNumber}.`
                )
                .join("\n")
            );
          } else {
            return "No cheap bookings found.";
          }

        case "expensive":
          let expFirstPart = `Expensive bookings:\n`;
          let expensiveBookings = this.bookings.filter((booking) => {
            let flight = this.flights.find(
              (f) => f.flightNumber === booking.flightNumber
            );
            return flight && flight.price > 100;
          });
          if (expensiveBookings.length > 0) {
            return (
              expFirstPart +
              expensiveBookings
                .map(
                  (booking) =>
                    `${booking.passengerName} booked for flight ${booking.flightNumber}.`
                )
                .join("\n")
            );
          } else {
            return "No expensive bookings found.";
          }
      }
    } else {
        throw new Error(`No bookings have been made yet.`);
    }
  }
}

// const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
//   console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log('-----------');
// const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
//   console.log(system.bookFlight("Alice", "AA101"));
//   console.log(system.bookFlight("Bob", "BB202"));
//   console.log(system.bookFlight("Charlie", "CC303"));
// console.log('-----------');
// const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
//   console.log(system.bookFlight("Alice", "AA101"));
//   console.log(system.bookFlight("Bob", "BB202"));
//   console.log(system.cancelBooking("Alice", "AA101"));
//   console.log(system.cancelBooking("John", "AA102"));
// console.log('-----------');
// const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
//   console.log(system.bookFlight("Alice", "AA101"));
//   console.log(system.bookFlight("Bob", "BB202"));
//   console.log(system.showBookings("all"));
// console.log('-----------');
// const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 50));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 99));
//   console.log(system.bookFlight("Alice", "AA101"));
//   console.log(system.bookFlight("Bob", "BB202"));
//   console.log(system.showBookings("expensive"));
//    console.log(system.showBookings("cheap"));
// console.log("-----------");
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));
// console.log(system.cancelBooking("Bob", "BB202"));
// console.log(system.showBookings("all"));
// console.log("-----------");

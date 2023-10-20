function cinema(input) {
  let movieType = input[0];
  let rRows = Number(input[1]);
  let cColumns = Number(input[2]);

  let movieHallSeats = rRows * cColumns;

  let price = 0;
  if (movieType == "Premiere") {
    price = movieHallSeats * 12;
    console.log(`${price.toFixed(2)} leva`);
  } else if (movieType == "Normal") {
    price = movieHallSeats * 7.5;
    console.log(`${price.toFixed(2)} leva`);
  } else if (movieType == "Discount") {
    price = movieHallSeats * 5.0;
    console.log(`${price.toFixed(2)} leva`);
  }
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);

//колко часа на ден трябва да отделя, за да прочете необходимата литература.

function vacationBooksList(input) {
  let pageCount = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let days = Number(input[2]);
  let hoursNeeded = (pageCount / pagesPerHour) / days;

  console.log(hoursNeeded);
}

vacationBooksList(["212 ", "20", "2"]);

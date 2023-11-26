function destination(input) {
  let road = String(input);
  let pattern = /([=\/])([A-Z][a-zA-Z]{2,})\1/g;
  let travelPoints = 0;
  let destinations = [];

  let match = road.matchAll(pattern);

  for (let el of match) {
    let points = el[2].length;
    travelPoints += points;
    destinations.push(el[2]);
  }

  //   console.log(destinations.join(", "));
  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}

destination("=Hawai==/Cyprus//=Invalid/invalid==i5valid=/I5valid/=i=");
console.log("------------");
destination("ThisIs some InvalidInput");

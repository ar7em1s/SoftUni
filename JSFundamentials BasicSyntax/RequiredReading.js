function reading(pages, pagesPerHour, days) {
  let readingHours = pages / pagesPerHour;
  let required = readingHours / days;

  console.log(required);
}
reading(212, 20, 2);
reading(432, 15, 4);

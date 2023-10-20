function library(books) {
  let rightBook = books[0];
  let title = 1;
  let nextBook = books[title];
  let booksSearched = 0;

  while (nextBook !== "No More Books") {
    if (nextBook === rightBook) {
      console.log(`You checked ${booksSearched} books and found it.`);
      break;
    }
    booksSearched++;
    title++;
    nextBook = books[title];
  }
  if (nextBook !== rightBook) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksSearched} books.`);
  }
}

library(["Troy", "Stronger", "Life Style", "Troy"]);
console.log("--------");
library(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
console.log("--------");
library(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);

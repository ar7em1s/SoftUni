function language(country) {
  switch (country) {
    case "USA":
      console.log("English");
      break;
    case "England":
      console.log("English");
      break;
    case "Spain":
      console.log("Spanish");
      break;
    case "Argentina":
      console.log("Spanish");
      break;
    case "Mexico":
      console.log("Spanish");
      break;
    default:
      console.log("unknown");
  }
}

language("USA");
language("Germany");
language("England");
language("Mexico");
language("Italy");
language("Argentina");

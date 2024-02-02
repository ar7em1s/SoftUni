function solve() {
  const inputText = document.getElementById("input").value;
  const sentences = inputText.split(".");
  const paragraphs = [];

  // if (sentences === "") {
  //   return;
  // }

  for (let i = 0; i < sentences.length; i += 3) {
    let sliceEnd = i + 3;
    let paragraphText = sentences.slice(i, sliceEnd).join(".");

    if (paragraphText && paragraphText.charAt(paragraphText.length - 1) !== ".") {
      paragraphText += ".";
    }
    debugger;
    if (paragraphText === "") {
      break;
    }
    let paragraph = `<p>${paragraphText.trim()}</p>`;
    paragraphs.push(paragraph);
  }

  document.getElementById("output").innerHTML = paragraphs.join("");
}

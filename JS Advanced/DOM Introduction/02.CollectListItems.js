function extractText() {
    let box = document.getElementById("result");
    let liElements = document.getElementById("items");

    box.textContent = liElements.textContent;
}
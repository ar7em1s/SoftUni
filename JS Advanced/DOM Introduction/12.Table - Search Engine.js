function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const searchBox = document.getElementById("searchField");
  const tableRows = Array.from(document.querySelectorAll("tbody tr"));

  function onClick() {
    let searchInput = searchBox.value;

    for (let row of tableRows) {
      let rowData = Array.from(row.querySelectorAll("td"));
      for (let data of rowData) {
        if (data.textContent.includes(searchInput)) {
          row.classList.add("select");
          break;
        } else {
          row.classList.remove("select");
        }
      }
    }
    searchBox.value = "";
  }
}

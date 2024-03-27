function getInfo() {
  //1. get field references
  const stopID = document.getElementById("stopId").value;
  const stopName = document.getElementById("stopName");
  const busList = document.getElementById("buses");

  // 5. handle the click events, refresh the fields
  stopName.textContent = "";
  busList.innerHTML = "";

  // 2. GET request to the server
  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;

  const response = fetch(url);

  // 3. handling the request response
  response
    .then((res) => {
      res
        .json()
        .then((data) => {
          stopName.textContent = data.name;
          appendChild(Object.entries(data.buses));
        })
        .catch((e) => (stopName.textContent = "Error"));
    })
    .catch((error) => {
      stopName.textContent = "Error";
    });

  // 4. create elements from the request response and append them to the DOM to show the results
  function appendChild(data) {
    for ([bus, time] of data) {
      let li = document.createElement("li");
      li.textContent = `Bus ${bus} arrives in ${time} minutes`;
      busList.appendChild(li);
    }
  }
}

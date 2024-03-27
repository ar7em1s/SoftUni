async function getInfo() {
  const stopID = document.getElementById("stopId").value;
  const stopName = document.getElementById("stopName");
  const busList = document.getElementById("buses");

  stopName.textContent = "";
  busList.innerHTML = "";

  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    stopName.textContent = data.name;
    appendChild(Object.entries(data.buses));
  } catch {
    stopName.textContent = "Error";
  }

  // response
  //   .then((res) => {
  //     res
  //       .json()
  //       .then((data) => {
  //         stopName.textContent = data.name;
  //         appendChild(Object.entries(data.buses));
  //       })
  //       .catch((e) => (stopName.textContent = "Error"));
  //   })
  //   .catch((error) => {
  //     stopName.textContent = "Error";
  //   });

  function appendChild(data) {
    for ([bus, time] of data) {
      let li = document.createElement("li");
      li.textContent = `Bus ${bus} arrives in ${time} minutes`;
      busList.appendChild(li);
    }
  }
}

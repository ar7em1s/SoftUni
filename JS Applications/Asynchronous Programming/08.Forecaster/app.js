function attachEvents() {
  document.getElementById("submit").addEventListener("click", getWeather);

  const locationInputRef = document.getElementById("location");
  const forecastRef = document.getElementById("forecast");
  const currentRef = document.getElementById("current");
  const upcomingRef = document.getElementById("upcoming");

  const baseLocationUrl = "http://localhost:3030/jsonstore/forecaster/locations";
  const todayUrl = "http://localhost:3030/jsonstore/forecaster/today/";
  const comingUrl = "http://localhost:3030/jsonstore/forecaster/upcoming/";

  async function getWeather(event) {
    const userInput = locationInputRef.value;
    forecastRef.style.display = "block";
    const locationResponse = await fetch(baseLocationUrl);
    const locationData = await locationResponse.json();
    const currentLocationData = locationData.find((x) => x.name === userInput);
    await fillTodayData(currentLocationData.code);
    await fillUpcomingyData(currentLocationData.code);
  }

  async function fillTodayData(code) {
    const response = await fetch(todayUrl + code);
    const data = await response.json();
    const todayInfo = createForcastTodaySection(data);
    currentRef.appendChild(todayInfo);
  }

  async function fillUpcomingyData(code) {
    const response = await fetch(comingUrl + code);
    const data = response.json();
    createForcastUpcomingSection(data);
  }

  function createForcastUpcomingSection(data) {
    const container = document.createElement("div");
    container.classList.add("forecast-info");
    const upcoming1 = generateSpan();
    const upcoming2 = generateSpan();
    const upcoming3 = generateSpan();
  }

  function generateSpan(classes, data) {
    const spanContainer = document.createElement("span");
    spanContainer.classList.add(classes);

    const spanName = document.createElement("span");
    spanName.classList.add("forecast-data");
    spanName.textContent = data.name;

    const degree = document.createElement("span");
    degree.classList.add("forecast-data");
    degree.innerHTML = `${data.forecast.low + findSymbol("Degrees")}\\${data.forecast.high + findSymbol("Degrees")}`;

    const spanCondition = document.createElement("span");
    spanCondition.classList.add("forecast-data");
    spanCondition.textContent = data.forecast.condition;

    spanContainer.appendChild(spanName);
    spanContainer.appendChild(degree);
    spanContainer.appendChild(spanCondition);

    return spanContainer;
  }

  function createForcastTodaySection(data) {
    const container = document.createElement("div");
    container.classList.add("forecast");

    const conditionSpan = document.createElement("span");
    conditionSpan.classList.add("condition-symbol");
    conditionSpan.innerHTML = findSymbol(data.forecast.condition);

    container.appendChild(conditionSpan);
    const spanContainer = generateSpan("condition", data);

    // const spanContainer = document.createElement("span");
    // spanContainer.classList.add("condition");

    // const spanName = document.createElement("span");
    // spanName.classList.add("forecast-data");
    // spanName.textContent = data.name;

    // const degree = document.createElement("span");
    // degree.classList.add("forecast-data");
    // degree.innerHTML = `${data.forecast.low + findSymbol("Degrees")}\\${data.forecast.high + findSymbol("Degrees")}`;

    // const spanCondition = document.createElement("span");
    // spanCondition.classList.add("forecast-data");
    // spanCondition.textContent = data.forecast.condition;

    // spanContainer.appendChild(spanName);
    // spanContainer.appendChild(degree);
    // spanContainer.appendChild(spanCondition);
    container.appendChild(spanContainer);

    return container;
  }

  function findSymbol(condition) {
    switch (condition) {
      case "Sunny":
        return "&#x2600";
      case "Partly sunny":
        return "&#x26C5";
      case "Overcast":
        return "&#x2601";
      case "Rain":
        return "&#x2614";
      case "Degrees":
        return "&#x176";
    }
  }
}

attachEvents();

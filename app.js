const countryInput = document.querySelector("#country-input");
const searchCountryBtn = document.querySelector("#search-country-btn");
const countryDataDisplay = document.querySelector("#country-data");

searchCountryBtn.addEventListener("click", () => {
  const countryName = countryInput.value;
  const apiUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      const countryData = data[0];

      countryDataDisplay.innerHTML = `
      <div class="image-wrapper">
        <img src="${countryData.flags.svg}" alt="flag" />
      </div>
      <p><strong>Name:</strong><span>${countryData.name.common}</span></p>
      <p><strong>Continent:</strong><span>${
        countryData.continents[0]
      }</span></p>
      <p><strong>Capital:</strong><span>${countryData.capital[0]}</span></p>
      <p><strong>Languages:</strong><span>${Object.values(
        countryData.languages
      ).join(", ")}</span></p>
      <p><strong>Currency:</strong><span>${
        Object.keys(countryData.currencies)[0]
      }</span></p>
      <p><strong>Population:</strong><span>${countryData.population}</span></p>
      <p>
        <strong>Map:</strong
        ><a href="${countryData.maps.googleMaps}" target="_blank"
          >Google Maps</a
        >
      </p>
      `;

      // console.log(countryData);
      // console.log(countryData.flags.svg);
      // console.log(countryData.name.common);
      // console.log(countryData.continents[0]);
      // console.log(countryData.capital[0]);
      // console.log(Object.values(countryData.languages).join(", "));
      // console.log(Object.keys(countryData.currencies)[0]);
      // console.log(countryData.population);
      // console.log(countryData.maps.googleMaps);
    })
    .catch((error) => {
      countryDataDisplay.innerHTML = `<p class="error">Please Input the correct country name</p>`;
      console.log("Nah man, dis sum bs bro :(");
    });
});

const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
  for (code in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    
  }
}

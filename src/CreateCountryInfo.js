export function createCountryInfo(country) {
  const countryInfo = document.querySelector('.country-info');
  const languages = Object.values(country.languages);
  const countryInfoMarkup = `<img src="${country.flags.svg}" alt="Flag of ${country.name.official}" width="200"><h2>${country.name.official}</h2><p><strong>Capital:</strong> ${country.capital}</p><p><strong>Population:</strong> ${country.population}</p><p><strong>Languages:</strong> ${languages}</p>`;
  countryInfo.insertAdjacentHTML('beforeend', countryInfoMarkup);
}
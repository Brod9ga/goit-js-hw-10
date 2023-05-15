export function createCountryList(countries) {
  const countryList = document.querySelector('.country-list');
  const countryListMarkup = countries
    .map(
      country =>
        `<li style="list-style-type:none;"><img src="${country.flags.svg}" alt="Flag of ${country.name.official}" width="30">${country.name.official}</li>`
    )
    .join('');
  countryList.insertAdjacentHTML('beforeend', countryListMarkup);
}

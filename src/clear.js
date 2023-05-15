export function clear() {
  const countryList = document.querySelector('.country-list');
  const countryInfo = document.querySelector('.country-info');

  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

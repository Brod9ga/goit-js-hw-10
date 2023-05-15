import { Notify } from 'notiflix';
import { fetchCountries } from './fetchCountries.js';
import { createCountryList } from './createCountryList.js';
import { createCountryInfo } from './createCountryInfo.js';
import { clear } from './clear.js';

export function onSearch() {
  const inputSearch = document.querySelector('#search-box');
  const name = inputSearch.value.trim();
  if (!name) {
    clear();
    return;
  }
  fetchCountries(name)
    .then(countries => {
      clear();
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countries.length >= 2 && countries.length <= 10) {
        createCountryList(countries);
      } else if (countries.length === 1) {
        createCountryInfo(countries[0]);
      }
    })
    .catch(error => {
      console.log(error);
      clear();
      if (error.message === '404 Not Found') {
        Notify.failure('Oops, there is no country with that name');
      } else {
        Notify.failure('Oops, there was an error while fetching data');
      }
    });
}
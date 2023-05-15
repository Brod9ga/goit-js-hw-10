import './css/styles.css';
import debounce from 'lodash.debounce';
import { onSearch } from './onSearch';

const DEBOUNCE_DELAY = 300;
const inputSearch = document.querySelector('#search-box');

inputSearch.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

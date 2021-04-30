import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import CountriesContainer from './components/CountriesContainer.js'
import Search from './components/Search.js';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => fetchData(), []);

  const fetchData = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const countries = await res.json()
    setCountries(countries);
  }

  const [themeToggle, setThemeToggle] = useState(true);

  document.body.className = themeToggle ? 'parent' : 'parent dark-theme';

  return (
    <div>
      <Header themeToggle={themeToggle} setThemeToggle={setThemeToggle} />
      <Search themeToggle={themeToggle} searchValue={searchValue} setSearchValue={setSearchValue} />
      <CountriesContainer themeToggle={themeToggle} countries={countries} searchValue={searchValue} />
    </div>
  );
}

export default App;

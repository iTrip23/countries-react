import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import CountriesContainer from './components/CountriesContainer.js'
import SearchAndFilter from './components/SearchAndFilter.js';
import CountryInfoCard from './components/CountryInfoCard.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [region, setRegion] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const countries = await res.json()
    setCountries(countries);
  }

  const [themeToggle, setThemeToggle] = useState(true);

  document.body.className = themeToggle ? 'parent' : 'parent dark-theme';

  return (
    <BrowserRouter>
      <Header themeToggle={themeToggle} setThemeToggle={setThemeToggle} />
      <Switch>
        <Route exact path='/' render={() => (
          <div>
            <SearchAndFilter
              themeToggle={themeToggle}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              countries={countries}
              setRegion={setRegion} />
            <CountriesContainer
              themeToggle={themeToggle}
              countries={region.length === 0 ? countries : region}
              searchValue={searchValue} />
          </div>
        )}
        />
        <Route exact path='/info' render={() => <CountryInfoCard themeToggle={themeToggle} countries={countries} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

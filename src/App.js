import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.js';
import CountriesContainer from './components/CountriesContainer.js'
import Search from './components/Search.js';

function App() {
  const [themeToggle, setThemeToggle] = useState(true);
  document.body.className = themeToggle ? 'parent' : 'parent dark-theme';
  return (
    <div>
      <Header themeToggle={themeToggle} setThemeToggle={setThemeToggle} />
      <Search themeToggle={themeToggle} />
      <CountriesContainer themeToggle={themeToggle} />
    </div>
  );
}

export default App;

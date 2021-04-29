import './App.css';
import Header from './components/Header.js';
import CountriesContainer from './components/CountriesContainer.js'
import Search from './components/Search.js';

function App({ countries }) {
  return (
    <>
      <Header />
      <Search />
      <CountriesContainer countries={countries} />
    </>
  );
}

export default App;

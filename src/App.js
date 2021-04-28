import './App.css';
import Header from './components/Header.js';
import CountriesContainer from './components/CountriesContainer.js'

function App({ countries }) {
  return (
    <>
      <Header />
      <CountriesContainer countries={countries} />
    </>
  );
}

export default App;

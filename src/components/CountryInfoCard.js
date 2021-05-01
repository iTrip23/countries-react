import React from 'react';
import './CountryInfoCard.css';

const CountryInfoCard = ({ themeToggle, countries, country }) => {
	// const getCountry = alpha => countries.filter(country => country.alpha3Code === alpha);
	// const borderCountries = [];
	// const getBorderCountries = arr => arr.map(alpha => borderCountries.push(getCountry(alpha)));
	// getBorderCountries(country.borders);
	return (
		<h1>Country INFO</h1>
		// <section className={themeToggle ? 'country-info' : 'country-info dark-theme'}>
		// 	<button type='button'><i class="fas fa-arrow-left"></i>Back</button>
		// 	<div className='country-card-info'>
		// 		<img src={country.flag} alt={`${country.name} flag`} />
		// 		<div className='country-stats'>
		// 			<div className='country-stats-info'>
		// 				<h4 className='country-name'>{country.name}</h4>
		// 				<p className="country-info">Native name: <span>{country.nativeName}</span></p>
		// 				<p className="country-info">Population: <span>{country.population}</span></p>
		// 				<p className="country-info">Region: <span>{country.region}</span></p>
		// 				<p className="country-info">Sub Region: <span>{country.subregion}</span></p>
		// 				<p className="country-info">Capital: <span>{country.capital}</span></p>
		// 				<p className="country-info">Top Level Domain: <span>{country.topLevelDomain}</span></p>
		// 				<p className="country-info">Currencies: <span>{country.currencies}</span></p>
		// 				<p className="country-info">Languages: <span>{country.languages}</span></p>
		// 			</div>
		// 			<div className='border-countries'>
		// 				<p className="country-info">Border Countries: </p>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
	)
}

export default CountryInfoCard;
import React, { useState } from 'react';
import './CountryInfoCard.css';
import { Link } from 'react-router-dom';

const CountryInfoCard = ({ themeToggle, countries, id }) => {
	const [countryID, setCountryID] = useState(id)

	let filteredCountry;
	const getCountry = countryID => filteredCountry = countries.filter(country => country.alpha3Code === countryID);
	getCountry(countryID);

	const getBorderCountries = arr => {
		const borderCountries = [];
		arr.map(countryID => borderCountries.push(countries.filter(country => country.alpha3Code === countryID)));
		return borderCountries.flat().map((country, index) => (<span key={index} onClick={() => setCountryID(country.alpha3Code)}
			className={themeToggle ? 'country-btn' : 'country-btn dark-theme'}> {country.name} </span>));
	}

	const getAndShowCountryInfo = (country, index) => {
		return (
			<div className='country-card-info' key={index}>
				<img src={country.flag} alt={`${country.name} flag`} className='country-info-flag' />
				<div className='country-stats'>
					<h3 className='country-name'>{country.name}</h3>
					<div className='country-stats-info'>
						<div className='first-part'>
							<p className={themeToggle ? 'country-info' : 'country-info dark-theme'}>Native name: <span>{country.nativeName}</span></p>
							<p className={themeToggle ? 'country-info' : 'country-info dark-theme'}>Population: <span>{country.population}</span></p>
							<p className={themeToggle ? 'country-info' : 'country-info dark-theme'}>Region: <span>{country.region}</span></p>
							<p className={themeToggle ? 'country-info' : 'country-info dark-theme'}>Sub Region: <span>{country.subregion}</span></p>
							<p className={themeToggle ? 'country-info' : 'country-info dark-theme'}>Capital: <span>{country.capital}</span></p>
						</div>
						<div className='second-part'>
							<p className={themeToggle ? 'country-info' : 'country-info dark-theme'}>Top Level Domain: <span>{country.topLevelDomain}</span></p>
							<p className={themeToggle ? 'country-info' : 'country-info dark-theme'}>Currencies: {country.currencies.map((elem, index) => (<span key={index}> {elem.name} </span>))}</p>
							<p className={themeToggle ? 'country-info' : 'country-info dark-theme'}>Languages: {country.languages.map((elem, index) => (<span key={index}> {elem.name} </span>))}</p>
						</div>
					</div>
					<div className='border-countries'>
						<p className={themeToggle ? 'country-infoB' : 'country-infoB dark-theme'}>Border Countries: {getBorderCountries(country.borders)}</p>
					</div>
				</div>
			</div>
		)
	}

	return (
		<section className={themeToggle ? 'country-info-container' : 'country-info-container dark-theme'}>
			<Link to='/' style={{ textDecoration: 'initial' }}>
				<div className={themeToggle ? 'back-btn' : 'back-btn dark-theme'}><i className="fas fa-arrow-left"></i><p className='btn-text'>Back</p></div>
			</Link>
			{filteredCountry.map((country, index) => getAndShowCountryInfo(country, index))}
		</section>
	)
}

export default CountryInfoCard;
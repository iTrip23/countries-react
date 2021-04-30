import React, { useState } from 'react';
import './filter.css';

const Filter = ({ themeToggle, setRegion, countries }) => {
	const [showRegionList, setShowRegions] = useState(true);
	const onClickShowRegions = () => setShowRegions(!showRegionList);

	const filterCountriesByRegion = str => setRegion(countries.filter(country => country.region.toLowerCase() === str.toLowerCase()));

	return (
		<div onClick={onClickShowRegions} id='filter' className={`filter-component ${themeToggle ? '' : 'dark-theme'}`}>
			Filter by Region
			<i className="fas fa-chevron-down"></i>
			<ul className={`${showRegionList ? 'regions ' : 'regions open'} ${themeToggle ? '' : 'dark-theme'}`}>
				<li className='region' onClick={() => filterCountriesByRegion('africa')}>Africa</li>
				<li className='region' onClick={() => filterCountriesByRegion('americas')}>Americas</li>
				<li className='region' onClick={() => filterCountriesByRegion('asia')}>Asia</li>
				<li className='region' onClick={() => filterCountriesByRegion('europe')}>Europe</li>
				<li className='region' onClick={() => filterCountriesByRegion('OceANIA')}>Oceania</li>
			</ul>
		</div>
	)
}

export default Filter
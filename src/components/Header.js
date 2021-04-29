import React from 'react';

const Header = ({ themeToggle, setThemeToggle }) => {
	const changeTheme = () => { setThemeToggle(!themeToggle) };
	return (
		< header className={themeToggle ? '' : 'dark-theme'}>
			<h5 className={themeToggle ? 'header-title' : 'header-title dark-theme'}>Where in the world?</h5>
			<button type='button' className={themeToggle ? 'button-toggle' : 'button-toggle dark-theme'} onClick={changeTheme}>
				<i className={`fas ${themeToggle ? '' : 'dark-theme'} fa-moon`}></i>
				<i className={`far ${themeToggle ? '' : 'dark-theme'} fa-moon`}></i>
				Dark Mode</button>
		</header >
	)
}

export default Header;
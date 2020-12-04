import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon';

const Navigation = ({ onRouteChange, route, toggleModal }) => {
	if (route === 'signin') {
		return (
			<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<p
					onClick={() => onRouteChange('signin')}
					className='f3 dim black underline pa3 pointer'
				>
					Sign In
				</p>
				<p
					onClick={() => onRouteChange('register')}
					className='f3 dim black underline pa3 pointer'
				>
					Register
				</p>
			</nav>
		);
	} else if (route === 'home') {
		return (
			<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
			</nav>
		);
	} else {
		return (
			<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<p
					onClick={() => onRouteChange('signin')}
					className='f3 dim black underline pa3 pointer'
				>
					Sign In
				</p>
				<p
					onClick={() => onRouteChange('register')}
					className='f3 dim black underline pa3 pointer'
				>
					Register
				</p>
			</nav>
		);
	}
};

export default Navigation;

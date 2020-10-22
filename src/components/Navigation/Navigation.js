import React from 'react';

const Navigation = ({onRouteChange, route}) => {
  if (route === 'signin') {
    return(
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p
          onClick={() => onRouteChange('signin')}
          className='f3 dim black underline pa3 pointer'>Sign In
        </p>
        <p
          onClick={() => onRouteChange('register')}
          className='f3 dim black underline pa3 pointer'>Register
        </p>
      </nav>
    );
  } else if (route === 'home') {
    return(    
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p
          onClick={() => onRouteChange('signout')}
          className='f3 dim black underline pa3 pointer'>Sign Out
        </p>
      </nav>
    );
  } else {
    return(
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p
          onClick={() => onRouteChange('signin')}
          className='f3 dim black underline pa3 pointer'>Sign In
        </p>
        <p
          onClick={() => onRouteChange('register')}
          className='f3 dim black underline pa3 pointer'>Register
        </p>
      </nav>
    );
  }
}

export default Navigation;
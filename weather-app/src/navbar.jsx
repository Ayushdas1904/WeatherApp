import React from 'react';
import Search from './search.jsx';

function Navbar({ checkWeather }) {
    return (
        <>
            <nav className="nav-bar">
                <div>
                    <a className='logoName' href="#"><img id='logo' src="./src/assets/logo.png" alt="" />CLIMAX</a>
                </div>
                <Search checkWeather={checkWeather} />
            </nav>
        </>
    );
}

export default Navbar;

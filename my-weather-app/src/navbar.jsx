import React, {useEffect} from 'react';
import Search from './search.jsx';

function Navbar() {


    return (

        <>
            <nav className="nav-bar">
                <div>
                <a href="#"><img id='logo' src="./src/assets/logo.png" alt="" /></a>
                </div>
                <Search/>
            </nav>
        </>
    );
}

export default Navbar;

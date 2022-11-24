import React from 'react';
import "./navbar.scss";
import { FaSearch } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-items'>
                    <div className='nc-leftpart'>
                        <a className='item-name'>Coins</a>
                        <a className='item-name'>Exchanges</a>
                        <a className='item-name'>Swap</a>
                    </div>

                    <div className='nc-logo'>
                        <img src="https://seeklogo.com/images/C/coinmarketcap-logo-5DD5521DC6-seeklogo.com.png" alt="Coincap" />
                    </div>

                    <div className='nc-rightpart'>
                        <FaSearch />
                        <MdSettings style={{height: "20px", width: "20px"}} />
                        <button style={{cursor: "pointer"}} className='cw-btn'>Connect Wallet</button>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;


//   // "homepage": "http://juhi0710.github.io/CoinMarketCap",


//   "predeploy": "npm run build",
// "deploy": "gh-pages -d build",
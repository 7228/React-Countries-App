import React, { useState } from "react";
import "./HomeNavbar.css"
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

export default function HomeNavbar(props) {
    const { allCountries, setAllCountries, setSearchResults, setInputLength } = useContext(AppContext);
    const [sidebar, setSidebar] = useState(false);
   
    function handleChange(event) {
        setSearchResults(allCountries.filter((item) => {
            return item.name.official.toLowerCase().includes(event.target.value.toLowerCase())
        }))

        setInputLength(event.target.value.length)
    }

    
    return(
        <div className="navbar-home">
            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF" className="menu" onClick={() => setSidebar(true)}><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            {sidebar && <ul className="mobile-only">
                <li><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#5f6368" onClick={() => setSidebar(false)}><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
                <li><Link to="/"><h3>Home</h3></Link></li>
                <li><h3>About</h3></li>
                <li><Link to="/cart"><h3>Cart</h3></Link></li>
            </ul>}
            <div className="navbar-navigation">
                <Link to="/" className="link-tab"><div className="navbar-tab-home"><h3>Home</h3></div></Link>
                <div className="navbar-tab"><h3>About</h3></div>
            </div>
            <div className="navbar-search">
                <input type="text" className="search-input" onChange={(event) => handleChange(event)} placeholder="Search for a country..."></input>
            </div>
            <div className="navbar-cart">
            </div>
            <div className="cart">
                <Link to="/cart" className="link-tab"><div className="navbar-tab-cart"><h3 className="cart-heading">Cart</h3></div></Link>
            </div>
        </div>
    )
}
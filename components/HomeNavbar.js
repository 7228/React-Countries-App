import React from "react";
import "./HomeNavbar.css"
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

export default function HomeNavbar(props) {
    const { allCountries, setAllCountries } = useContext(AppContext);
   
    function handleChange(event) {
        props.setSearchResults(allCountries.filter((item) => {
            return item.name.official.toLowerCase().includes(event.target.value.toLowerCase())
        }))

        props.setInputLength(event.target.value.length)
    }

    return(
        <div className="navbar-home">
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
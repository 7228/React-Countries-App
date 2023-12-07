import React from "react";
import Navbar from "./Navbar";
import "./Cart.css"
import { useContext } from "react";
import { AppContext } from "../App";


export default function Cart() {
    const { cart, setCart, setAllCountries } = useContext(AppContext);

    function deleteCountry(name) {
        setCart((oldCart) => oldCart.filter((country) => {
            return country.name.official !== name
        }))

        setAllCountries(oldCountries => oldCountries.map(country => {
            return country.name.official === name  ?
                {...country, addedToCart: false} :
                country
        }))
    }
    
    const cartItems = cart.map((country) => {
        return (
            <div className="cart-item">
                <div className="basic-info">
                    <img src={country.flags.png} alt="country flag" className="country-flag"></img>
                    <h2 className="name">{country.name.official}</h2>
                    <button className="remove" onClick={() => deleteCountry(country.name.official)}>Remove</button>
                </div>
                    <div className="info-row">
                        <h3>Population</h3>
                        <h3 className="bold">{country.population}</h3>
                    </div>
                    <div className="info-row">
                        <h3>Region</h3>
                        <h3 className="bold">{country.region}</h3>
                    </div>
                    <div className="info-row">
                        <h3>Capital</h3>
                        <h3 className="bold">{country.capital}</h3>
                    </div>
                    <div className="info-row">
                        <h3>Landlocked</h3>
                        <h3 className="bold">{String(country.landlocked)}</h3>
                    </div>
                    <div className="info-row">
                        <h3>Independent</h3>
                        <h3 className="bold">{String(country.independent)}</h3>
                    </div>
                    <div className="info-row">
                        <h3>Subregion</h3>
                        <h3 className="bold">{country.subregion}</h3>
                    </div>
                    <div className="info-row">
                        <h3>UN Member</h3>
                        <h3 className="bold">{String(country.unMember)}</h3>
                    </div>
                </div>
        )
    })
   

    return(
        <div>
            <Navbar />
            <h2>Country Cart</h2>
            {cartItems[0] ?
                <div className="items-container">
                    {cartItems}
                </div> :
                <h1 className="empty-cart">Please add some country...</h1>
            }
        </div>
    )
}
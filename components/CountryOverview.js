import React, { useContext } from "react";
import "./CountryOverview.css"
import { Link } from "react-router-dom";
import { AppContext } from "../App";


export default function CountryOverview(props) {
    const { allCountries, setAllCountries, cart, setCart } = useContext(AppContext);
    const countryNames = [];
    
    function add(name) {
        setAllCountries(oldCountries => oldCountries.map(country => {
            return country.name.official === name && cart.length < 2 ?
                {...country, addedToCart: true} :
                country
        }))
        
        setCart(oldCart => {
            for(let i = 0; i < allCountries.length; i++) {
                if(allCountries[i].name.official === name) {
                    let country = allCountries[i]
                    for(let j = 0; j < cart.length; j++) {
                        countryNames.push(cart[j].name.official)
                    }

                    if(countryNames.includes(country.name.official) === false && cart.length < 2) {
                        return [
                            ...oldCart, country
                        ]} else {
                        return [
                            ...oldCart
                        ]
                    }
                }

            }
        })
        }

    return (
            <div className="country">
                <Link to={`/country/${props.name}`}>
                    <img src={props.image} alt="flag" className="flag"></img>
                    <h3 className="name">{props.name}</h3>
                </Link>
                <button onClick={() => add(props.name)} className={props.added ? "added" : "add-to-cart"}>{props.added ? "Added" : "Add to Cart"}</button>
                
            </div>
    )
}
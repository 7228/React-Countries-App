import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useParams } from "react-router-dom";
import CountryOverview from "./CountryOverview";
import HomeNavbar from "./HomeNavbar";
import Navbar from "./Navbar";

export default function Continent() {
    const { allCountries, setAllCountries, cart } = useContext(AppContext)
    const { id } = useParams();
    let countries = [];
    let result;
    console.log("cart:", cart)

    for (let i = 0; i < allCountries.length; i++) {
        let country = allCountries[i];
        if (country.continents.includes(id)) {
            countries.push(country)
            result = countries.map((country => {
                return <CountryOverview image={country.flags.png} name={country.name.official} added={country.addedToCart}/>
            }))
        }
    }
    
    return (
        <div>
            <Navbar />
            {result && <div className="countries-container">{result}</div>}
        </div>
    )
}
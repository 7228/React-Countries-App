import React from "react";
import "./Continents.css"
import { useContext } from "react";
import { AppContext } from "../App";
import { Routes, Route, Link } from "react-router-dom";
import Continent from "./Continent"
import HomeNavbar from "./HomeNavbar";
import CountryOverview from "./CountryOverview";


export default function Continents() {
    const [inputLength, setInputLength] = React.useState(0);
    const [searchResults, setSearchResults] = React.useState("");
    const {allCountries} = useContext(AppContext);
    let countries;
   

    if(searchResults) {
        countries = allCountries.map((country) => {
            for(let i = 0; i < searchResults.length; i++) {
                if(searchResults[i].name.official === country.name.official) {
                    return <CountryOverview image={country.flags.png} name={country.name.official} added={country.addedToCart}/>
                }
            }
        })
    }
    
    console.log(allCountries);
    return(
        inputLength < 1 ?
        <div className="container-1">
            <HomeNavbar inputLength={inputLength} setInputLength={setInputLength} searchResults={searchResults} setSearchResults={setSearchResults}/>
            
            <div className="continents">
                <div className="europe">
                    <Link to={`/continent/Europe`}><img className="map" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Flag_Map_of_Europe.png/1256px-Flag_Map_of_Europe.png" alt="European map"></img></Link>
                    <div className="desc">
                        <h2>Europe</h2>
                    </div>
                </div>
                <div className="asia">
                    <Link to="/continent/Asia"><img className="map" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_Map_of_Asia.png/640px-Flag_Map_of_Asia.png" alt="Asian map"></img></Link>
                    <div className="desc">
                        <h2>Asia</h2>
                    </div>
                </div>
                <div className="africa">
                    <Link to="/continent/Africa"><img className="map" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_Map_of_Africa.png" alt="African map"></img></Link>
                    <div className="desc">
                        <h2>Africa</h2>
                    </div>
                </div>
                <div className="australia">
                    <Link to="/continent/Oceania"><img className="map" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_Map_of_Oceania.png" alt="Australia and Oceania map"></img></Link>
                    <div className="desc">
                        <h2>Australia</h2>
                    </div>
                </div>
                <div className="north-america">
                    <Link to="/continent/North America"><img className="map" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_Map_of_North_America.png/2145px-Flag_Map_of_North_America.png" alt="Australia and Oceania map"></img></Link>
                    <div className="desc">
                        <h2>North America</h2>
                    </div>
                </div>
                <div className="south-america">
                    <Link to="/continent/South America"><img className="map" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_Map_of_South_America.png/640px-Flag_Map_of_South_America.png" alt="Australia and Oceania map"></img></Link>
                    <div className="desc">
                        <h2>South America</h2>
                    </div>
                </div>
            </div>
        </div> :
        <div>
            <HomeNavbar inputLength={inputLength} setInputLength={setInputLength} searchResults={searchResults} setSearchResults={setSearchResults}/>
            {searchResults.length > 0 && <div className="countries-container">{countries}</div>}
        </div>
    )      
}
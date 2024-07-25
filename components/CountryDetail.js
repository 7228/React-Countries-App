import React, { useContext } from "react";
import "./CountryDetail.css"
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import Navbar from "./Navbar";

export default function CountryDetail(props) {
    const { allCountries  } = useContext(AppContext);
    const { id } = useParams();
    
    console.log(id.toLowerCase())

    const result = allCountries.filter((country) => {
        return country.name.official.toLowerCase() === id.toLowerCase()
    })

    console.log(result)

    return (
        <div className="main-container">
            <div className="country-detail">
                <div className="basic-info">
                    <img src={result[0].flags.png} alt="country flag" className="flag"></img>
                    <h2 className="name">{result[0].name.official}</h2>
                </div>
                <div className="additional-info">
                    <div className="info-row">
                        <h3>Population</h3>
                        <h3 className="bold">{result[0].population}</h3>
                    </div>
                    <div className="info-row">
                        <h3>Region</h3>
                        <h3 className="bold">{result[0].region}</h3>
                    </div>
                    <div className="info-row">
                        <h3>Capital</h3>
                        <h3 className="bold">{result[0].capital}</h3>
                    </div>
                    <div className="info-row">
                        <h3>Landlocked</h3>
                        <h3 className="bold">{String(result[0].landlocked)}</h3>
                    </div>
                    <div className="info-row">
                        <h3>Independent</h3>
                        <h3 className="bold">{String(result[0].independent)}</h3>
                    </div>
                    <div className="info-row">
                        <h3>Subregion</h3>
                        <h3 className="bold">{result[0].subregion}</h3>
                    </div>
                    <div className="info-row">
                        <h3>UN Member</h3>
                        <h3 className="bold">{String(result[0].unMember)}</h3>
                    </div>
                </div>
            </div>
        </div>
    )

}
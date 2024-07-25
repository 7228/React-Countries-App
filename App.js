import React from "react";
import { useEffect } from "react";
import "./App.css";
import Continents from "./components/Continents";
import HomeNavbar from "./components/HomeNavbar";
import Navbar from "./components/Navbar";
import { createContext } from "react";
import { Route, Routes, Link, BrowserRouter, useLocation  } from "react-router-dom";
import Continent from "./components/Continent";
import CountryDetail from "./components/CountryDetail";
import Cart from "./components/Cart";

export const  AppContext  = createContext(); 

export default function App() {
    const [allCountries, setAllCountries] = React.useState("");
    const [inputLength, setInputLength] = React.useState(0);
    const [searchResults, setSearchResults] = React.useState("");
    const [cart, setCart] = React.useState([]);
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => {
                for(let i = 0; i < data.length; i++) {
                    let country = data[i]
                    country.addedToCart = false
                    country.selected = 0
                }
                setAllCountries(data)
    })
    },[])
    
    const location = useLocation();
    
    return (
        <div className="app">
            <AppContext.Provider value={{allCountries, setAllCountries, cart, setCart, searchResults, setSearchResults, inputLength, setInputLength}}>
                   {location.pathname === "/" ? <HomeNavbar /> : <Navbar />}
                    <Routes>
                        <Route path="/" element={<Continents/>}></Route>
                        <Route path="/continent/:id" element={<Continent/>}> </Route>
                        <Route path="/country/:id" element= {<CountryDetail/>}></Route>
                        <Route path="/cart" element={<Cart/>}></Route>
                    </Routes> 
            </AppContext.Provider>
        </div>
        
    )
}
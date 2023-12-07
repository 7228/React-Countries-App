import React from "react";
import { useEffect } from "react";
import "./App.css";
import Continents from "./components/Continents";
import HomeNavbar from "./components/HomeNavbar";
import { createContext } from "react";
import { Route, Routes, Link  } from "react-router-dom";
import Continent from "./components/Continent";
import CountryDetail from "./components/CountryDetail";
import Cart from "./components/Cart";

export const  AppContext  = createContext(); 

export default function App() {
    const [allCountries, setAllCountries] = React.useState("");
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
    console.log(allCountries)

    
    return (
        <div className="app">
            <AppContext.Provider value={{allCountries, setAllCountries, cart, setCart}}>
                <Routes>
                    <Route path="/" element={
                        <Continents 
                            allCountries = {allCountries} 
                        />}>
                    </Route>
                    <Route path="/continent/:id" element={
                        <Continent 
                            allCountries={allCountries} 
                        />}> 
                    </Route>
                    <Route path="/country/:id" element= {
                        <CountryDetail 
                            allCountries={allCountries}
                        />}>    
                    </Route>
                    <Route path="/cart" element={
                        <Cart 
                            allCountries={allCountries} 
                            cart={cart} 
                            setCart={setCart}
                        />}
                    ></Route>
                </Routes>
            </AppContext.Provider>
        </div>
        
    )
}
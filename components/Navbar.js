import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <div className="navbar-home">
            <div className="navbar-navigation">
                <Link to="/" className="link-tab"><div className="navbar-tab-home"><h3>Home</h3></div></Link>
                <div className="navbar-tab"><h3>About</h3></div>
            </div>
            <div className="cart">
                <Link to="/cart" className="link-tab"><div className="navbar-tab-cart"><h3 className="cart-heading">Cart</h3></div></Link>
            </div>
        </div>
    )
}


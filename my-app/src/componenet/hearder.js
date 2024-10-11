import React from "react";
import "./Header.css";
export const Header=()=>{
    return (
        <div className="header">
            <div className="navbar">
                <h1>Food Court</h1>
                <ul className="right-section">
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Book Resturant</li>
                    <li>Customer care Number</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
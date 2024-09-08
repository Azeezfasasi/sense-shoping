// import React from "react";
import React, { useState } from 'react';
import '../css/Mainheader.css';
import user from '../images/user.svg';
import search from '../images/search.svg';
import cart from '../images/cart.svg';
import favorite from '../images/favorite.svg';

function MainHeader() {
    // State to control the visibility of the cart panel
    const [isCartOpen, setCartOpen] = useState(false);

    // Function to toggle cart visibility
    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    // Function to add items to the cart (example)
    // const addItemToCart = (item) => {
    //     setCartItems([...cartItems, item]);
    // };

    const [isSearchOpen, setSearchOpen] = useState(false);

    // Function to toggle the search bar
    const toggleSearch = () => {
        setSearchOpen(!isSearchOpen);
    };

    return (
        <>
        <div className="navbar-light">
            <div className="navbar-brand">
                <div className="brand-name">BrandName</div>
            </div>
            <div className="navbar-wrapper">
                <div className="navbar-nav">
                    <div className="li">
                        <div className="a">
                            <a href="#" className="link">Home</a>
                        </div>
                    </div>
                    <div className="li2">
                        <div className="a2">
                            <a href="#" className="link">About</a>
                        </div>
                    </div>
                    <div className="li3">
                        <div className="a3">
                            <a href="#" className="link">Blog</a>
                        </div>
                    </div>
                    <div className="li4">
                        <div className="a4">
                            <a href="#" className="link">Contact</a>
                        </div>
                    </div>
                    <div className="li5">
                        <div className="a5">
                            <a href="#" className="link">Pages</a>
                    </div>
                </div>
                </div>
                <div className="navbar-nav2">
                    <div className="li6">
                        <div className="a6">
                            <div className="btn-32">
                                <img
                                className="icn-settings-icn-xs"
                                src={user}
                                />
                                <a href="" className="login-register">Login / Register</a>
                            </div>
                        </div>
                    </div>
                    <div className="li7">
                        <div className="a7">
                            <div className="btn-32 search-btn" onClick={toggleSearch}>
                                <img
                                className="icn-settings-icn-xs2"
                                src={search}
                                />
                            </div>

                            {/* Search Bar */}
                            <div className={`search-bar ${isSearchOpen ? 'open' : ''}`}>
                                <input 
                                    type="text" 
                                    className="search-input" 
                                    placeholder="Search products..." 
                                    autoFocus={isSearchOpen}
                                />
                                <button className="close-search-btn" onClick={toggleSearch}>
                                    &times;
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="li8">
                        <div className="a8">
                            <div className="btn-32 open-cart-btn" onClick={toggleCart}>
                                <img 
                                className="icn-settings-icn-xs3 cart-icon"
                                src={cart}
                                />
                                {/* {cartItems.length > 0 && (
                                    <div className="_1 cart-item-count">
                                        {cartItems.length}
                                    </div>
                                )} */}
                                <div className="_1">1</div>
                            </div>

                            {/* Cart Panel */}
                            <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
                                <div className="cart-header">
                                    <h2>Your Cart</h2>
                                    <button className="close-cart-btn" onClick={toggleCart}>
                                        &times;
                                    </button>
                                </div>
                                <div className="cart-body">
                                    {/* Add your cart items here */}
                                    <p>Your cart is empty!</p>
                                </div>
                            </div>

                            {/* Overlay to close the cart when clicking outside */}
                            {isCartOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
                        </div>
                    </div>
                    <div className="li8">
                        <div className="a8">
                            <div className="btn-32">
                                <img
                                className="icn-settings-icn-xs4"
                                src={favorite}
                                />
                                <div className="_1">1</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default MainHeader;


import React from "react";
import '../css/ShopCard.css';
import iphone from '../images/iphone.svg';
import watch from '../images/watch.svg';
import iphonebgcover from '../images/iphonebgcover.svg';

function ShopCard() {
    return (
        <>
        <div className="shop-card-wrapper">
            <div className="shop-card-container">
                <div className="shop-card-row">
                    <div className="shop-card-box">
                        <div className="shop-card-item">
                            <div className="left-card-content">
                                <div className="left-card-heading">Ends Today</div>
                                <div className="left-card-title">
                                Elements Of
                                <br />
                                Style
                                </div>
                                <div className="left-card-sub-title">
                                Top Ten Products of the
                                <br />
                                Week
                                </div>
                                <a href="" className="left-card-button">Explore Items</a>
                                <img
                                className="left-card-image"
                                src={watch}
                                />
                            </div>
                        </div>
                    </div>
                <div className="shop-card-box">
                    <div className="shop-card-item">
                        <div className="right-bg-cover">
                            <div className="right-bg-overlay"></div>
                        </div>
                        <div className="right-card-content">
                            <div className="right-card-heading">Your Space</div>
                            <div className="right-card-title">Unique Life</div>
                            <div className="right-card-sub-title">Top Ten Products of the Week</div>
                            <a href="" className="right-card-btn">Explore Items</a>
                        </div>
                        <img
                            className="printed-summer-dress-7-1"
                            src={iphone}
                        />
                    </div>
                </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default ShopCard;
import React from "react";
import '../css/Topheader.css';
import phone from '../images/phone.svg';
import mailbox from '../images/mailbox.svg';
import facebook from '../images/facebook.svg';
import youtube from '../images/youtube.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';

function Topheader() {
    return (
        <>
        <div className="top-bar-wrapper">
            <div className="collapse-navba">
                <div className="top-bar-container">
                <div className="top-bar-row">
                    <div className="top-bar-col-1">
                        <div className="top-contact-icon">
                            <img
                            className="phone-icon"
                            src={phone}
                            />
                            <div className="top-bar-label">(225) 555-0118</div>
                        </div>
                        <div className="top-contact-icon">
                            <img
                            className="email-icon"
                            src={mailbox}
                            />
                            <div className="top-bar-label">michelle.rivera@example.com</div>
                        </div>
                    </div>
                    <div className="follow-wrapper">
                        <div className="top-bar-label">Follow Us and get a chance to win 80% off</div>
                    </div>
                    <div className="follow-icon-wrapper">
                        <div className="top-bar-label">Follow Us :</div>
                            <div className="social-media-links">
                                <a href="#" className="instagram-link">
                                    <img
                                    className="instagram"
                                    src={instagram}
                                />
                                </a>
                                <a href="#" className="youtube-link">
                                    <img
                                    className="youtube"
                                    src={youtube}
                                />
                                </a>
                                <a href="#" className="facebook-link">
                                    <img
                                    className="facebook"
                                    src={facebook}
                                />
                                </a>
                                <a href="https://facebook.com" className="twitter-link">
                                    <img
                                    className="twitter"
                                    src={twitter}
                                />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Topheader;
import React from "react";
import '../css/Product.css';
import productsideimage from '../images/productsideimage.svg';
import productone from '../images/productone.svg';
import producttwo from '../images/producttwo.svg';
import star from '../images/star.svg';
import sales from '../images/sales.svg';

function Product() {
    return (
        <>
        <div className="desktop-product-cards-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img
                        className="unsplash-xlzl-hu-z-9-j-8"
                        src={productsideimage}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-52">
                            <div className="h-2-section-title">Featured Products</div>
                            <div className="h-2-section-title2">Featured Products</div>
                            <div className="paragraph">
                                Problems trying to resolve the conflict between
                                <br />
                                the two major realms of Classical physics:
                                <br />
                                Newtonian mechanics
                            </div>
                        </div>
                        <div className="frame-1">
                            <div className="col-md-3">
                                <div className="product-card">
                                    <div className="fixed-height">
                                        <img
                                        className="unsplash-tk-fsk-jy-8-pq-8"
                                        src={productone}
                                        />
                                        <div className="product-actions">
                                            <a href="" className="like">
                                                <i className="icn-favorite fa-regular fa-heart" />
                                            </a>
                                            <a href="" className="basket">
                                                <i className="icn-favorite2 fa-solid fa-cart-shopping" />
                                            </a>
                                            <a href="" className="like">
                                                <i className="icn-favorite3 fa-solid fa-eye" />
                                            </a>
                                        </div>
                                        <div className="tag">
                                            <div className="sale">Sale</div>
                                        </div>
                                    </div>
                                    <div className="frame-3">
                                        <div className="frame-2">
                                            <div className="frame-12">
                                                <div className="link-product-category">English</div>
                                            </div>
                                            <div className="frame-4">
                                                <img
                                                className="icon-emojione-star"
                                                src={star}
                                                />
                                                <div className="small">4.9</div>
                                            </div>
                                        </div>
                                    <div className="h-5-product-title">Graphic Design</div>
                                    <div className="paragraph-product-description">
                                    We focus on ergonomics
                                    <br />
                                    and meeting you....
                                    </div>
                                    <div className="sales">
                                        <img className="frame" src={sales} />
                                        <div className="h-6">15 Sales</div>
                                    </div>
                                    <div className="prices">
                                        <div className="h-5-price">$16.48</div>
                                        <div className="h-5-price2">$6.48</div>
                                    </div>
                                    <div className="product-colors">
                                        <div className="ellipse-14" />
                                        <div className="ellipse-15" />
                                        <div className="ellipse-16" />
                                        <div className="ellipse-17" />
                                    </div>
                                    <div className="frame-13">
                                        <div className="frame-14">
                                            <div className="icon-akar-icons-calendar">
                                                <img
                                                className="icon-cool-icon-1"
                                                src="icon-cool-icon-10.svg"
                                            />
                                            </div>
                                            <div className="small2">22hr..</div>
                                        </div>
                                        <div className="frame-14">
                                            <img
                                            className="icon-carbon-chart-area-smooth"
                                            src="icon-carbon-chart-area-smooth0.svg"
                                            />
                                            <div className="small2">64 Les...</div>
                                        </div>
                                        <div className="frame-14">
                                            <div className="icon-akar-icons-calendar">
                                                <img
                                                    className="icon-cool-icon-12"
                                                    src="icon-cool-icon-11.svg"
                                                />
                                            </div>
                                            <div className="small2">Pro...</div>
                                        </div>
                                    </div>
                                    <div className="button-sm">
                                        <div className="h-62">Learn More</div>
                                        <img
                                            className="icn-arrow-right-icn-xs"
                                            src="icn-arrow-right-icn-xs0.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-32">
                            <div className="product-card">
                                <div className="fixed-height">
                                    <img
                                    className="unsplash-5-mg-8-c-qbw-t-8"
                                    src={producttwo}
                                    />
                                    <div className="product-actions">
                                        <a href="" className="like">
                                            <i class="icn-favorite4 fa-regular fa-heart" />
                                        </a>
                                        <a href="" className="basket">
                                            <i class="icn-favorite5 fa-solid fa-cart-shopping" />
                                        </a>
                                        <a href="" className="like">
                                            <i class="icn-favorite6 fa-solid fa-eye" />
                                        </a>
                                    </div>
                                    <div className="tag">
                                        <div className="sale">Sale</div>
                                    </div>
                                </div>
                                <div className="frame-3">
                                    <div className="frame-2">
                                        <div className="frame-12">
                                            <div className="link-product-category">English</div>
                                        </div>
                                        <div className="frame-4">
                                            <img
                                            className="icon-emojione-star2"
                                            src={star}
                                            />
                                            <div className="small">4.9</div>
                                        </div>
                                    </div>
                                    <div className="h-5-product-title">Graphic Design</div>
                                    <div className="paragraph-product-description">
                                    We focus on ergonomics
                                    <br />
                                    and meeting you....
                                    </div>
                                    <div className="sales">
                                        <img className="frame2" src="frame1.svg" />
                                        <div className="h-6">15 Sales</div>
                                    </div>
                                    <div className="prices">
                                        <div className="h-5-price">$16.48</div>
                                        <div className="h-5-price2">$6.48</div>
                                    </div>
                                    <div className="product-colors">
                                        <div className="ellipse-14" />
                                        <div className="ellipse-15" />
                                        <div className="ellipse-16" />
                                        <div className="ellipse-17" />
                                    </div>
                                    <div className="frame-13">
                                    <div className="frame-14">
                                        <div className="icon-akar-icons-calendar">
                                            <img
                                                className="icon-cool-icon-13"
                                                src="icon-cool-icon-12.svg"
                                            />
                                        </div>
                                        <div className="small2">22hr..</div>
                                    </div>
                                    <div className="frame-14">
                                        <img
                                        className="icon-carbon-chart-area-smooth2"
                                        src="icon-carbon-chart-area-smooth1.svg"
                                        />
                                        <div className="small2">64 Les...</div>
                                    </div>
                                    <div className="frame-14">
                                        <div className="icon-akar-icons-calendar">
                                            <img
                                                className="icon-cool-icon-14"
                                                src="icon-cool-icon-13.svg"
                                            />
                                        </div>
                                        <div className="small2">Pro...</div>
                                    </div>
                                </div>
                                <div className="button-sm">
                                    <div className="h-62">Learn More</div>
                                    <img
                                        className="icn-arrow-right-icn-xs2"
                                        src="icn-arrow-right-icn-xs1.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Product;
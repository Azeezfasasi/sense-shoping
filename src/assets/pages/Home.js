import React from "react";
import { Helmet } from "react-helmet";
import Topheader from "../components/TopHeader";
import MainHeader from "../components/MainHeader";
import Hero from "../components/Hero";
import ShopCard from "../components/ShopCard";
import Product from "../components/Product";

function Home() {
    return (
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Topheader />
        <MainHeader />
        <Hero />
        <ShopCard />
        <Product />
        </>
    )
}

export default Home;
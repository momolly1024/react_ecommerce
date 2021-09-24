import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newslettter from "../components/Newslettter";
import Products from "../components/Projucts";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories/>
            <Products/>
            <Newslettter/>
            <Footer/>
        </div>
    );
};

export default Home;

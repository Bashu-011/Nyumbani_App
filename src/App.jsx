import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import HouseDetails from "./HouseDetails";
import Listings from "./Listings";
import Mortgage from "./Mortgage";
import { BrowserRouter, Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <Home />
            <HouseDetails />
            <Listings />
            <Mortgage />
            <Footer />
        </div>
    );
}

export default App;

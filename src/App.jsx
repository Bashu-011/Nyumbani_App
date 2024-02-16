import React from "react";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import HouseDetailComponent from "./HouseDetails";
import Listings from "./Listings";
import Mortgage from "./Mortgage";
//import { BrowserRouter, Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
             <BrowserRouter>
             <Routes>
             <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} /> 
            <Route path= "/property/:id" element={<HouseDetailComponent />}/>
            <Route path="/mortgage" element={<Mortgage />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
             </Routes>
            </BrowserRouter>
             <Footer /> 
        </div>
      
    );
}

export default App;

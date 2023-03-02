import React from "react";

import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

import "./css/all.min.css"
import "./style.css";


function App() {
    return (
        <div className="card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App;

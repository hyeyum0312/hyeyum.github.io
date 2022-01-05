import './App.css';
import './component/layout/layout.css';
import React from "react";

//layout
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
//Pages
import Intro from './component/pages/Intro'
import MainProductList from './component/pages/MainProductList'

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className="bodyContainer">
                <Intro></Intro>
                <MainProductList></MainProductList>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;

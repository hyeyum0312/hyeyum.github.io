import './App.css';
import './component/layout/layout.css';
import React from "react";

//layout
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
//Pages
import Intro from './component/pages/Intro'
import MainProductList from './component/pages/MainProductList'
import DashBoard from './component/pages/DashBoard'
import { Link, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className="bodyContainer">
                <Route path="/intro">
                    <Intro></Intro>
                </Route>
                <Route path="/" exact>
                    <DashBoard></DashBoard>
                </Route>
                <Route path="/mainProductList">
                    <MainProductList></MainProductList>
                </Route>
            </div>
            {/*<Footer></Footer>*/}
        </div>
    );
}

export default App;

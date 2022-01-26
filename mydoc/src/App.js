import './App.css';
import './component/layout/layout.css';
import React from "react";

//layout
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'

//Pages
import Intro from './component/pages/Intro/index'
import MainProductList from './component/pages/MainProductList/index'
import DashBoard from './component/pages/DashBoard/index'
// import ProductRegistration from './component/pages/ProductRegistration/index'
import { Link, Route, Switch } from 'react-router-dom';

//css
import './component/pages/DashBoard/style.css'
import './component/pages/MainProductList/style.css'
import './component/pages/Intro/style.css'
import './component/pages/ProductRegistration/style.css'


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
                <Route path="/ProductRegistration">
                    {/*<ProductRegistration></ProductRegistration>*/}
                </Route>
            </div>
            {/*<Footer></Footer>*/}
        </div>
    );
}

export default App;

import React from "react";
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers'
import {Article, Brands, Navbar, CTA, Feature} from './components'
import './App.css'
export default function App() {
    return (
        <div className="App">
            <div className="gradient_bg">
            <Navbar />
            <Header />
            </div>
            <Article />
            <Brands />
            <CTA />
            <Feature />
            <Blog />
            <Features />
            <Footer />
            <Possibility />
            <WhatGPT3 />
        </div>
    )
}
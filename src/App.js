import React, {useState} from 'react'
import Navbar from './components/layout/Navbar'
import Navbar2 from './components/layout/Navbar2'
import Joke from "./components/Joke";
import Joke2 from "./components/Joke2";
import About2 from "./components/pages/About2";
import About from "./components/pages/About";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={Navbar}/>
                <Route exact path="/about" component={Navbar}/>
                <Route exact path="/classSide" component={Navbar2}/>
                <Route exact path="/about2" component={Navbar2}/>

                <div className="container mx-auto">
                    <Route exact path="/" component={Joke}/>
                    <Route exact path="/classSide" component={Joke2}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/about2" component={About2}/>

                </div>
            </div>
        </Router>

    )
}

export default App;

import React from 'react'
import Navbar from './components/layout/Navbar'
import Joke from "./components/Joke";
import About from "./components/pages/About";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="container mx-auto">
                    <Route exact path="/" component={Joke} />
                    <Route exact path="/about" component={About} />
                </div>
            </div>
        </Router>
    )
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/dialogs' component={Dialogs}/>
                    <Route exact path='/profile' component={Profile}/>
                </div>
            </div>
        </Router>
    )
};

export default App;

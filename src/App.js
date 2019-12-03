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
                    <Route exact path='/dialogs' render={
                        ()=><Dialogs dialogs={props.appState.dialogs} messages={props.appState.messages}/>
                    }/>
                    <Route exact path='/profile' render={()=><Profile posts={props.appState.posts}/>} />
                </div>
            </div>
        </Router>
    )
};

export default App;

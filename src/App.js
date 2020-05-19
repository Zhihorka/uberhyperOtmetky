import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddProjectLayout from './components/AddProjectLayout/AddProjectLayout';
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Route render = {() => <Header userName = {props.userName}/>}/>
                <Route render = {() => <AddProjectLayout/>}/>
            </div>
        </BrowserRouter>)
}

export default App;
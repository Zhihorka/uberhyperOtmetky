import React from 'react';
import style from './AddProjectLayout.module.css';
import SubHeader from '../SubHeader/SubHeader';
import AddImage from '../AddImage/AddImage';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';
import {NavLink, BrowserRouter, Route} from "react-router-dom";

const AddProjectLayout = () => {
    return (
        <BrowserRouter>
            <div className = {style.wrapper}>
                <SubHeader/>
                <CreateProjectForm/>
                <AddImage/>
                <NavLink to = ''>Добавить</NavLink>
            </div>
        </BrowserRouter>
    )
}

export default AddProjectLayout;
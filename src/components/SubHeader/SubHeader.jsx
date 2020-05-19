import React from 'react';
import style from './SubHeader.module.css';
import {NavLink} from "react-router-dom";

const SubHeader = () => {
    return (
            <div className = {style.subHeader}>
                <img src = 'https://cdn1.iconfinder.com/data/icons/color-bold-style/21/04-512.png'/>
                <div className = 'subHeaderText'>
                    <h1>Новый проект</h1>
                    <h2>ул. Гагарина, Орехово-Зуево, Россия</h2>
                </div>
            </div>
    )
}

export default SubHeader;
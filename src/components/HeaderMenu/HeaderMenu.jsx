import React from 'react';
import style from './HeaderMenu.module.css';

const HeaderMenu = (props) => {
    return (
    <div className={style.headerMenu}>
        <img src ='https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/06-512.png'/>
        <p>Новый проект</p>
        <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/480px-Emoji_u1f44b.svg.png'/>
         <p>Привет, {props.userName}</p>
    </div>
    )
}

export default HeaderMenu;
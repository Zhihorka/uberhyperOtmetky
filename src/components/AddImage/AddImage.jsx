import React from 'react';
import style from './AddImage.module.css';
import {NavLink} from "react-router-dom";

const AddImage = () => {
    return (
  
            <div className = {style.addImage}>
                <div className = {style.imageMiniatures}>
                    <img src = 'https://www.pngkey.com/png/full/291-2912837_album-comments-album-icon-png.png'/>
                    <img src = 'https://www.pngkey.com/png/full/291-2912837_album-comments-album-icon-png.png'/>
                    <div className = {style.addImageButton}>
                    <img src = 'https://static.thenounproject.com/png/187803-200.png'/>
                    <p>Загрузить <br />
                    изображение</p>
                    </div>
                </div>
            </div>
    )
}

export default AddImage;
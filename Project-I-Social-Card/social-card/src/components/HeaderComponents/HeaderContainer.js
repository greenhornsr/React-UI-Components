import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer(){
    return (
        <section className='HeaderContainer'>
            <ImageThumbnail />
            <HeaderContent />
        </section>
    )
}

export default HeaderContainer;
import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

function HeaderContent(){
    return (
        <section className="HeaderContent">
            <HeaderTitle />
            <p>Let's Learn React by building interfaces with Components.  Don't try to overthink it, just keep it simple and have fun.  Once you feel comfortable using components you are well on your way to mastering React!</p>
        </section>
    )
}




export default HeaderContent;

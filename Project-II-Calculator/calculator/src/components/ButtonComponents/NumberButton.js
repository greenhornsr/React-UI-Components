import React from 'react';
import './Button.scss';

const NumberButton = props => {
    return (
        // <section className="buttonContainer">
            <section className="numberButtons">
                <button className='numButs'>{props.banana}</button>
            </section>
        // </section>
    )
}



export default NumberButton
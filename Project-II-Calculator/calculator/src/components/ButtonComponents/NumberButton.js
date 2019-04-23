import React from 'react';
import './Button.scss';

const NumberButton = props => {
    return (
        <section className="numberButtons">
            <section className='rows r2'>
                <button className='rows cz'>{props.banana}</button>
            </section>
        </section>
    )
}



export default NumberButton
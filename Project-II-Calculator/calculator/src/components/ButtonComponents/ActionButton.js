import React from 'react';
import './Button.scss';

const ActionButton = props => {
    return (
        <section className="actionButtons">
            <section className='rows r3'>
                <button className='aButton cz'>{props.banana}</button>
            </section>
        </section>

    )
}

export default ActionButton
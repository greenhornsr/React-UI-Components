import React from 'react';
import './Button.scss';

const ActionButton = props => {
    return (
        // <section className="buttonContainer">
            <section className="actionButtons">
                <button className='aButton cz'>{props.banana}</button>
            </section>
        // </section>

    )
}

export default ActionButton
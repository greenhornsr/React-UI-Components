import React from 'react';
import './Display.scss';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const calcTexts = [
["clear", "/"],
[7,8,9,"X",],
[4,5,6,"-"],
[1,2,3,"+"],
[0,"="],
];


const CalculatorDisplay = () => {
    return (
        <section className="calcDisplay">
            <section className='rows r1'><h1>0</h1></section>
                <section>
                    {calcTexts.map(array => 
                        array.map(text =>{
                            return (
                            (text === "clear" || text === 0) ? <ActionButton banana = {text}/>:
                            <NumberButton banana = {text} />
                            )
                        })
                    )}
                </section>
        </section>
    )
}


export default CalculatorDisplay
import React from 'react';
import './Header.css';
import * as moment from 'moment';

function HeaderTitle(){
    // Retrieves Month and Day only
    // let datentime = moment().format('MMMM Do');

    // Retrieves Month, Day Time
    // let datentime = moment().format('MMMM Do YYYY, h:mm:ss a');

    // Retrieves WeekDay, Month, Day, Time 
    let datentime = moment().format('LLLL');
    console.log(datentime);
    return (
        <section className="HeaderTitle">
            {/* <h1>Lambda School<a href="mailto: lambda@LambdaSchool.com"> @LambdaSchool</a><time dateTime="2019-01-26"> - 26 Jan</time></h1>  */}
            <h1>Lambda School<a href="mailto: lambda@LambdaSchool.com">   @LambdaSchool</a><time dateTime="2019-01-26">   {datentime}</time></h1> 
        </section>
    )
}



export default HeaderTitle;
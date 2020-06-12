import React, { useState, useEffect } from 'react';

function Time(props) {
    let geth = (value) => {
        let result = parseInt(value);
        let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
        return `${h}`;
    }
    let getm = (value) => {
        let result = parseInt(value);
        let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
        return `${m}`;
    }
    let gets = (value) => {
        let result = parseInt(value);
        let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
        return `${s}`;
    }
    return ( 
        <div className="Time">
            <div className="time">
                <span className="item">{geth(props.time)}</span>
                <span className="item">:</span>
                <span className="item">{getm(props.time)}</span>
                <span className="item">:</span>
                <span className="item">{gets(props.time)}</span>
            </div>
        <button className="close" onClick = { props.stop } >x</button>
        </div>
    );
}

export default Time;
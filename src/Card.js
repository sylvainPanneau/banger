import React, { useState, useEffect } from 'react';
import Messages_app from './Messages_app';

export default function Card({ mode }) {

    // render card or message app depending on the mode.
    // the mode changes when the user clicks on the message app.

    mode === 'card' ? rightToLeft("match-unit") : leftToRight("card-body");

    function rightToLeft(className){
        setTimeout(() => {
            document.getElementsByClassName(className)[0].style.transition = "left 0.5s";
            document.getElementsByClassName(className)[0].style.left = "0";
            document.getElementsByClassName("card-body")[0].style.transition = "left 0.5s";
            document.getElementsByClassName("card-body")[0].style.left = "-100%";
        }, 1);
    }
    function leftToRight(className){
        setTimeout(() => {
            document.getElementsByClassName(className)[0].style.transition = "left 0.5s";
            document.getElementsByClassName(className)[0].style.left = "0";
            document.getElementsByClassName("match-unit")[0].style.transition = "left 0.5s";
            document.getElementsByClassName("match-unit")[0].style.left = "100%";
        }, 1);
    }

    return <div className="card">
        <div className="card-body">
            <img src={require('./images/prunot.jpeg')} alt="image" className="card-picture" />
            <div className="card-header">
                <h3 className="card-title">Prunot</h3>
                <h3 className="card-age">39</h3>
            </div>
            <div className="card-footer">
                <p className="card-description">
                    Un bon gros fils de pute comme on les aime.
                    Tu veux tamtam ?
                </p>
            </div>
        </div>
        <Messages_app className="messages-app"/>
    </div>;
}

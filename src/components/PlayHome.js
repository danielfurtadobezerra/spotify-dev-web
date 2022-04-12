import React from "react";
import './PlayHome.css';
import { useState } from "react";



export default function PlayHome() {
        return (
            <>
                <div>
                    <div className="circle" />
                    <div className="circle2" />
                    <div className="container">
                        <div className="img-container tilt">
                            <img className="tilt" id="photo" alt="album cover" src="img/POTC.jpg" />
                        </div>
                        <audio src="music/jacinto-1.mp3" />
                        <h2 id=" title ">titulo</h2>
                        <h3 id=" artist ">artista</h3>
                        <div className="progress-container" id="progress-container">
                            <div className="progress" id="progress" />
                            <div className="duration-wrapper">
                                <span id="current-time">0:00</span>
                                <span id="duration">2:06</span>
                            </div>
                            <div className="player-controls">
                                <i className="fas fa-backward" id="prev" title="Previous" />
                                <i className="fas fa-play main-button" id="play" title="Play" />
                                <i className="fas fa-forward" id="next" title="Next" />
                            </div>
                        </div>
                    </div>
                </div>

            </>

        );
    }
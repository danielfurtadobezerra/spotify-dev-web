import React from "react";
import { Link } from "react-router-dom";
import './PlayHome.css';
import playlists from "./playlists";




export default function PlayHome() {
    const playlistsFormatada = playlists.map (
        (play) =>{
            return (
                <Link to={`/playlists/${play.id}`}>
                    <div className="card" stayle={{width:'200px'}}>
                        <img className="card-img-top" src={play.id} alt="Card image"/>
                            <div className="card-body">
                                <h4 className="card-title">{play.capa}</h4>

                            </div>


                    </div>

                </Link>

            )
        }
    );

    return (
        <div className='container'>{playlistsFormatada}</div>
    )
}
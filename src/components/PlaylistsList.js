import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './playlistsList.css';






export default function PlaylistsList() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const playlists = axios.get("http://localhost:3001/playlists")
        .then(
            (res) => {
                    setPlaylists(res.data)
            }
        )
        
    }, [])
   

    

    const playlistsFormatada = playlists.map (
        (play) =>{
            return (
                <Link to={`/playlists/${play.id}`}>
                    <div className="card" stayle={{width:'200px'}}>
                        <img className="card-img-top" src={play.capa} alt="Card image"/>
                            <div className="card-body">
                                <h4 className="card-title">{play.arquivo}</h4>

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
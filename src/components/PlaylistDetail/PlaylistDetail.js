import { useParams } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function PlaylistDetail(){
    const {id} = useParams();

    const [playlistSelecionada, setPlaylistSelecionada] = useState([]);

    axios.get(`http://localhost:3001/playlists/${id}`)
    .then(
        (res) => {
                setPlaylistSelecionada(res.data)
                
        }
    )
      

    const musicas = playlistSelecionada.musicas.map(
        (musica) => {
            return(
                <>
                    <h4>{musica.nome}</h4>
                    <audio controls>
                        <source src = {musica.arquivo}/>
                    </audio>
                </>
            )
        }
    )

    return (
        <>
            <div className="card" stayle={{width:'200px'}}>
                <img className="card-img-top" src={playlistSelecionada.capa} alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title">{playlistSelecionada.nome}</h4>

                </div>


            </div>
        </>
    )
}

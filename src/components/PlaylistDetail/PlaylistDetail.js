import { useParams } from "react-router-dom";
import playlists from "../playlists";
import React from "react";

export default function PlaylistDetaiL(){
    const {id} = useParams();

    const playlistSelecionada = playlists.find((play)=> play.id == id);

    const musicas = playlistSelecionada.musicas.map(
        (musica) => {
            return(
                <>
                    <h4>{musica.nome}</h4>
                    <audio controls>
                        <source src = {musica.arquivo} type=""/>
                    </audio>
                </>
            )
        }
    );

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

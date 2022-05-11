import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import './playlistsList.css';
import './Home.css';



export default function PlaylistDetail(){

    const { id } = useParams();

    const [playlistSelecionada, setPlaylistSelecionada] = useState({musicas:[]});

    axios.get(`http://localhost:3001/playlists/${id}`)
    .then(
        (res) => {
                setPlaylistSelecionada(res.data)
        }
    )

    async function deletar(posVetorMusicas) {

        const resPlayList = await axios.get(`http://localhost:3001/playlists/${id}`);

        let playlist = resPlayList.data;//.musicas;

        playlist.musicas.splice(posVetorMusicas, 1);

        await axios.put(`http://localhost:3001/playlists/${id}`, playlist);
    }
      

    const musicas = (playlistSelecionada && playlistSelecionada.musicas.map(
        (musica) => {
            return(
                <div className="card">
                    <h4>{musica.nome}</h4>
                    <audio className="audio" controls>
                        <source src = {musica.arquivo}/>
                    </audio>
                    <button className="btn-primary" onClick={deletar} >Deletar música</button>
                    <br/>
                </div>
            )
        }
    ));

    return (
        <>
            <div className="card" stayle={{width:'200px'}}>
                <img className="card-img-top" src={playlistSelecionada.capa} alt="Card image"/>
                <br/><br/><br/><br/>
                <br/><br/>
                    <div className="card-body">
                         <h4 className="card-title">{playlistSelecionada.nome}</h4>
                    </div>
                    <button  className="btn-primary">
                        <Link to={`/cadMus/${playlistSelecionada.id}`}>Adicionar músicas</Link>
                    </button>
           </div>
           {musicas}
        </>
    )

}

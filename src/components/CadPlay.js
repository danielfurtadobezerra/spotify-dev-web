import { useState } from 'react';
import './Form.css';
import React from 'react';
import axios from 'axios';



function CadPlay() {

    const [capa, setCapa] = useState("")
    const [artista, setArtista] = useState("")
    const [nome, setNome] = useState("")
    const [musicas, setMusicas] = useState([])
    //const [data, setData] = useState("")
    //const [users, setUsers] = useState("")


    function handleSubmit(e) {
        e.preventDefault();

        const playlists = {capa, artista, nome, musicas}

        axios.post("http://localhost:3001/playlists", playlists)
            .then((res) => {
                console.log(res.data);
            })


    }


    return (
        <>

            <div id="showcase">
                <div className="showcase-container">
                    <form onSubmit={(e) => handleSubmit(e)} style={{ margin: '60px 20px 20px 130px' }}>

                        <fieldset style={{ fontSize: 'larger' }}>
                            <fieldset className="grupo" style={{ border: '0ch' }}>
                                <div className="campo">
                                    <label htmlFor="artista">Artista</label>
                                    <input type="text" id="artista" onChange={(e) => setArtista(e.target.value)} name="capa" style={{ width: '10em' }} />
                                </div>
                                <div className="campo">
                                    <label htmlFor="nome">Nome</label>
                                    <input type="text" id="nome" onChange={(e) => setNome(e.target.value)} name="capa" style={{ width: '10em' }} />
                                </div>
                            </fieldset>
                            <div className="submit">
                                <button type="submit" style={{ fontSize: 'large' }} onClick={(e) => setCapa("/img/brazil.png")} name="submit">Criar</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CadPlay;
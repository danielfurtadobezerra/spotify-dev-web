import React from 'react';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import './Form.css';
import axios from 'axios';


function CadMus() {

    const { id } = useParams();

    const [nome, setNome] = useState("")
    const [arquivo, setArquivo] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const musica = { nome, arquivo }

        const resPlayList = await axios.get(`http://localhost:3001/playlists/${id}`);

        let musicas = resPlayList.data.musicas;

        await axios.patch(`http://localhost:3001/playlists/${id}`, {
            musicas: [...musicas, musica]
        });
    }

    return (
        <>
            <div id="showcase">
                <div className="showcase-container">
                    <form onSubmit={(e) => handleSubmit(e)} style={{ margin: '60px 20px 20px 130px' }}>

                        <fieldset style={{ fontSize: 'larger' }}>
                            <fieldset className="grupo" style={{ border: '0ch' }}>
                                <div className="campo">
                                    <label htmlFor="arquivo">Música</label>
                                    <input type="text" id="arquivo" onChange={(e) => setArquivo(e.target.value)} name="arquivo" style={{ width: '10em' }} />
                                </div>
                                <div className="campo">
                                    <label htmlFor="nome">Nome</label>
                                    <input type="text" id="nome" onChange={(e) => setNome(e.target.value)} name="nome" style={{ width: '10em' }} />
                                </div>
                            </fieldset>
                            <div className="submit">
                                <button type="submit" style={{ fontSize: 'large' }} name="submit">Adicionar</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CadMus;
import React from 'react';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import './Form.css';
import axios from 'axios';


function CadMus() {

    const { id } = useParams();

    const [nome, setNome] = useState("")
    const [arquivo, setArquivo] = useState("");

    const [busca, setBusca] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();

        const musica = { nome, arquivo }

        const resPlayList = await axios.get(`http://localhost:3001/playlists/${id}`);

        let musicas = resPlayList.data.musicas;

        await axios.patch(`http://localhost:3001/playlists/${id}`, {
            musicas: [...musicas, musica]
        });
    }

    const musicas = [
        'Anirudh.mp3',
        'ArRahuman.mp3',
        'Believer.mp3',
        'Jack Sparrow.mp3',
        'joker.mp3',
        'scam1992.mp3',
      ];
    
        
    
      
      
        const musicasFiltradas = musicas.filter( //Filter: filtra as musicas digitadas na busca.
          (musica)=> musica.includes(busca));

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
            <div className="musicas">
        <h1> Busque suas músicas</h1>
        <input type="text"
        value={busca}
        onChange={(e)=> setBusca(e.target.value)}/> 
          <ul>
            {musicasFiltradas.map((musica)=>(
              <li key={musica}>{musica}</li>
            ))}
          </ul>
      </div>
        </>
    );
}

export default CadMus;
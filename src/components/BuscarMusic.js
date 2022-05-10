import React from 'react';
import { useState } from 'react';
import './BuscarMusic.css';

const musicas = [
    'Anirudh.mp3',
    'ArRahuman.mp3',
    'Believer.mp3',
    'Jack Sparrow.mp3',
    'joker.mp3',
    'scam1992.mp3',
  ];

  export default function BuscarMusic(){
    const [busca, setBusca] = useState([]);

  
  
    const musicasFiltradas = musicas.filter( //Filter: filtra as musicas digitadas na busca.
      (musica)=> musica.includes(busca));
  
  
  
    return (
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
    )
  

  }
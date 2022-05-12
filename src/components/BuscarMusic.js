import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './BuscarMusic.css';


export default function BuscarMusic() {
  const [busca, setBusca] = useState([]);
  const [musicasBusca, setMusicasBusca] = useState([]);

  async function handleSubmit() {

    const m = await axios.get(`http://localhost:3001/musicas?nome=${busca}`);
    setMusicasBusca(m)
  }

  return (
    <div className="musicas">
      <h1> Busque suas músicas</h1>
      <input type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)} />
      <ul>
        {musicasBusca.map((musica) => (
          <li key={musica}>{musica}</li>
        ))}
      </ul>
    </div>
  )


}
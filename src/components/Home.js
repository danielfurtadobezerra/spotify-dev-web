// Daniel
import { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import playlists from './playlists';


function Home(){

/*  const [play, setPlay] = useState()

  const playlistsFormatada = playlists.map((play)  => {
    return(
          <link to={`/playlist/${play.id}`}>
          <div className="card">
          <div className="card-body">
          <h4 className="card-title">{play.nome}</h4>
          <p className="card-text">Some example text. Some example text.</p>
  </div>
</div>
</link>

    )
  }
  );*/

    const [playlists, setPlaylists] = useState([])

    return(
        <>

          <div id="showcase">
            <div className="showcase-container">
              
              <h2>Música para todos.</h2>
              <p>
                Milhões de músicas à sua escolha. E nem precisa de cartão de crédito.
              </p>
              <button className="btn-primary" onChange={(e)=> playlists(e.target.value)}><Link to="/play">Acesse todas as Playlists</Link></button>
            </div>
          </div> 
        </>
    );
}

export default Home;
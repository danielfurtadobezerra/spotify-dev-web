// Jamile
import { Link } from 'react-router-dom';
import './Cabecalho.css';
import React from 'react';

function Cabecalho(){
    return (
        <>
<nav id="navbar">
			<div className="navbar-container">
				<img src="img/logo.png" alt="" className="logo" />
				<ul className="navbar-items">
					<li className="navbar-item"><Link to="/">Home</Link></li>
					<li className="navbar-item"><Link to="/faq">Faq</Link></li>
					<li className="navbar-item"><Link to="/">Baixar</Link></li>
					<li className="navbar-item"><Link to="/Login">Inscrever</Link></li>
					<li className="navbar-item"><Link to="/playlists">PlayLists</Link></li>
					<li className="navbar-item"><Link to="/cadBmusic/:id">Buscar</Link></li>
				</ul>
			</div>
		</nav>
        </>
    );
}

export default Cabecalho;

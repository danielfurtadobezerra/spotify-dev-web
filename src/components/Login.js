import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router';
import React from 'react';
import dbjson from '../data/db.json';
import { Link } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({ dadosInvalidos: '' });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios.get(`http://localhost:3001/usuarios?email=${email}`)
      .then((res) => {
        const usuario = res.data[0];
        if (usuario.senha !== senha) {
          setErros({ dadosInvalidos: 'Dados Inválidos!!!' });
          return
        }
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

        navigate('/playlists')
      })


    // function handleSubmit(e){
    //  e.preventDefault();

    //  let _usuario = dbjson.usuarios.find(usuario => usuario.email == email);      
    // if (_usuario.senha !== senha ) {
    //    setErros ({dadosInvalidos: 'Dados Inválidos!!!'});
    //    setEmail (email);
    //   return
    // }

    //  localStorage.setItem('usuarioLogado', JSON.stringify(_usuario));
    //  navigate('/playlists')
    //   }   


    return (
      <>

        {erros.dadosInvalidos && (<div class="alert alert-danger">
          {erros.dadosInvalidos}
        </div>)}

        <div id="showcase">
          <div className="showcase-container">
            <form onSubmit={(e) => handleSubmit(e)} action="/action_page.php">
              <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" name="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Password:</label>
                <input type="password" className="form-control" id="pwd" onChange={(e) => setSenha(e.target.value)} placeholder="Enter password" name="pswd" />
              </div>
              <div className="form-check mb-3">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                </label>
                <br></br>
                <Link to="/cad">Cadastre-se</Link>
              </div>
              <div className="submit">
                <button className="btn-primary">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;

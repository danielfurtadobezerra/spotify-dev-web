import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router';
import React from 'react';
import dbjson from '../data/db.json'

export default function Login2() {

    const [email, setEmail] = useState ('');
    const [senha, setSenha] = useState ('');
    const [erros, setErros] = useState ({dadosInvalidos: ''});
    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault();
        
        let _usuario = dbjson.usuarios.find(usuario => usuario.email == email);      
        if (_usuario.senha !== senha ) {
            setErros ({dadosInvalidos: 'Dados Inválidos!!!'});
            setEmail (email);
            return
        }
       
        localStorage.setItem('usuarioLogado', JSON.stringify(_usuario));
       navigate('/')
       }     
     
      return  (
          <>
         
          <div class = "alert alert-danger" hidden={(erros.dadosInvalidos == "")}>Dados Inválidos{erros.email} </div>
          
            
          <div id="showcase">
            <div className="showcase-container">
              <form onSubmit={(e)=> handleSubmit(e)} action="/action_page.php" method="post" style={{margin: '60px 20px 20px 130px'}}>
              
                <fieldset style={{fontSize: 'larger'}}>
                  <fieldset className="grupo" style={{border: '0ch'}}>
                   <div className="campo">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" onChange={(e)=> setEmail(e.target.value)} name="email" style={{width: '20em'}} defaultValue />
                  </div>
                  <div className="campo">
                    <label htmlFor="email">Senha</label>
                    <input type="password" id="senha" onChange={(e)=> setSenha(e.target.value)} name="senha" style={{width: '20em'}} defaultValue />
                  </div>
                    <div className="submit">
                    <button  className="btn-primary">Entrar</button>
                    </div>
                      </fieldset>
                      </fieldset>
                  </form>
              </div>
          </div>
          </>
          )
      }
    
    

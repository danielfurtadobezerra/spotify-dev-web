import { useState } from 'react';
import './Form.css';
import usuariosMock from './usuariosMock'


function Form(){

const [nome, setNome] = useState("")
const [snome, setSnome] = useState("")
const [email, setEmail] = useState("")
const [telefone, setTelefone] = useState("")
const [senha, setSenha] = useState("")
const [sexom, setSexom] = useState("")
const [sexof, setSexof] = useState("")
const [cidade, setCidade] = useState("")
const [estado, setEstado] = useState("")

function handleSubmit(e){
  e.preventDefault();

  const usuario = {nome, snome, senha, email, telefone, sexom, sexof, cidade, estado}

  usuariosMock.push(usuario);

  console.log(usuariosMock)
}

//const usuario = {senha, email}

return(
    <>

    <div id="showcase">
      <div className="showcase-container">
        <form onSubmit={(e)=> handleSubmit(e)} action="/action_page.php" method="post" style={{margin: '60px 20px 20px 130px'}}>
        
          <fieldset style={{fontSize: 'larger'}}>
            <fieldset className="grupo" style={{border: '0ch'}}>
              <div className="campo">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" onChange={(e)=> setNome(e.target.value)}  name="nome" style={{width: '10em'}} defaultValue />
              </div>
              <div className="campo">
                <label htmlFor="snome">Sobrenome</label>
                <input type="text" id="snome" onChange={(e)=> setSnome(e.target.value)}  name="snome" style={{width: '10em'}} defaultValue />
              </div>
            </fieldset>
            <div className="campo">
              <label>Sexo</label>
              <label>
                <input type="radio" name="sexo" id="sexom" onChange={(e)=> setSexom(e.target.value)} defaultValue="masculino" /> Masculino
              </label>
              <label>
                <input type="radio" name="sexo" id="sexof" onChange={(e)=> setSexof(e.target.value)} defaultValue="feminino" /> Feminino
              </label>
            </div>
            <div className="campo">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" onChange={(e)=> setEmail(e.target.value)} name="email" style={{width: '20em'}} defaultValue />
            </div>
            <div className="campo">
              <label htmlFor="email">Senha</label>
              <input type="password" id="senha" onChange={(e)=> setSenha(e.target.value)} name="senha" style={{width: '20em'}} defaultValue />
            </div>
            <div className="campo">
              <label htmlFor="telefone">Telefone</label>
              <input type="text" id="telefone" onChange={(e)=> setTelefone(e.target.value)} name="telefone" style={{width: '10em'}} defaultValue />
            </div>
            <fieldset className="grupo">
              <div className="campo">
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" onChange={(e)=> setCidade(e.target.value)} name="cidade" style={{width: '10em'}} defaultValue />
              </div>

              <div className="campo">
                <label htmlFor="estado">Estado</label>
                <input type="text" id="estado" onChange={(e)=> setEstado(e.target.value)} name="estado" style={{width: '10em'}} defaultValue />
              </div>
              <div className="campo">
                <label>Spotify</label>
                <br />
                <label>
                  <input type="checkbox" name="newsletter" defaultValue={1} /> Gostaria de receber notificações de músicas
                </label>
                </div>
              <div className="submit">
              <button type="submit" style={{fontSize: 'large'}} name="submit">inscrever</button>
              </div>
                </fieldset>
                </fieldset>
            </form>
        </div>
    </div>
    </>
    );
    }

export default Form;

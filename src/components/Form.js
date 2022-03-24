import './Form.css';

function Form(){
return(
    <>

<div id="showcase">
  <div className="showcase-container">
    <form action="/action_page.php" method="post" style={{margin: '60px 20px 20px 130px'}}>
     
      <fieldset style={{fontSize: 'larger'}}>
        <fieldset className="grupo" style={{border: '0ch'}}>
          <div className="campo">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome"  name="nome" style={{width: '10em'}} defaultValue />
          </div>
          <div className="campo">
            <label htmlFor="snome">Sobrenome</label>
            <input type="text" id="snome" name="snome" style={{width: '10em'}} defaultValue />
          </div>
        </fieldset>
        <div className="campo">
          <label>Sexo</label>
          <label>
            <input type="radio" name="sexo" defaultValue="masculino" /> Masculino
          </label>
          <label>
            <input type="radio" name="sexo" defaultValue="feminino" /> Feminino
          </label>
        </div>
        <div className="campo">
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" name="email" style={{width: '20em'}} defaultValue />
        </div>
        <div className="campo">
          <label htmlFor="telefone">Telefone</label>
          <input type="text" id="telefone" name="telefone" style={{width: '10em'}} defaultValue />
        </div>
        <fieldset className="grupo">
          <div className="campo">
            <label htmlFor="cidade">Cidade</label>
            <input type="text" id="cidade" name="cidade" style={{width: '10em'}} defaultValue />
          </div>
          <div className="campo">
            <label htmlFor="estado">Estado</label>
            <select name="estado" id="estado">
              <option value>--</option>
              <option value="CE">CE</option>
            </select>
          </div>
          <div className="campo">
            <label htmlFor="mensagem">Deixe sugestões para melhorias</label>
            <textarea rows={6} style={{width: '20em'}} id="mensagem" name="mensagem" defaultValue={""} />
          </div>
          <div className="campo">
            <label>Spotify</label>
            <br />
            <label>
              <input type="checkbox" name="newsletter" defaultValue={1} /> Gostaria de receber notificações de músicas
            </label>
          </div>
          <button type="submit" style={{fontSize: 'large'}} name="submit">inscrever</button>
            </fieldset>
            </fieldset>
        </form>
    </div>
</div>
</>
);
}

export default Form;

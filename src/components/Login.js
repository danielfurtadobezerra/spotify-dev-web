import './Login.css';

function Login(){
  return(
    <>

<div id="showcase">
  <div className="showcase-container">
    <form action="/action_page.php">
      <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="pwd" className="form-label">Password:</label>
        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
      </div>
      <div className="form-check mb-3">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" name="remember" /> Remember me
        </label>
        <a href="cadastro.html" style={{margin: 4}}><fonte color="blue"> cadastrar-se </fonte></a>
      </div>
    </form>
    <button className="btn-primary">Entrar</button>
  </div>
</div>
</>
  );
}

export default Login;

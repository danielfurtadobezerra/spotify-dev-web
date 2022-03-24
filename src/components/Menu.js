// Rian

import './Menu.css';
function Menu(){
    return (
        <>
        
		<footer id="footer">
			<div className="footer-content">
				<img src="img/logo.png" alt="" className="logo" />
				<ul className="footer-menu">
					<p>Empresa</p>
					<li className="footer-menu-item">
						Sobre
					</li>
					<li className="footer-menu-item">
						Empregos
					</li>
					<li className="footer-menu-item">
						For the record
					</li>
				</ul>

				<ul className="footer-menu">
					<p>Comunidades</p>
					<li className="footer-menu-item">
						Para Artistas
					</li>
					<li className="footer-menu-item">
						Desenvolvedores
					</li>
					<li className="footer-menu-item">
						Marcas
					</li>
					<li className="footer-menu-item">
						Investidores
					</li>
					<li className="footer-menu-item">
						Fornecedores
					</li>
				</ul>

				<ul className="footer-menu">
					<p>Links úteis</p>
					<li className="footer-menu-item">
						Ajuda
					</li>
					<li className="footer-menu-item">
						Player da Web
					</li>
					<li className="footer-menu-item">
						Aplicativo móvel grátis
					</li>
				</ul>

				<div className="socials">
					<i className="fab fa-instagram"></i>
					<i className="fab fa-twitter"></i>
					<i className="fab fa-facebook-f"></i>
				</div>
			</div>
			<div className="footer-info">
				<ul className="footer-info-items">
					<li className="footer-info-item">Legal</li>
					<li className="footer-info-item">Centro de Privacidade</li>
					<li className="footer-info-item">Política de privacidade</li>
					<li className="footer-info-item">Cookies</li>
					<li className="footer-info-item">Sobre anúncios</li>
				</ul>

				<div className="rights">
					<div className="country">
						<p>Brasil</p>
						<img src="img/brazil.png" alt="" className="brazil-flag" />
					</div>
					<p>&copy; 2020 Spotify AB</p>
				</div>
			</div>
		</footer>
		
        </>
    );
}

export default Menu;
import { useRef } from 'react';
import './style.css';

function Navbar() {

	return (
		<div>
			<header>
			<nav>
				<img src="./src/components/navBar/onsocial-white.png"  style={{width: 120}}/>
				<div className="mobile-menu">
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
				</div>
				<ul className="nav-list">
				<li><a href="#">Início</a></li>
				<li><a href="#">Rotas</a></li>
				<li><a href="#">Checklist</a></li>
				<li><a href="#">Avisos</a></li>
				</ul>
			</nav>
		</header>
		<script src="mobile-navbar.js"></script>
		<main></main>
		</div>
	);
}

export default Navbar;
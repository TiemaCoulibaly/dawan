import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
	return (
		<nav className="navigation">
			<ul>
				<li>
					<NavLink exact to="/">
						Accueil
					</NavLink>
				</li>
				<li>
					<NavLink to="/life-cycle">Cycle de Vie</NavLink>
				</li>
				<li>
					<NavLink to="/card">Le CSS</NavLink>
				</li>
				<li>
					<NavLink to="/etat">Changer l'etat</NavLink>
				</li>
				<li>
					<NavLink to="/forms">Formulaire</NavLink>
				</li>
				<li>
					<NavLink to="/param/15">Parametre</NavLink>
				</li>
				<li>
					<NavLink to="/users">Utilisateurs</NavLink>
				</li>
				<li>
					<NavLink to="/ce-lien-nexiste-pas">Not Found</NavLink>
				</li>
				<li>
					<NavLink to="/goback">Retour</NavLink>
				</li>
			</ul>
		</nav>
	);
}
export default Navigation;

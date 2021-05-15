const prenoms = ["Rick", "Morty", "Summer", "Jerry", "Beth"];
const utilisateurs = ["salut"];

function WelcomePage(props) {
	if (props.isLogged) {
		return <h1>Bienvenue sur ma page</h1>;
	} else {
		return <h1>Vous devez être connecté pour voir cette page</h1>;
	}
}

class App extends React.Component {
	createUserArrayElt() {
		const userJSXElements = [];

		/***
		 * React a besoin d'identifier de maniere uniques nos differentes balises   * <li></li> pour mieux s'adapter lorsque les elements de la liste changent
		 */
		// for (const item of prenoms.entries()) {
		//     const index = item[0];
		//     const prenom = item[1];
		//     const jsxLi = (<li key={index}>{prenom}</li>);
		//     userJSXElements.push(jsxLi);
		// }
		for (const [index, prenom] of prenoms.entries()) {
			const jsxLi = <li key={index}>{prenom}</li>;
			userJSXElements.push(jsxLi);
		}
		return userJSXElements;
	}

	printUsers() {
		if (utilisateurs.length > 0) {
			return <ul>{this.createUserArrayElt()}</ul>;
		}
		return <p>La liste des utilisateurs est vide.</p>;
	}

	createUsers(prenom, index) {
		const element = (
			<li key={index}>
				<a href="#">{prenom}</a>
			</li>
		);
		return element;
	}

	render() {
		return (
			<React.Fragment>
				<h2>Liste des utilisateurs</h2>
				<ul>{this.createUserArrayElt()}</ul>
				<h3>Avec la methode map</h3>
				<ul>
					{prenoms.map(function (prenom, index) {
						return <li key={index}>{prenom}</li>;
					})}
				</ul>
				<h3>Syntaxe raccourcie</h3>
				<ul>
					{prenoms.map((prenom, index) => (
						<li key={index}>{prenom}</li>
					))}
				</ul>
				<h2>Afficher une liste seulement si elle n'est pas vide</h2>
				{this.printUsers()}
				<h3>Condition Ternaire</h3>
				{utilisateurs.length > 0 ? (
					<p>Il y a des utilisateurs</p>
				) : (
					<p>Aucun utilisateur</p>
				)}
				<h3>Composant</h3>
				<WelcomePage isLogged={false} />

				<h3>Map</h3>
				<ul>{prenoms.map(this.createUsers)}</ul>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

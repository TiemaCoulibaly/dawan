class ThisReference extends React.Component {
	constructor(props) {
		super(props);
		this.nom = "Doe";
		this.afficherNomBinding = this.afficherNomBinding.bind(this);
	}

	afficherNom() {
		console.log(this);
	}

	afficherNomFlechee = () => {
		console.log(this.nom);
	};

	afficherNomBinding() {
		console.log(this.nom);
	}

	render() {
		return (
			<div>
				<p>
					Lorsque onClick va appeler la fonction afficherNom, le this
					ne sera pas le bon. Car afficherNom est appellé depuis
					l'interieur fonction onClick
				</p>
				<button onClick={this.afficherNom}>Perte le contexte</button>
				<br />
				<button onClick={this.afficherNomFlechee}>
					Garde le contexte (methode 1)
				</button>
				<br />
				<button onClick={this.afficherNomBinding}>
					Garde le contexte (methode 2)
				</button>
			</div>
		);
	}
}

class Person extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prenom: "",
			utilisateur: {
				id: 0,
				nom: "",
			},
		};
	}

	direBonjour() {
		console.log("Hello !");
	}
	afficherSaisi(event) {
		console.log(event);
		const recherche = event.target.value;
		console.log("Recherche: ", recherche);
	}

	afficherEventEtNombre(event, nombre) {
		console.log(event);
		console.log(nombre);
	}

	// transition(evenement) {
	//     console.log(this);
	//     this.afficherEventEtNombre(evenement, 50);
	// }
	changerNomUtilisateur = () => {
		//on copie l'utilisateur
		const newUtilisateur = { ...this.state.utilisateur };

		// on modifie les propriétés que l'on veut
		// newUtilisateur.id = 5;
		newUtilisateur.nom = "Maude";

		// on modifie le state
		this.setState({
			// utilisateur: {...newUtilisateur, nom: 'Maude'}
			utilisateur: newUtilisateur,
		});

		// Il ne faut pas faire ca car setState peut etre asyncrhone et
		// attendre un peu avant de mettre a jour le state pour des questions
		// de performance.
		// this.setState({
		//     utilisateur: this.state.utilisateur
		// });

		this.setState((oldState) => {
			utilisateur: oldState.utilisateur;
		});

		this.setState({
			utilisateur: newUtilisateur,
			prenom: newUtilisateur.nom,
		});
	};

	changerPrenom = () => {
		console.log(this.state.prenom);
		/** Il ne faut jamais modifier le state directement */
		// this.state.prenom = "John";
		this.setState({
			prenom: "John",
		});
	};

	render() {
		return (
			<React.Fragment>
				<p>Prenom</p>
				{/* Attention, on ne met pas les parenthese, on ne souhaite pas executer la fonction mais la transmettre */}
				<button onClick={this.direBonjour}>Clique ici</button>
				<input
					type="text"
					placeholder="Saisir un nom"
					onChange={this.afficherSaisi}
				/>

				<button
					onClick={(evenement) =>
						this.afficherEventEtNombre(evenement, 50)
					}>
					Afficher event
				</button>
				<p>Prénom: {this.state.prenom}</p>
				<button onClick={this.changerPrenom}>changer le nom</button>
				<button onClick={this.changerNomUtilisateur}>
					changer l'utilisateur
				</button>
			</React.Fragment>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<ThisReference />
				<Person />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";

class Formulaire extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nom: "",
			prenom: "",
			email: "",
			age: 0,
			ville: "",
			cgu: true,
			formErrors: {
				nom: "",
				prenom: "",
				email: "",
				age: "",
				ville: "",
			},
		};
		this.formErrors = {
			nom: ["", ""],
		};
	}

	onChangeNomHandler = (event) => {
		const nom = event.target.value;
		const errorsCopy = { ...this.state.formErrors };
		let messageError = "";
		if (nom.length < 2) {
			messageError = "Le nom doit faire au moins 2 caracteres";
		}
		this.setState({
			formErrors: {
				...errorsCopy,
				nom: messageError,
			},
		});
		this.setState({ nom: event.target.value });
	};

	onChangePrenomHandler = (event) => {
		this.setState({ prenom: event.target.value });
	};

	setErrorMsg(nomDuChamp) {
		switch (nomDuChamp) {
			case "nom":
				break;
			case "email":
				break;
			default:
				break;
		}
	}
	onChangeHandler = (event) => {
		console.log(event);
		const nomDuChamp = event.target.name;
		// Attention avec les checkbox, il faudra verifier le type
		const valeur =
			event.target.type === "checkbox"
				? event.target.checked
				: event.target.value;
		/**
         * On peut utiliser la valeur contenu dans une variable comme nom de propriété
         * dans un objet
                const obj = {
                    [nomDuChamp]: 'test'
                }
                console.log(obj);
                console.log(obj.email);
        */
		this.setErrorMsg(nomDuChamp);

		this.setState({
			[nomDuChamp]: valeur,
		});
	};

	onSubmitHandler = (event) => {
		console.log("Event: ", event);
		event.preventDefault();
	};

	render() {
		return (
			<div className="container">
				<h1>Les formulaires</h1>
				<p>Prenom: {this.state.nom}</p>
				<form className="w-50 m-auto" onSubmit={this.onSubmitHandler}>
					<div className="form-group">
						<label htmlFor="nom">Nom</label>
						<input
							className="form-control"
							type="text"
							id="nom"
							value={this.state.nom}
							onChange={this.onChangeNomHandler}
						/>
						<p>{this.state.formErrors.nom}</p>
					</div>
					<div>
						<label htmlFor="prenom">Prénom</label>
						<input
							className="form-control"
							type="text"
							id="prenom"
							value={this.state.prenom}
							onChange={this.onChangePrenomHandler}
						/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							className="form-control"
							type="text"
							name="email"
							id="email"
							value={this.state.email}
							onChange={this.onChangeHandler}
						/>
					</div>
					<div>
						<label>Age</label>
						<input
							className="form-control"
							type="text"
							name="age"
							value={this.state.age}
							onChange={this.onChangeHandler}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="ville">Ville de naissance</label>
						<select
							onChange={this.onChangeHandler}
							name="ville"
							id="ville"
							className="form-select">
							<option value="paris">Paris</option>
							<option value="nantes">Nantes</option>
							<option value="toulouse">Toulouse</option>
						</select>
					</div>
					<div className="form-group">
						<input
							type="checkbox"
							id="cgu"
							name="cgu"
							checked={this.state.cgu}
							value={this.state.cgu}
							onChange={this.onChangeHandler}
						/>
						<label htmlFor="cgu">J'accepte les CGU</label>
					</div>
					<div className="form-group">
						<label htmlFor="cgu">champ controlé</label>
						{/* 
                            Des que l'on definit l'attribut value
                            le champ devient controlé par React et on ne peut 
                            pourra plus le modifier sans onChange=""
                         */}
						<input type="text" value="salut" />
						<input
							type="text"
							defaultValue="Jonh"
							placeholder="test"
						/>
					</div>
					<div className="form-group">
						<input type="submit" value="Inscription" />
					</div>
				</form>
			</div>
		);
	}
}
export default Formulaire;

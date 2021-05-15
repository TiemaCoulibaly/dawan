class Personne extends React.Component {
	constructor() {
		super();
		this.state = {
			prenom: "",
		};
	}
	changerNom = (e) => {
    const valueInput = e.target.value;
    this.setState({
      prenom: valueInput
    })
	

	};
	render() {
		return (
			<div>
        <label>Votre prénom</label>
				<input onChange={this.changerNom} type="text" placeholder='Entrez votre prénom'/><br/>
        <label>Voila votre saisie</label>
				<p>{this.state.prenom}</p>
			</div>
		);
	}
}


class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Personne />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

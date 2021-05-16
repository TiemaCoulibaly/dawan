import React from "react";
import { connect } from "react-redux";
class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				<h1>Compteur:{this.props.myCount}</h1>
				<button onClick={this.props.myIncrementer}>Incrementer</button>
				<button onClick={this.props.myIncrementerX}>
					IncrementerX
				</button>
				<button
					onClick={() =>
						this.props.exemple({
							type: "incrementerX",
							payload: 12,
						})
					}>
					Exemple
				</button>
			</>
		);
	}

	/**
	 * Cette fonction va llier le state du store avec les props du composant
	 * Notre fonction doit renvoyer un objet
	 */
}
function mapStateToProps(state) {
	/**<==le state du store */
	return { myCount: state.count };
}
//Pour executer une action du store, il faut utiliser la methode dispatch() revient a faire un countReducer
function mapDispatchToProps(dispatch) {
	return {
		myIncrementer: () => dispatch({ type: "incrementer" }),
		myIncrementerX: () => dispatch({ type: "incrementerX", payload: 3 }),
		exemple: (action) => dispatch(action),
	};
}
//Cette fonction prend 2  callback et renvoie une fonction
//qui permet de de connecter un composant au store

// const fonctionDeConnection = connect(mapStateToProps);
// const CounterConnecter = fonctionDeConnection(Counter);
// export default CounterConnecter;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

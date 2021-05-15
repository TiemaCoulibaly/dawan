/**
 * <mon-header message="">
 *    ffdf
 * </mon-header>
 *  */

/**
 * Pour que la fonction soit un composant, il faut qu'elle
 * retourne du jsx (ou un element React)
 */
function Product() {
	return <p>Produit</p>;
}

function ProductName(props) {
	console.log(props);
	// console.log(props.nom);
	return <p>Produit: {props.nom}</p>;
}

class PersonName extends React.Component {
	constructor(props) {
		// this.props = props
		super(props);
	}

	render() {
		console.log(this.props);
		return (
			<p className={this.props.styleComponent}>
				Personne: {this.props.nom}
			</p>
		);
	}
}

function Person(props) {
	console.log(props);
	return <p>Personne: {props.children}</p>;
}

function App() {
	return (
		<div>
			<Product />
			<ProductName nom="Fleurs" />
			<ProductName nom="Terre" />
			<PersonName nom="Jerry" styleComponent="title" />
			<Person>Beth</Person>
			<Person>
				<a href="#">
					<span>Salut</span>
				</a>
			</Person>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));

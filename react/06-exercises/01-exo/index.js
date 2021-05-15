const fruits = ["pinapple", "Strawberry", "apple", "kiwi", "orange"];

const products = [
	{ title: "Milk", description: "lorem white", price: 2 },
	{ title: "Spray", description: "smell good", price: 18 },
	{ title: "Soap", description: "very soft", price: 5 },
	{ title: "Blanket", description: "very warm", price: 45 },
];

class Products extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		return (
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Titre</th>
						<th>Description</th>
						<th>Prix</th>
					</tr>
				</thead>
				<tbody>
					{products.length > 0 ? (
						products.map((product, index) => (
							<SingleProduct
								key={index}
								titre={product.title}
								descript={product.description}
								prix={product.price}
							/>
						))
					) : (
						<h2>Il ny pas de produit</h2>
					)}
				</tbody>
			</table>
		);
	}
}
class Fruits extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fruits: ["pinapple", "Strawberry", "apple", "kiwi", "orange"],
		};
	}

	render() {
		return (
			<div>
				{this.state.fruits.length > 0 ? (
					<ul className="list-group list-group-flush">
						{this.state.fruits.map((fruit, index) => (
							<li
								className="list-group-item list-group-item-action"
								key={index}>
								{fruit}
							</li>
						))}
					</ul>
				) : (
					<p>Il n ya pas de fruit</p>
				)}
			</div>
		);
	}
}
function SingleProduct(props) {
	return (
		<React.Fragment>
			<tr>
				<td>{props.titre}</td>
				<td>{props.descript}</td>
				<td>{props.prix}€</td>
			</tr>
		</React.Fragment>
	);
}

function FruitsFunction() {
	return fruits.length > 0 ? (
		<ul className="list-group list-group-flush">
			{fruits.map((fruit, index) => (
				<li
					className="list-group-item list-group-item-action"
					key={index}>
					{fruit}
				</li>
			))}
		</ul>
	) : (
		<p>Il n ya pas de fruit</p>
	);
}
class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h2>Liste des Fruits CLASSE</h2>
				<Fruits />
				<h2>Liste des Fruits FONCTION</h2>
				<FruitsFunction />
				<h2>Listes des Produits</h2>
				<Products />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

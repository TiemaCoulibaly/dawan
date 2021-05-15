class Panier extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [
				{ id: 1, title: "Milk", quantity: "7", price: 2.45 },
				{ id: 2, title: "Spray", quantity: "2", price: 1.1 },
				{ id: 3, title: "Soap", quantity: "8", price: 5.99 },
				{ id: 4, title: "Blanket", quantity: "1", price: 45.9 },
			],
		};
	}
	increase = (id) => {
		//recupere une copie du tableau
		const products = [...this.state.products];
		const index = products.findIndex((product) => product.id === id);
		products[index].quantity++;

		this.setState({
			products,
		
		});
	};
	decrease = (id) => {
		//recupere une copie du tableau
		const products = [...this.state.products];
		const index = products.findIndex((product) => product.id === id);
		products[index].quantity--;

		this.setState({
			products,
		
		});
	};

	handleDelete = (index) => {
		//copy of the array
		const array = [...this.state.products];

		array.splice(index, 1);
		this.setState({
			products: array,
		});
	};
	render() {
		return (
			<table className="container table table-striped table-hover">
				<thead>
					<tr>
						<th>Id</th>
						<th>Nom</th>
						<th>Quantité</th>
						<th>Prix</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{this.state.products.length > 0 ? (
						this.state.products.map((product, index) => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>{product.title}</td>
								<td>
									<button
										onClick={() =>
											this.decrease(product.id)
										}
										className="btn btn-secondary mx-2">
										-
									</button>
									<span>{product.quantity}</span>
									<button
										onClick={() =>
											this.increase(product.id)
										}
										className="btn btn-primary mx-2">
										+
									</button>
								</td>
								<td>{product.price}€</td>
								<td>
									<button
										onClick={() => this.handleDelete(index)}
										className="btn btn-danger">
										<i className="bi bi-trash"></i>
									</button>
								</td>
							</tr>
						))
					) : (
						<h2>Il ny pas de produit</h2>
					)}
				</tbody>
			</table>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<React.Fragment>
				<Panier />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import Produit from "./Produit";

class Produits extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [
				{
					id: 1,
					title: "Milk",
					description:
						" Lorem Ipsum has been the industry's standard dummy text ever ",
					price: 2.45,
				},
				{
					id: 2,
					title: "Spray",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
					price: 1.1,
				},
				{
					id: 3,
					title: "Soap",
					description:
						" since the 1500s, when an unknown printer took a galley of type and",
					price: 5.99,
				},
				{
					id: 4,
					title: "Blanket",
					description:
						" scrambled it to make a type specimen book. It has survived not only ",
					price: 45.9,
				},
			],
			idProduitEdit: 0,
		};
	}
	// increase = (id) => {
	// 	//recupere une copie du tableau
	// 	const products = [...this.state.products];
	// 	const index = products.findIndex((product) => product.id === id);
	// 	products[index].quantity++;

	// 	this.setState({
	// 		products,
	// 	});
	// };
	// decrease = (id) => {
	// 	//recupere une copie du tableau
	// 	const products = [...this.state.products];
	// 	const index = products.findIndex((product) => product.id === id);
	// 	products[index].quantity--;

	// 	this.setState({
	// 		products,
	// 	});
	// };

	handleDelete = (index) => {
		//copy of the array
		const array = [...this.state.products];
		array.splice(index, 1);
		this.setState({
			products: array,
		});
	};
	setEditProductId = (id) => {
		this.setState({
			idProduitEdit: id,
		});
	};
	editProductHandler = (id, title, description, price) => {
		const produits = [...this.state.products];
		const newProduit = { id, title, description, price };
		let indexProduit = produits.findIndex((p) => p.id === id);
		produits[indexProduit] = newProduit;
		this.setState({
			idProduitId: 0,
			products: produits,
		});
	};
	render() {
		return (
			<table className="container table table-striped table-hover">
				<thead>
					<tr>
						<th>Id</th>
						<th>Nom</th>
						<th>Description</th>
						<th>Prix</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{this.state.products.length > 0 ? (
						this.state.products.map((product, index) => (
							<Produit
								key={index}
								index={index}
								id={product.id}
								title={product.title}
								description={product.description}
								price={product.price}
								handleDelete={this.handleDelete}
								editId={this.setEditProductId}
								editing={
									product.id === this.state.idProduitEdit
								}
								editProduct={this.editProductHandler}
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

export default Produits;

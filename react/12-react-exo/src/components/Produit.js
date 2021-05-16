import React from "react";
import "./Produit.css";

function Produit(props) {
	const { id, index, title, description, price, editing } = props;

	return (
		<React.Fragment>
			<tr key={id}>
				<td>{id}</td>
				<td contentEditable={editing}>{title}</td>
				<td contentEditable={editing}>{description}</td>
				<td contentEditable={editing}>{price}€</td>
				<td>
					{editing ? (
						<button
							onClick={() => props.editProduct(id, title,description,price)}
							className="btn btn-success mx-2">
							Enregistrer
						</button>
					) : (
						<>
							<button
								onClick={() => props.editId(id)}
								className="btn btn-secondary mx-2">
							Modifier
							</button>

							<button
								onClick={() => props.handleDelete(index)}
								className="btn btn-danger mx-2 my-1">
								Delete
							</button>
						</>
					)}
					{/* <button
						onClick={() => props.editId(id)}
						className="btn btn-secondary mx-2">
						{!editing ? "Modifier" : "Enregistrer"}
					</button>

					<button
						onClick={() => props.handleDelete(index)}
						className="btn btn-danger mx-2 my-1">
						Delete
					</button> */}
				</td>
			</tr>
		</React.Fragment>
	);
}

export default Produit;

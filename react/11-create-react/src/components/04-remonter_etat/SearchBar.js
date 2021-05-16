import React from "react";

function MyComponent(props) {
	const onSubmitHandler = (event) => {
		event.preventDefault();
		const recherche = event.target.search.value;
		// console.log(recherche);
		props.envoyerRecherche(recherche);
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<input
				type="search"
				placeholder="ex: Maude"
				name="search"
				id="search"
			/>
			<input type="submit" value="Rechercher" />
		</form>
	);
}
export default MyComponent;

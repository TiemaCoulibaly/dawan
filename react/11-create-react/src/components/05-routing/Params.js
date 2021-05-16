import React from "react";

function Params(props) {
const id = props.match.params.id;
	return (
		// <> : Syntaxe Raccourcie de <React.Fragment>
		// BrowserRouter, chargera ici les composants
		<React.Fragment>
		<h2>Voici votre id:{id} </h2>
		
		</React.Fragment>
	);
}

export default Params;

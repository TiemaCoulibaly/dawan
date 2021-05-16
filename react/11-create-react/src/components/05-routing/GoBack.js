import React from "react";

function GoBack(props) {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Retour</h1>
			<button className="btn btn-primary mx-2" onClick={props.history.goBack}>
				Retour
			</button>
			<button
				className="btn btn-secondary mx-2"
				onClick={() => {
					props.history.push("/");
				}}>
				Accueil
			</button>
		</div>
	);
}
export default GoBack;

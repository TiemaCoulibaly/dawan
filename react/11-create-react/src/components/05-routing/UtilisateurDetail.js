import React from "react";

function UtilisateurDetail(props) {
	return (
		<React.Fragment>
			<div>
				<p>Identifiant d'utillisateur: {props.match.params.id}</p>
				<p>Email</p>
			</div>
		</React.Fragment>
	);
}
export default UtilisateurDetail;

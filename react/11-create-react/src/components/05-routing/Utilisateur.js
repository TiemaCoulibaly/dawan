import { NavLink } from "react-router-dom";

function Utilisateur(props) {
	const { username, email, id } = props;
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src="https://picsum.photos/200/300"
				alt="Card cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{username}</h5>
				<p className="card-text">{email}</p>
				<NavLink to={`/param/${id}`} className="btn btn-primary">
					Voir plus
				</NavLink>
			</div>
		</div>
	);
}
export default Utilisateur;

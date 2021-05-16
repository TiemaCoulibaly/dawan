import React from "react";

function Header(props) {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="/">
				React EXO
			</a>
			<div className="d-flex">
				<a className=" navbar-brand" href="/">
					<i className="bi bi-bag-check"></i>
				</a>
				<a className="navbar-brand" href="/">
					<i className="bi bi-cart"></i>
				</a>
			</div>
		</nav>
	);
}

export default Header;

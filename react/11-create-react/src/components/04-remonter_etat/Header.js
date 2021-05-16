import React from "react";
import NavHeader from "./NavHeader";

function Header(props) {
	return (
		<header>
			<h1>React</h1>
			<NavHeader onSearch={props.onSearchClick} />
		</header>
	);
}
export default Header;

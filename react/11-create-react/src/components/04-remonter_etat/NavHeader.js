import React from "react";
import SearchBar from "./SearchBar.js";

function NavHeader(props) {
	return (
		<nav>
			<ul>
				<li>
					<a href="/">item 1</a>
				</li>
				<li>
					<a href="/">item 2</a>
				</li>
				<li>
					<a href="/">item 3</a>
				</li>
			</ul>
			<SearchBar envoyerRecherche={props.onSearch} />
		</nav>
	);
}
export default NavHeader;

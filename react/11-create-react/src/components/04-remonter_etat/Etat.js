import React from "react";
import Body from "./Body";
import Header from "./Header";

class Etat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
		};
	}

	updateSearch = (valeur) => {
		this.setState({ search: valeur });
	};

	render() {
		return (
			<>
				<Header onSearchClick={this.updateSearch} />
				<Body recherche={this.state.search} />
			
				
			</>
		);
	}
}

export default Etat;

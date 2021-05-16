import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/routes";
import Navigation from "./router/Nav";
import "./App.css";

function App() {
	return (
		// <> : Syntaxe Raccourcie de <React.Fragment>
		// BrowserRouter, chargera ici les composants
		<BrowserRouter>
			<Navigation />
			<Routes />
	
		</BrowserRouter>
	);
}

export default App;

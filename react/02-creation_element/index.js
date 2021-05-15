const element = React.createElement("h2", {}, "Hello World React!");
//En temps normal, on n'utlilise qu'une seule fois la methode render car elle ecrase le contenu precedent
ReactDOM.render(element, document.getElementById("root"));

const liste = React.createElement(
	"ul",
	{},
	React.createElement("li", null, "Elephant"),
	React.createElement("li", {id: 'mon-id'}, "Elan"),
	React.createElement("li", {className: 'ma-class'}, "Epervier"),
);
ReactDOM.render(liste, document.getElementById("root"));

//le JSX (Javascript Synthax eXtension)

const listeJSX = (

		<ul>
			<li>Chien</li>
			<li>Chat</li>
			<li>Chameau</li>
		</ul>
	
); 
ReactDOM.render(listeJSX, document.getElementById("root"));
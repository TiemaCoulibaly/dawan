function Bouton(props) {
	const styleCss = `btn ${props.typeCss}`;
	return <button className={styleCss}>Click here</button>;
}

class App extends React.Component {
	render() {
		const styleCss = {
			fontSize: "20px",
			color: "red",
		};
		return (
			<React.Fragment>
				<h1 style={styleCss}>Hello</h1>
				<div>
					<p style={{ width: "200px" }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Amet, ducimus.
					</p>
				</div>
				<Bouton typeCss="red" />
				<Bouton typeCss="green" />
			</React.Fragment>
		);
	}
}
ReactDOM.render(<App />, document.getElementById("root"));

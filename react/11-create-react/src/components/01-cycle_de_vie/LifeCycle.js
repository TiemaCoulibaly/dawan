import { Component } from "react";
function FormatDate(props) {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return props.date.toLocaleDateString("fr-FR", options);
}

class LifeCycle extends Component {
	constructor(props) {
		//console.log("1. Composant contruit");
		super(props);
		this.state = {
			date: new Date(),
		};
	}

	componentDidMount() {
		console.log("3. Composé monté");
		this.timer = setInterval(() => {
			const newDate = new Date();
			this.setState({
				date: newDate,
			});
		}, 5000);
		//console.log(this.timer);
	}
	componentDidUpdate(prevProps, prevState) {
		// console.log("4. Composant Update");
		// console.log("previous Props", prevProps);
		// console.log("prevous State", prevState);
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	render() {
		//console.log("2. Composant rendu");
		return (
			<>
				<p>
					Nous somme le <FormatDate date={this.state.date} />
				</p>
				<p>
					Temps de connexion: {this.state.date.toLocaleTimeString()}
				</p>
			</>
		);
	}
}
export default LifeCycle;

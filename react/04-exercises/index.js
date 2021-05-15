const title = React.createElement("h2", {}, "I am the title");

ReactDOM.render(title, document.getElementById("app"));

const para = React.createElement("p", {}, "I am the paragraph");
ReactDOM.render(para, document.getElementById("app"));

const image = React.createElement(
	"img",
	{
		src: "https://picsum.photos/200/300",
	},
	null
);
ReactDOM.render(image, document.getElementById("app"));

// ----JSX
function HeaderComponent(props) {
	return (
		<header>
			<p>
			  	<i className="fab fa-battle-net"></i>
				{props.date}
			</p>

			<h1>{props.titleHeader}</h1>
		</header>
	);
}

class MyFonction extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h2>{this.props.titleFonction}</h2>
				<img src={this.props.image} />
				<p>{this.props.description}</p>
				<div>
					<a href='#'>
						{this.props.details}
					</a>
				</div>
			</div>
		);
	}
}

const titleJSX = (
	<div className="container">
		<HeaderComponent
			titleHeader="Je suis le titre de Header Component"
			date="Crée en 2021"
		/>
		<MyFonction
			titleFonction="Je suis le titre de la class Component"
			description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
			image="https://picsum.photos/200/300"
			details="Voir plus"
		/>
		<h2>
			<i className="fab fa-angellist"></i> Title JSX
		</h2>
		<p>
			<i className="fas fa-cat"></i> Paragraph JSX
		</p>
		<img src="https://picsum.photos/200/300" />
	</div>
);
function App() {
	return titleJSX;
}

ReactDOM.render(<App />, document.getElementById("app"));

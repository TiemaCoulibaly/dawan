import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store/count";
function App() {
	return (
		<Provider store={store}>
			<h1>Hello Redux !</h1>
			<Counter />
		</Provider>
	);
}

export default App;

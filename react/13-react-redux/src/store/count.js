import { createStore } from "redux";

//Etat initial du store:
const initialState = {
	count: 0,
};

/**
 * Les reducer sont de simple de fonction qui permettent d'initialiser l'etat du store
 * et de mettre a jour cet etat.
 * Cette fonction prend 2 parametres:
 *      - state: donnée automatiquement par redux
 *      - action: un objet javascript simple, qui contient le type d'action(string) et la nouvelle valeur (payload)
 *          const action = {type: 'incrementer', payload: 3}
 */
function countReducer(state = initialState, action) {
	switch (action.type) {
		case "incrementer":
			// on copie l'etat
			const newState = { ...state };
			// on le met a jour
			newState.count++;
			//on renvoie le nouvel etat
			return newState;
		case "incrementerX":
			const nvxState = { ...state };
			nvxState.count += action.payload;
			return nvxState;
		case "decrementer":
			break;
    default:
      return state;
	}
}

const store = createStore(countReducer);
export default store;

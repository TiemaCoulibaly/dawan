/**
 * createElement() prend 3 parametres:
 * 1) le nom de la balise HTML
 * 2)  les attributs HTML sous forme d'objet
 * 3) le texte entre les balises
 *
 *  */

const element = React.createElement("h2", {}, "Hello World React!");

//En temps normal, on n'utilise qu'une seule fois la methode render
// car elle ecrase le contenu precedent
ReactDOM.render(element, document.getElementById("root"));

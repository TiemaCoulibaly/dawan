/**
 * Exercice:
 * Lorsque l'on clique sur le bouton "création lien",
 * un événement se déclenche et, créer 10 liens
 * qui seront affichés dans la balise <div id="link">
 */
function creationLien() {
	let container = document.getElementById("link");
	let ulLink = document.createElement("ul");
	let liLink = document.createElement("li");
	let aLink = document.createElement("a");
	aLink.textContent = "Creation de lien";
	aLink.setAttribute("href", "https://google.com");
	container.appendChild(ulLink);
	ulLink.appendChild(liLink);
	liLink.appendChild(aLink);
}
/* AIDE : */
/* 1) On veut créer un événement lorsque l'utilisateur clique sur le bouton.
 * 2) On veut créer 10 liens
 *  2a) On veut creer un élément HTML <a></a>
 *  2b) On veut lui ajouter un texte (par: Lien 1, Lien2 ... )
 *  2c) On veut ajouter le nouveau lien à la balise <div></div>
 */

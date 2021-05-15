/**
 * Exercice:
 * Lorsque l'on clique sur le bouton "Publier",
 * un événement de type submit se déclenche.
 * il appelle une fonction qui prend en parametre l'événement.
 * La fonction récupére ce que l'utilisateur a saisi
 * Faire une fonction creerPara
 * (ex: creePara(str) )
 * la fonction 'creePara' s'occupe de créer un paragraphe
 * <p></p> avec comme texte: 'str'
 * le paragraphe sera affiché dans la balise <div id="blog">
 */

function handleSubmit(e) {
	e.preventDefault();
	let inputValue = e.target.article.value;
	createList(inputValue);
}

function createList(valeur) {
	let container = document.getElementById("blog");
	let list = document.createElement("li");
	list.textContent = valeur;
	container.appendChild(list);
}

/* AIDE : */
/* 1) Ajouter un evenement de type submit sur la balise <form></form>
 * 2) l'événement appelle une fonction 'submitArticle' par exemple.
 * 3) Dans le javascript créer une fonction 'submitArticle(monEvent)' par exemple.
 *      Il faudra supprimer le comportement par defaut de l'evenment pour
 *      eviter le rafraichissement de la page et detruire le paragraphe
 *      event.preventDefault();
 * 4) Dans le javascript la fonction, on veut créer une fonction avec un paramètre 'texte' --> creePara(texte)
 * 5) la fonction 'creePara(texte)' doit:
 *  a) crée une balise <p></p>
 *  b) la balise aura pour texte, la valeur du parametre 'texte'
 *  c) ajouter la balise <p> dans la balise <div></div>
 * */

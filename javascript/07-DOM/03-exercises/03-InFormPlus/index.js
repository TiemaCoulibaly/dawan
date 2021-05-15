/**
 * Exercice:
 * Lorsque l'on clique sur le bouton "Publier",
 * un evenement se declenche et, appelle une fonction
 * prend en parametre:
 *    1-la valeur du champ textarea qui a
 * pour nom: 'article',
 *    2-la valeur du champ input qui a pour nom size
 *    3-la valeur de champ input qui a pour nom couleur
 *  (ex: creePara(str, size, color) )
 * la fonction 'creePara' s'occupe de crée un paragraphe
 * <p></p> avec comme texte: 'texte' , une taille de 'size'
 * et comme couleur 'couleur'.
 * le parahraphe sera affiché dans la balise <div id="blog">
 */

function handleClick(event) {
	event.preventDefault();
	let textAreaValue = event.target.article.value;
	let textSize = event.target.size.value;
	let textColor = event.target.color.value;

	createPara(textAreaValue, textSize, textColor);
}

function createPara(textValue, sizeValue, colorValue) {
	let container = document.getElementById("blog");
	let pElement = document.createElement("p");
	pElement.style.color = colorValue;
	pElement.style.fontSize = `${sizeValue}px`;
	pElement.textContent = textValue;
	container.appendChild(pElement);
}

/* AIDE : */
/* 1) Récuperer la zone d'affichage
 * 2) On veut creer une fonction avec des parametre 'texte', 'size', 'color' 
       --> creePara(texte, size, color)
   3) la fonction 'creePara(str)' doit:
     a) crée une balise <p></p>
     b) la balise aura pour texte, la valeur du parametre 'texte'
     c) le texte de la balise doit etre de taille 'size'
     d) le texte de la balise doit etre de couleur 'color'
     e) ajouter la balise <p> dans la balise <div></div>  
 * 4) On veut crée un évenement lorsque l'utilisateur clique sur le bouton 'Publier'.
 * 5) 
 */

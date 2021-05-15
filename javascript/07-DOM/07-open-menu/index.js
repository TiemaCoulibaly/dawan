/**
 * Exercice:
 *
 * Part1
 * Lorsque l'on clique sur l'élément qui à la classe: hamburger-menu,
 * on souhaite déclencher un événement de type clique.
 * Pour changer les 3 lignes en croix (animation css), il faut ajouter
 * la classe 'opened' sur notre div avec la classe 'lines'.
 * Si la classe est déjà presente on la retire, sinon on l'ajouter
 *
 * Part2
 * Notre menu comporte par défaut la propriété css -> display:none;
 * La classe 'menu-open' ajoute un display: flex; ce qui permet d'afficher le menu.
 * Votre but est d'ajouter la classe 'menu-open' lorsque l'on clique sur le menu et
 * de retirer la classe 'menu-open' si elle y est déjà
 */

function openMenu() {
	let menu = document.querySelector(".hamburger-menu");
	let menu_items = document.querySelector(".menu");
	console.log(menu.classList);
	menu.classList.toggle("opened");
	menu_items.classList.toggle("menu-open");

	// if (menu.classList.contains('opened')) {
	//     menu.classList.remove('opened');
	// } else {
	//     menu.classList.add('opened');
	// }
}

/**
 * 1) Ajouter un événement de type clique sur la div avec la classe "lines"
 * 2) Cet événement appelle la fonction 'openMenu()'
 * 3) Dans la fonction openMenu:
 *     a) On recupere le l'élément avec la classe 'lines'
 *     b) Si l'élément comporte la classe 'opened', on la retire, sinon on ajoute la classe
 *         'opened'
 *     c) On recupere le l'élément avec la classe 'menu'
 *     d) Si l'élément comporte la classe 'menu-open', on la retire, sinon on ajoute la classe
 *         'menu-open'
 */

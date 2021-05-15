let buttonElement = document.querySelector("button");

// buttonElement.addEventListener("click", function() {
//     // traitement lorsqu'on clique sur le bouton
// });

window.addEventListener("scroll", function () {
	const main = document.querySelector("main");
	const header = document.querySelector("header");
	const tracker = document.querySelector("#p-bar");

	console.log(main);
	// hauteur d'un élément par rapport à la mise en page (Hauteur totale de l'élément)
	// https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/offsetHeight
	const mainHeight = main.offsetHeight; //Hauteur total;
	const headerHeight = header.offsetHeight;
	//     6400 - 3000
	const scrollableY = mainHeight - (window.innerHeight - headerHeight);

	/* window.ScrollY -> nombre de pixel qu'on défilé en scrollant sur la page
            https://developer.mozilla.org/fr/docs/Web/API/Window/scrollY */
	/* window.innerHeight -> hauteur en pixels de la partie visible de la fenêtre de navigation
            https://developer.mozilla.org/fr/docs/Web/API/Window/innerHeight
    */

	// 500 / 1080 -> 0.5
	const scrollPercentage = window.scrollY / scrollableY;

	// en javascript on peut modifier directement le css d'un élément.
	// 0.5 * 100 = 50
	tracker.style.width = `${scrollPercentage * 100}%`;
	// tracker.style.width = 40 + "%";
	// tracker.style.width = "#fff";
});

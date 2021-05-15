//différence de performance innerHtml sera plus lent
//createElement sera plus rapide en performance

function inner() {
	console.time("inner");
	let zoneDiv = document.getElementById("zone");

	for (let i = 0; i < 1000; i++) {
		zoneDiv.innerHTML += `
            <p>
                <a href="https://dawan.fr">Dawan</a>
            </p>
        `;
	}
	console.timeEnd("inner");
}

function create() {
	console.time("create");
	let zoneDiv = document.getElementById("zone");

	for (let i = 0; i < 1000; i++) {
		let pElt = document.createElement("p");
		let aElt = document.createElement("a");
		aElt.textContent = "Dawan";
		aElt.setAttribute("href", "https://dawan.fr");
		pElt.appendChild(aElt);
		zoneDiv.appendChild(pElt);
	}
	console.timeEnd("create");
}

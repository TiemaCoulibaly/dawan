/**
 * Formulaire d'ajout de contact
 *
 * Le formulaire devra comporté au moins 3 champs (nom, prénom, email)
 * Faire en sorte que les champs ne puissent pas être vide à l'envoie du formulaire
 * sans toucher au fichier HTML.
 * Si un champ est vide il devra être mit en rouge et vert si OK
 * Il ne sera pas possible d'envoyer le formulaire avec un champ vide.
 * Une fois que tout est ok, on envoi le formulaire et le contact apparaitra en dessous
 */

let motDePasse = "qwerty";

function checkBlankFields(...champs) {
	// let errorMsgDiv = document.querySelector('#error-msg');
	// errorMsgDiv.innerHTML = '';
	let erreur = false;
	for (const champ of champs) {
		if (champ.value.length < 1) {
			console.log(champ.dataset);
			let nomDuChamp = champ.getAttribute("data-nom");
			//La chaine est vide.
			let errorMsgElt = document.createElement("p");
			// errorMsgElt.textContent = `Le champ ${nomDuChamp} est vide`;
			// errorMsgDiv.appendChild(errorMsgElt);
			champ.nextElementSibling.textContent = `Le champ ${nomDuChamp} est vide`;
			champ.nextElementSibling.classList.add("error-msg");
			champ.style.border = "2px solid red";
			erreur = true;
		} else {
			champ.style.border = "2px solid green";
			champ.nextElementSibling.innerHTML = "";
		}
	}
	return erreur;
}

function createContact(event) {
	const prenomInput = event.target.firstName;
	const nomInput = event.target.lastName;
	const emailInput = event.target.email;

	console.log(prenomInput);

	let erreur = checkBlankFields(prenomInput, nomInput, emailInput);
	if (!erreur) {
		/**
		 * <div>
		 *  <h2>NOM prenom</h2>
		 *  <p>email</p>
		 * </div>
		 */
		let displayContactDiv = document.getElementById("display-contact");
		// displayContactDiv.innerHTML += `
		//     <div>
		//         <h2>${nomInput.value.toUpperCase()} ${prenomInput.value}</h2>
		//         <p>${emailInput.value}</p>
		//     </div>
		// `;

		let cardElt = document.createElement("div");
		let nameElt = document.createElement("h2");
		let emailElt = document.createElement("p");

		nameElt.textContent = `${nomInput.value.toUpperCase()} ${
			prenomInput.value
		}`;
		emailElt.textContent = `${emailInput.value}`;

		cardElt.appendChild(nameElt);
		cardElt.appendChild(emailElt);
		displayContactDiv.appendChild(cardElt);

		event.target.reset();
		resetColorFields(prenomInput, nomInput, emailInput);
	} else {
	}
	event.preventDefault();
}

function resetColorFields(...champs) {
	for (const champ of champs) {
		champ.style.border = "1px solid black";
	}
}

let formElt = document.querySelector("form");

function isValid(event) {
	console.log(event.target.validity);
	if (event.target.validity.tooShort) {
		let pElt = document.querySelector("p");
		pElt.textContent = " Il faut 4 caracteres mini";
	}

	let prenom = formElt.firstName;
	let nom = formElt.lastName;
	let email = formElt.email;
	if (prenom.value != "" && nom.value != "" && email.value != "") {
		// if (prenom.value && nom.value && email.value) {
		formElt.addcontact.disabled = false;
		console.log(formElt.addcontact);
	}
}

/**
 * AIDE:
 *
 * 1) Evenement de type subm}it sur le formulaire
 * 2) Lorsque que l'utilisateur clique sur le bouton, on verifie
 *      que la valeur des champs ont une taille > a 0
 * 3) Creer et afficher un message d'erreur si la taille est inferieur ou egal a 0
 * 4) Si tout est ok, creer un contact
 * 5) Inserer le contact dans le DOM
 */

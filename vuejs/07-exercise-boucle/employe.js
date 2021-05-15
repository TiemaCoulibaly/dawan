export class Employe {
	constructor(nom, prenom, email) {
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
	}

	toString() {
		return `L'employe [nom: ${this.nom}, prenom: ${this.prenom}, age: ${this.age}`;
	}

	static makeTenEmploye() {
		const employes = [
			{
				nom: "Leanne Graham",
				prenom: "Bret",
				email: "Sincere@april.biz",
			},
			{
				nom: "Ervin Howell",
				prenom: "Antonette",
				email: "Shanna@melissa.tv",
			},
			{
				nom: "Clementine Bauch",
				prenom: "Samantha",
				email: "Nathan@yesenia.net",
			},
			{
				nom: "Patricia Lebsack",
				prenom: "Karianne",
				email: "Julianne.OConner@kory.org",
			},
			{
				nom: "Chelsey Dietrich",
				prenom: "Kamren",
				email: "Lucio_Hettinger@annie.ca",
			},
			{
				nom: "Mrs. Dennis Schulist",
				prenom: "Leopoldo_Corkery",
				email: "Karley_Dach@jasper.info",
			},
			{
				nom: "Kurtis Weissnat",
				prenom: "Elwyn.Skiles",
				email: "Telly.Hoeger@billy.biz",
			},
			{
				nom: "Nicholas Runolfsdottir V",
				prenom: "Maxime_Nienow",
				email: "Sherwood@rosamond.me",
			},
			{
				nom: "Glenna Reichert",
				prenom: "Delphine",
				email: "Chaim_McDermott@dana.io",
			},
			{
				nom: "Clementina DuBuque",
				prenom: "Moriah.Stanton",
				email: "Rey.Padberg@karina.biz",
			},
		];
		return employes;
	}
}

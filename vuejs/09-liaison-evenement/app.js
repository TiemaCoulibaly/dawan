let app = Vue.createApp({
	data() {
		return {
			prenom: "Ella",
		};
	},
	methods: {
		sayHello(message) {
			console.log(message);
		},

		changerPrenom() {
			// Pour acceder aux variables dans data() {}
			// Il faut utiliser le mot clef this.
			this.prenom = "Sarah";
		},

		afficherValeur(evenement) {
			// console.log(evenement);
			console.log(evenement.target.value);
		},

		editPrenom(evenement) {
			this.prenom = evenement.target.value;
		},
	},
});
app.mount("#app");

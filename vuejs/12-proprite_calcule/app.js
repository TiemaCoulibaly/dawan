let app = Vue.createApp({
	data() {
		return {
			message: "Salut !",
			rienAVoir: "",
			titre: "",
		};
	},
	methods: {
		reverseMessage() {
			console.count("ReverseMessage");
			return this.message.split("").reverse().join("");
		},
	},
	computed: {
		// Exécuter une fois au lancement de l'application, puis le resultat est mis en cache. cette fonction ne sera rappellé seulement si la variable this.message change.
		reverseMessageComputed() {
			console.count("ReverseMessageComputed");
			// message = this.reverseMessage();
			// console.log(message);
			return this.message.split("").reverse().join("");
		},
	},
	watch: {
		// Généralement utilisé pour les traitements asynchrones
		titre(newValeur, oldValeur) {
			console.log("Watch");
			console.log("Vouvelle Valeur: ", newValeur);
			console.log("Ancienne Valeur: ", oldValeur);
		},
	},
	created: function () {
		console.log("Creation de l'application");
	},
});
app.mount("#app");

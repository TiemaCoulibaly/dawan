let app = Vue.createApp({
	data() {
		return {
			message: "hello world",
			user: "",
			lists: ["ranger", "manger", "courir"],
			produits: ["Pizza", "Burger", "Chips", "Pasta", "Tacos"],
			commandes: [],
			todos: [
				{
					id: 1,
					content: "Tache #1",
				},
				{
					id: 2,
					content: "Tache #2",
				},
			],
			tabs: ["Lol", "Mdr", "Ptdr"],
		};
	},
	methods: {
		commander(produit) {
			this.commandes.push(produit);
		},
		inverser() {
			this.tabs.reverse();
		},
		ajouterList() {
			this.lists.push(this.user);
		},
	},
});
app.mount("#app");

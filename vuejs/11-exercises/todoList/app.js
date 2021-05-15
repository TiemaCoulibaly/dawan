let app = Vue.createApp({
	data() {
		return {
			todos: [],
			options: [
				{ label: "Urgent", type: "alert alert-danger" },
				{ label: "Important", type: "alert alert-warning" },
				{ label: "Pas important", type: "alert alert-success" },
			],
		};
	},
	methods: {
		addTask(event) {
			let texte = event.target.task.value;
			let taille = event.target.size.value;

			// console.log("Texte:" + texte);
			// console.log("Taille: " + taille);
			// console.log("Couleur:" + event.target.level.value);

			let task = {
				texte: texte,
				style: {
					fontSize: `${taille}px`,
					listStyle: "none",
				},
				couleur: event.target.level.value,
			};

			this.todos.push(task);
		},
	},
});

app.mount("#app");

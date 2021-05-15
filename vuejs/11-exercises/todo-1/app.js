let app = Vue.createApp({
	data() {
		return {
			tabs: [],
			tache: "",
			taille: "",
			etiquette: "",
			back: "",
		};
	},
	methods: {
		addList(options) {
			this.tabs.push(this.tache, this.taille, this.etiquette);
			this.tache = "";
			// this.taille = "";
			this.etiquette = "";
			if (options === "urgent") {
				this.back = "red";
			} else if (options == "important") {
				this.back = "orange";
			} else {
				this.back = "blue";
			}
			this.taille + "px";
		},
	},
});
app.mount("#app");

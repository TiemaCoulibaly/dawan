let app = Vue.createApp({
	data() {
		return {
			message: "Méthodes Vue js",
		};
	},
	methods: {
		sayHello() {
			return "Salut Tout le monde !!!";
		},
		getDate: function () {
			const date = new Date();
			return date.toLocaleDateString();
		},
	},
});
app.mount("#app");

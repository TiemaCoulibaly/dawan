let app = Vue.createApp({
	data() {
		return {
			imgUrl: "",
		};
	},
	methods: {
		changeImage(nombre) {
			if (nombre == 1) {
				this.imgUrl =
					"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
			} else if (nombre == 2) {
				this.imgUrl =
					"https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
			} else if (nombre == 3) {
				this.imgUrl =
					"https://images.unsplash.com/photo-1591382386627-349b692688ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmFiYml0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
			}
		},
	},
});
app.mount("#app");

let app = Vue.createApp({
	data() {
		return {
			isActive: true,
			// Attention le spinal-case/kebab-case n'est pas valide en js
			//Il faut mettre des quotes, ou double quote (ex: 'txt-error')
			mesClasses: {
				active: false,
				"txt-error": true,
			},
			monStyle: {
				"font-size": "18px",
				color: "red",
				backgroundColor: "yellow",
			},
		};
	},
	methods: {
		desactivateClass() {
			this.isActive = false;
		},
	},
});
app.mount("#app");

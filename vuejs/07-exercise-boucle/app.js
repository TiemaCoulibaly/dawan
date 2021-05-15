import { Employe } from "./employe.js";
let app = Vue.createApp({
	data() {
		return {
			utilisateurs: Employe.makeTenEmploye(),
		};
	},
});
app.mount("#app");

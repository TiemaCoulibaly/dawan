import TheHeader from "./theheader.js";
import TheBody from "./thebody.js";
let app = Vue.createApp({
	data() {
		return {
			search: "",
		};
	},
	methods: {
		updateSearch(event) {
			//console.log("App: ", event);
			this.search = event;
		},
	},
	components: {
		"v-header": TheHeader,
		"the-body": TheBody,
	},
});

app.mount("#app");

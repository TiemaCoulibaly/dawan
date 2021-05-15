import bodyComponent from "./body.js";

let app = Vue.createApp({
	data() {
		return {
			message: "Hello World !",
		};
	},
	methods: {},
	computed: {},
	watch: {},
});

//Composant Global: disponible n'importe ou dans l'application
app.component("v-header", {
	name: "Header",
	props: {
		bgColor: {
			type: String,
		},
		nbElement: {
			type: Number,
		},
	},
	data() {
		return {
			titre: "Mon premier Composant !",
		};
	},
	template: `
  <header>
  <h1>{{titre}}</h1>
  <v-body></v-body>
  </header>
    `,
	components: {
		"v-body": bodyComponent,
	},
});
//Composant Global
app.component("v-footer", {
	name: "Footer",
	props: ["msg", "visible"],
	template: `
        <footer>
        <p>Message: {{msg}}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis nisi sequi vitae, vero fugit voluptatibus ipsam exercitationem deleniti cum debitis praesentium dolore, illo blanditiis optio! Laboriosam cumque unde soluta.</p>
            <ul>
                <li><a href="#">item 1</a><a href="#">item 2</a><a href="#">item 3</a></li>
            </ul>
        </footer>
    `,
});

app.mount("#app");

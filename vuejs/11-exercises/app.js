let app = Vue.createApp({
	data() {
		return {
			movies: [],
		};
	},
	methods: {
		addMovie(event) {
			let title = event.target.title.value;
			let description = event.target.description.value;
			let year = event.target.year.value;

			let movie = {
				title,
				description,
				year,
			};

			this.movies.push(movie);
		},
		removeMovie(index) {
			this.movies.splice(index, 1);
		},
	},
});
app.mount("#app");

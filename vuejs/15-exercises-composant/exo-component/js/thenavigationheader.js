const TheNavigationHeader = {
	name: "Navigation",
	data() {
		return {};
	},
	methods: {
		sendSearch(event) {
			const searched = event.target.search.value;
			// console.log(searched);
			this.$emit("send-search", searched);
		},
	},
	template: `
        <nav class="navbar navbar-dark bg-dark">
            <form class="form-inline" @submit.prevent="sendSearch($event)">
                <input class="form-control mr-sm-2" name="search" type="search" placeholder="ex: Avatar" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
            </form>
        </nav>
    `,
};

export default TheNavigationHeader;

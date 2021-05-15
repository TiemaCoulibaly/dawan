const VArticle = {
	name: "Header",
	data() {
		return {};
	},
	methods: {
		updateTitle() {
			this.$emit("my-update-title", "Nouveau Titre");
		},
	},
	template: `
        <div>
            <button @click="updateTitle">Mettre à jour</button>
        </div>
    `,
};

export default VArticle;

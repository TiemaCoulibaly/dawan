class Useless {
	#name;
	constructor(name) {
		this.#name = name;
	}

	hello() {
		return `Hello ${this.#name}`;
	}
}

//module node
module.exports = Useless;

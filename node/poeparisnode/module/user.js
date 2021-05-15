
export default class User {
    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    whoIam() {
        return `I'm ${this.#firstname} ${this.#lastname}`;
    }
}
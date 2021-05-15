import hello from "./js/hello";
import "./scss/style.scss";

document.addEventListener("DOMContentLoaded", () => {
	const message = hello("John Doe");
	document.querySelector("#target").innerText = message;
});

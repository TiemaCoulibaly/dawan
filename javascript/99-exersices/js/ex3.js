// https://pi.delivery/#apipi_get
// https://api.pi.delivery/v1/pi?start=0&numberOfDigits=10
// https://jsonplaceholder.typicode.com/posts

//Fetch

// fetch("https://jsonplaceholder.typicode.com/posts")
// 	.then((response) => response.json())
// 	.then((response) => {
// 		response.map((user) => {
// 			let container = document.getElementById("root");
// 			let p = document.createElement("p");

// 			container.appendChild(p);

// 			p.textContent = `${user.id} - ${user.title}

//       ${user.body}`;

// 		});
// 	});

//-------------------
//XHR

let xhr = new XMLHttpRequest();

xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
	console.log("====================================");
	console.log(xhr.status);
	console.log("====================================");
	if (this.status >= 200 && this.status < 300) {
		console.log("====================================");
		console.log(this.response);
		console.log("====================================");
	}
};

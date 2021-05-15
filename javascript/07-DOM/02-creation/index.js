let elementUl = document.querySelector("ul");
let newEl = document.createElement("li");
newEl.textContent = "jeudi";
elementUl.appendChild(newEl);

let newLink = document.createElement("a");
newLink.textContent = "Lien ver Dawan";
newLink.setAttribute("title", "Redirection ver dawan");
newLink.setAttribute("href", "https://dawan.fr");

let bodyElement = document.querySelector("body");
bodyElement.appendChild(newLink);

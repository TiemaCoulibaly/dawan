function loaded(callable) {
	document.addEventListener("DOMContentLoaded", callable);
}

function $(selector) {
	return document.querySelector(selector);
}

function $$(selector) {
	return document.querySelectorAll(selector);
}

function screenWidth(lar) {
	if (lar >= 576 && $("body > nav ul").classList.contains("active")) {
		$("body > nav ul").classList.toggle("active");
	}
}

loaded(function () {
	var lar = window.innerWidth;
	window.addEventListener("resize", function (event) {
		lar = window.innerWidth;
		screenWidth(lar);
	});
	$(".toggle-menu").addEventListener("click", function () {
		$("body > nav ul").classList.toggle("active");
	});
	screenWidth(lar);

	if ($("#niveauAnglais")) {
		$("#niveauAnglais").addEventListener("change", function () {
			let varNiveauAng = $("#niveauAnglais").value;
			//console.log(varNiveauAng);
			$("#rangeAnglais").innerHTML = varNiveauAng;
		});
	}

	$$("p").forEach(function (p) {
		p.addEventListener("click", function () {
			//console.log(this.innerHTML)
		});
	});
});
var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;

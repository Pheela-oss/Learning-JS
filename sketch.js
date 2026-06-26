const allLinks = document.querySelectorAll(".linksAprendizado");

allLinks.forEach(int => {
	int.addEventListener("click", function () {
		if (this.id === "AprendaArray" && window.innerWidth < 550){
			window.location.href = "./page1.html"
		}
	});
});
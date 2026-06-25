const linksAprendizado = document.querySelectorAll(".linksAprendizado");
console.log("Sistema Inicializado");

linksAprendizado.forEach(int => {
	int.addEventListener("click", function() {
		if (this.id === "AprendaArray" && window.innerWidth < 900){
			console.log("AprendaArray clicado")
			window.open("https://www.youtube.com/watch?v=5nm7lPwNroU", "_blank")
		}
	})
})
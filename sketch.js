const loginButton = document.getElementById("loginButton")
const nickname = document.getElementById("Nickname");
const password = document.getElementById("Password");
const deleteUser = document.getElementById("excluirConta")

loginButton.addEventListener("click", function () {
    const nickname_storage = localStorage.getItem("username");
    const password_storage = localStorage.getItem("password");
    
    if (nickname.value == "" || password.value == ""){
        alert("Nickname/Senha Vazia")
    } else {
        login(password_storage, nickname_storage);
    }

    console.log(nickname_storage);
    console.log(password_storage)
});

function login(password_storage, nickname_storage){
    const imagem = document.getElementById("emotion profile")
    const letra = document.getElementById("h1fromLEM")

    if ( password_storage === null || nickname_storage === null){
        localStorage.setItem("username", nickname.value);
        localStorage.setItem("password", password.value);
        imagem.src = "assets/content/media/Bothered Kuromi.jpg"
    } else {
        if (password_storage === password.value && nickname_storage === nickname.value){
            imagem.src = "assets/content/media/Happy Kuromi.jpg"
            letra.textContent = "Login com sucesso!"
            loginPopUp();
        } else {
            imagem.src = "assets/content/media/Scared Kuromi.jpg"
            letra.textContent = "usuario/senha incorreto!"
            loginPopUp();
        }
    }
}

function loginPopUp(){
    const modal = document.querySelector(".loginErrorMessages")
    modal.style.top = "20px"

    setTimeout(function() {
        modal.style.top = "-150px"
    }, 1500)
};

deleteUser.addEventListener("click", function() {
    const imagem = document.getElementById("emotion profile");
    const letra = document.getElementById("h1fromLEM")
    localStorage.clear();
    imagem.src = "assets/content/media/Bothered Kuromi.jpg"
    letra.textContent = "Usuario Apagado :("
    loginPopUp();
});
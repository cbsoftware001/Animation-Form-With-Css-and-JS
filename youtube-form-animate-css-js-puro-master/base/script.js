
const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");


btnLogin.addEventListener("click", (envento) => {
    envento.preventDefault();
    
    form.classList.add("form-hidden");
});
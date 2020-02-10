
const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");


btnLogin.addEventListener("click", (envento) => {
    envento.preventDefault();
    
    form.classList.add("form-hidden");
});

form.addEventListener("animationstart", (evento) => {
    if(evento.animationName === 'down'){
        document.querySelector("body").style.overflow = 'hidden';
    }
});

form.addEventListener("animationend", (evento) =>{
    if(evento.animationName == 'dow'){
        form.style.display = 'none';
        document.querySelector("body").style.overflow = 'hidden';
    }
});
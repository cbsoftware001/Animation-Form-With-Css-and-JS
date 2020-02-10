
const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");


btnLogin.addEventListener("click", (envento) => {
    envento.preventDefault();
    
    // Monitorar os inputs
    const fields = [... document.querySelectorAll(".input-block input")];
    fields.forEach( field =>{
        if(field.value === "") form.classList.add("validate-error");
    });
    
    const formError = document.querySelector(".validate-error");
    if(formError){
        formError.addEventListener("animationend", evento => { 
            if(evento.animationName === "no-no"){
                formError.classList.remove("validate-error");
            }
        });
    }else{
        form.classList.add("form-hidden");
    }

    
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
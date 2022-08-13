const inputs = document.querySelectorAll('.input');
const botao = document.querySelector(".login__button")

//mover o label quando vamos digitar algo la
const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

//retornar o label pro lugar original mas apenas se o input em questao estiver vazio
function handleFocusOut({target}){
    const span = target.previousElementSibling;
    if(target.value==""){
        span.classList.remove('span-active');
    }
}

const handleChange= ()=>{
    const[username, password] = inputs; //desestruturei o array input em duas variaveis separadas
    if(username.value && password.value.length >= 8){
        botao.removeAttribute('disabled');
    }else{
        botao.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));


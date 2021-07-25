function MaquinaEscrever(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

const frase = document.getElementById('frase-maquina');
MaquinaEscrever(frase);

function ExibirAlert(){
    const alerta = document.getElementById('form-alert-danger');
    const inputNome = document.querySelector('input[text]');
    const inputEmail = document.querySelector('input[email]');
    const inputMessage = document.querySelector('textarea');
    if(inputNome == null){
        alerta.style.visibility = "visible";
        alerta.style.transition = "4s";
    }
    else if(inputEmail == ""){
        alerta.style.visibility = "visible";
    }
    else if(inputMessage == null){
        alerta.style.visibility = "visible";
    }
    else{
        window.alert('Formulário enviado com sucesso');
    }
}
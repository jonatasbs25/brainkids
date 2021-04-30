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
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    if(inputNome == "" || inputEmail == ""){
        document.getElementById('form-alert-danger').style.visibility = "visible";
    }
}
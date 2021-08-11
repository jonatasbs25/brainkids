/* Exibir dia e hora do sistema */
function dateTime(){
    const data = document.querySelector(".data");
    const horas = document.querySelector(".horas");

    data.innerHTML = getDate();
    horas.innerHTML = getTime();
}

setInterval(dateTime, 1000);

function getDate(){
    const now = new Date();
    const diaSemana = now.getDay();
    const semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const dia = now.getDate();
    const mes = now.getMonth();
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const ano = now.getFullYear();

    const data = `<p>${semana[diaSemana]}, ${dia} de ${meses[mes]} de ${ano}</p>`;

    return data;
}

function getTime(){
    const now = new Date();
    const hora = formatarZeros(now.getHours());
    const minutos = formatarZeros(now.getMinutes());
    const segundos = formatarZeros(now.getSeconds());

    const horas = `<p>${hora}:${minutos}:${segundos}</p>`;

    return horas;
}

const formatarZeros = (n) => {
    return ("0" + n).slice(-2);
}
// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML


let botaoExpandirRetrair = document.querySelectorAll(".botao-expandir-retrair");

function expandirRetrair(botaoClicado){
    let expandir = botaoClicado.parentElement.classList.toggle("expandido");
    botaoClicado.innerHTML = expandir ? '-' : '+';
}

for(let item of botaoExpandirRetrair) {
    item.addEventListener("click", e => expandirRetrair(e.currentTarget));
}

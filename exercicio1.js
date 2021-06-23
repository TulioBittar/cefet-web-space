// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const G = document.querySelector("#constante");
const M1 = document.querySelector("#massa1");
const M2 = document.querySelector("#massa2");
const d = document.querySelector("#distancia");
const resultado = document.querySelector("#resultado");
const botaoCalcular = document.querySelector("#calcular");

botaoCalcular.addEventListener('click', function () {
    resultado.value = (G.value*M1.value*M2.value)/(d.value**2);
})

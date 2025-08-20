'use strict'

const botaoCalcular = document.getElementById('calcular')
const listaTabuada = document.getElementById('lista')
let tabuada = []

function calcularTabuada () {

    debugger;

    const resultadoTabuada = document.createElement('ul')
    const numeroTabuada = document.getElementById('numero-tabuada').value
    let numero = Number(numeroTabuada)

    for(let i = 0; i <= 10; i++){
        let resultado = numero * i 
        tabuada[i]= `${numero} x ${i} = ${resultado}`
        let p = document.createElement('p')
        p.textContent = tabuada[i]
        resultadoTabuada.appendChild(p)
        
    }   
    listaTabuada.appendChild(resultadoTabuada)
    


}
botaoCalcular.addEventListener('click', calcularTabuada)

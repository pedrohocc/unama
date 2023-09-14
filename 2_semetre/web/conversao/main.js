const inputReal = document.querySelector('#input_real')
const inputDolar = document.querySelector('#input_dolar')
const inputEuro = document.querySelector('#input_euro')
const dolar = 4.50
const euro = 5.15

function limparInputs() {
    inputReal.value = ''
    inputDolar.value = ''
    inputEuro.value = ''
    
    desbloquearBotaoConverter()
}

function converterValores() {
    const contador = verificarQuantidadeCampos()
    let valorEmDolar = 0
    let valorEmEuro = 0
    let valorEmReal = 0

    if(inputReal.value != 0 && contador == 1)  {
        valorEmDolar = converterRealEmDolar(inputReal.value)
        valorEmEuro = converterRealEmEuro(inputReal.value)

        inputDolar.value = valorEmDolar
        inputEuro.value = valorEmEuro

        bloquearBotaoConverter()
    } else if(inputDolar.value != 0 && contador == 1) {
        valorEmReal = converterDolarEmReal(inputDolar.value)
        valorEmEuro = converterRealEmEuro(valorEmReal)

        inputReal.value = valorEmReal
        inputEuro.value = valorEmEuro

        bloquearBotaoConverter()
    } else if (inputEuro.value != 0 && contador == 1) {
        valorEmReal = converterEuroEmReal(inputEuro.value)
        valorEmDolar = converterRealEmDolar(valorEmReal)

        inputReal.value = valorEmReal
        inputDolar.value = valorEmDolar

        bloquearBotaoConverter()
    } else {
        alert('Informe apenas 1 campo')
    }
}

function converterRealEmDolar(valor) {
   const valorConvertido = valor / dolar
   return valorConvertido.toFixed(2)
}

function converterRealEmEuro(valor) {
    const valorConvertido = valor / euro
    return valorConvertido.toFixed(2)
}


function converterDolarEmReal(valor) {
    const valorConvertido = valor * dolar
    return valorConvertido.toFixed(2)
}

function converterEuroEmReal(valor) {
    const valorConvertido = valor * euro
    return valorConvertido.toFixed(2)
}

function bloquearBotaoConverter() {
    const bnt = document.querySelector('#bnt_converter')
    bnt.disabled = true
}

function desbloquearBotaoConverter() {
    const bnt = document.querySelector('#bnt_converter')
    bnt.disabled = false
}

function verificarQuantidadeCampos() {
    let total = 0
    if(inputReal.value != '') {
        total++
    }
    if(inputDolar.value != '') {
        total++
    }
    if(inputEuro.value != ''){
        total++
    }

    return total
}
let opc = '' 
let input = document.querySelector('input')

const listaBntNum = document.querySelectorAll('.bntNumero')
listaBntNum.forEach(element => {
    element.onclick = () => mudarValor(element.value) 
})

const listaBntOpc = document.querySelectorAll('.bntOpc')
listaBntOpc.forEach(element => {
    element.onclick = () => operacaoEscolhida(element)
})

function adicionarPonto() {
    input.value += '.'
}

function mudarValor(valor) {
    input.value += valor
}

function operacaoEscolhida(bnt) {
    switch(bnt.id) {
        case 'bntSoma':
            opc = '+'
            break
        case 'bntSubtracao':
            opc = '-'
            break
        case 'bntDivisao':
            opc = '/'
            break
        case 'bntMultiplicacao':
            opc = '*'
            break
        case 'bntRaiz':
            opc = '√'
            break
        case 'bntElevadoQuadrado':
            opc = '^²'
            break
        case 'bntElevado':
            opc = '^'
            break
        case 'bntFatorial':
            opc = '!'
            break
        case 'bntLogDois':
            opc = 'Log₂'
            break
        case 'bntLogDez':
            opc = 'Log₁₀'
            break
        case 'bntLogNatural':
            opc = 'Logₑ'
            break
    }
    input.value += opc
}

function fazerConta() {
    const value = input.value
    let inicioEFimIndexOperador = []
    inicioEFimIndexOperador = pegarIndexOperacao(value)
    const numero1 = Number(value.substring(0, inicioEFimIndexOperador[0]))
    const numero2 = Number(value.substring(inicioEFimIndexOperador[1], value.length))
    let resultado = 0
    
    switch(opc) {
        case '+':
            resultado = (numero1 + numero2)
            break
        case '-':
            resultado = (numero1 - numero2)
            break
        case '/':
            if(numero2 != 0) {
                resultado = (numero1 / numero2)
            } else {
                resultado = 'Não é posssivel dividir por 0'
            }
            break
        case '*':
            resultado = (numero1 * numero2)
            break
        case '√':
            resultado = Math.sqrt(numero2)
            break
        case '^²':
            resultado = Math.pow(numero1, 2)
            break
        case '^':
            resultado = Math.pow(numero1, numero2)
            break
        case '!':
            resultado = calcularFatorial(numero1)
            break
        case 'Log₂':
            resultado = Math.log2(numero2)
            break
        case 'Log₁₀':
            resultado = Math.log10(numero2)
            break
        case 'Logₑ':
            resultado = Math.log(numero2)
            break
    }

    input.value = resultado != 'Não é posssivel dividir por 0' ? Number(resultado).toPrecision(3) : resultado
    opc = ''
}

function apagar() {
    input.value = ''
    opc = ''
}

function calcularFatorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calcularFatorial(n - 1);
    }
  
}

function pegarIndexOperacao(value) {
    if(opc != '') {
        let inicioIndex = value.indexOf(opc)
        let fimIndex = inicioIndex + opc.length
        return [inicioIndex, fimIndex]
    } 

    if(opc == '') {
        const listaOperacoes = ['+', '-', '*', '/', '√', '^²',  '^', '!', 'Log₂', 'Log₁₀','Logₑ']
        let inicioIndex = 0
        let fimIndex = 0
        for (const element of listaOperacoes) {
            if(value.indexOf(element) != -1) {
                opc = element
                inicioIndex = value.indexOf(element)
                fimIndex = inicioIndex + element.length
                return [inicioIndex, fimIndex]
            }
        }
    }

    return [-1, -1]
}
  
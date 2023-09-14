function verificarMaiorNumero(input1, input2, input3) {
    const numero1 = Number(input1.value)
    const numero2 = Number(input2.value)
    const numero3 = Number(input3.value)

    if(numero1 == numero2 && numero1 == numero3) {
        alert('Números iguais!')
    } else {
        const maior = Math.max(numero1, numero2, numero3)
        alert(`O maior número é ${maior}`)
    }
}
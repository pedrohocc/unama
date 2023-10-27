const lines = [ '1', '1 2 3 2 1', '' ]
const tipo_cha = Number(lines[0])
const respostas = lines[1].split(' ').map((value) => Number(value))

let contador = 0
respostas.forEach((value) => {
    if(value == tipo_cha) {
        contador++
    }
})

console.log(contador)
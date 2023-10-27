const line = [ '3', '11965', '6604', '77587', '' ]

const participantes = Number(line[0])
const votos = []
let joao = 0
let res = ''

for (let index = 1; index < participantes+1; index++) {
    if(index == 1) {
        joao = Number(line[index])
    }

    if(joao < Number(line[index])) {
        res = 'N'
        break
    }

    res = 'S'
}

console.log(res)
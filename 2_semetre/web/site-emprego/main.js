function getEmpregos() {
    fetch('http://mock-json-service.glitch.me/').then(response => {
        return response.json()
    }).then(data => {
        const empregos = data;
        toCard(empregos)
    }
    )
}

function toCard(empregos) {
    const divEmpregos = document.querySelector('.divEmpregos')
    for (const item of empregos) {
        const div = document.createElement('div')
        div.classList.add('card')
        div.classList.add('shadow')
        div.classList.add('card-ajuste')

        const h1 = document.createElement('h1')
        h1.textContent = 'Vaga de Emprego'

        const h5 = document.createElement('h5')
        h5.textContent = 'Cargo: ' + item.position

        const h6 = document.createElement('h6')
        h6.textContent = 'Empresa: ' + item.company

        const pLocal = document.createElement('p')
        pLocal.textContent = `Local: ${item.location}`

        const pDescricao = document.createElement('p')
        pDescricao.textContent = `Descrição: ${item.description}`

        const button = document.createElement('button')
        button.classList.add('btn')
        button.classList.add('btn-secondary')
        button.classList.add(`bnt-${item.id}`)
        button.textContent = '👍'
        button.onclick = function(){likeJob(item.id)}

        div.appendChild(h1)
        div.appendChild(h5)
        div.appendChild(h6)
        div.appendChild(pLocal)
        div.appendChild(pDescricao)
        div.appendChild(button)

        divEmpregos.appendChild(div)
    }
}

function likeJob(id) {
    const bntSelecionado = document.querySelector(`.bnt-${id}`)
    bntSelecionado.classList.toggle('btn-secondary')
    bntSelecionado.classList.toggle('btn-success')
    if(bntSelecionado.textContent == '👍') {
        bntSelecionado.textContent = '💜'
    } else {
        bntSelecionado.textContent = '👍'
    }
}
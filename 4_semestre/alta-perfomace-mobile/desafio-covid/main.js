const tabela = document.querySelector('table')
const casos = document.querySelector('#casos')
const mortos = document.querySelector('#mortos')
let dados = []
let totalInfectados = 0
let totaloMortos = 0

const url = `https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true`
fetch(url).then(res => {
      return res.json()
    }).then(data => {
        dados = data
        totalInfectados = dados.infected
        totaloMortos = dados.deceased
        for (const item of dados.infectedByRegion) {
            const linhaTabela = document.createElement("tr")
            const estado = document.createElement('td')
            const casos = document.createElement('td')
            estado.textContent = item.state
            casos.textContent = item.count
            linhaTabela.appendChild(estado)
            linhaTabela.appendChild(casos)
            tabela.appendChild(linhaTabela)
        }
        casos.innerText += ` ${totalInfectados}`
        mortos.innerText += ` ${totaloMortos}`
    })




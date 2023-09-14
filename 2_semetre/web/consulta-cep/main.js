const inputLogradouro = document.querySelector('#logradouro')
const inputBairro = document.querySelector('#bairro')
const inputCidade = document.querySelector('#cidade')
const inputEstado = document.querySelector('#estado')

function consultarCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`).then(res => {
        if(!res.ok) {
            throw new Error('Erro na requisição')
        } else {
            return res.json()
        }
    }).then(
        data => {
            alterarValorInputs(data)
        }).catch(error => {
            alert(`Erro: ${error}`)
        })
}

function alterarValorInputs(data) {
    inputLogradouro.value = data.logradouro
    inputBairro.value = data.bairro
    inputCidade.value = data.localidade
    inputEstado.value = data.uf

    retirarEfeito()
}

function retirarEfeito() {
    inputLogradouro.classList.remove('placeholder')
    inputBairro.classList.remove('placeholder')
    inputCidade.classList.remove('placeholder')
    inputEstado.classList.remove('placeholder')

    ativarCampo()
}

function ativarCampo() {
    inputLogradouro.disabled = false
    inputBairro.disabled = false
    inputCidade.disabled = false
    inputEstado.disabled = false
}